
# Coindesk-API

# `How to run this project`

To run project on your localhost, follow the steps below :

### `Installing npm`

If you dont have Node.js and node package manages also known as 'npm', you'll need to install it first.
You can do it by download it from [official website](https://nodejs.org/en/download/) and installing it on your machine.

To check if everything is working properly, you can open command prompt and type in `npm -v` and `node -v`.

### `step 1`

Clone this repository

### `step 2`

Open command prompt and run `cd replace-with-path-to-the-project-folder` command.
(example `cd C:/Users/user/desktop/project-folder/`)

Path to the folder now should be shown before your input marker.
Enter `npm install` in the command prompt and hit Enter. This should install all modules this project is dependent on.

### `step 3`

When dependencies are installed, you can run `node index` command.

`server running 3232` will appear.

You can now make GET requests to `http://localhost:3232/api/getPriceHistory/{replaceWithStartDate}/{replaceWithEndDate}`.

# `Changing trusted-IPs and rate-limit`

### `changing trusted IP`

You can add your local IP to `trustedIps` array constant to get access to api.

### `changing rate-limit settings`

You can change period of the limit by changing `windowMs` parameter in `rateLimiter` constant object, as well as changing the limit itself by chaning
`max` parameter of `rateLimiter` constant.