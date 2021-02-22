var express = require('express');
const fetch = require("node-fetch");

const app = express();

const PORT = 3232;

const MULTIPLIER = 1000;

const trustedIps = ['192.168.0.104','ADD NEW IP'];

app.use((_, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');
	next();
});

const fetchCoinDesk = async (startDate,endDate) => {
    const response = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json?start=' + startDate + '&end=' + endDate);
    const res = await response.json();
    return res;
}

//  Trusted Ip checker middleware

app.use('/api/getPriceHistory/', (req, res, next) => {
    let requestIP = req.ip.split(':').pop();
    if(trustedIps.indexOf(requestIP) >= 0) {
        next();
    } else {
        console.log('Call from untrusted IP : ', requestIP)
        res.send('Unauthorized connection');
    }
})

app.get('/api/getPriceHistory/:startDate/:endDate', (req, res) => {

    fetchCoinDesk(req.params.startDate, req.params.endDate).then(response => {
        const bpi = {...response.bpi}
        for (let index in bpi) {
            bpi[index] = Number(bpi[index] * MULTIPLIER).toFixed(1)
        }
    
        res.send(JSON.stringify(bpi));
    }).catch(e => {
        console.log(e)
        res.send(e)
    })
});

app.listen(PORT);
console.log('server running', PORT)

