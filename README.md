# bootstrap-express-react

## Setup

On download make sure you have the following software installed for your initial development environment:
* node 7.2.0
* chromedriver

After verifying the above requirements have been met navigate to [app](./app) directory and run `npm install`

After the bundle install process is complete navigate to the [client](./client) directory and run `npm install`

You will also need forever for continuous runtime `npm install -g forever`

## Test

### Client
#####From client directory: 
* `npm run test`
* `npm run test-debug` keeps browser open so you can debug in development

Client side tests produce coverage results in `coverage/chrome/index.html`

### Server
TODO add server side tests 

Run the rspec tests with `simplecov` to produce server side coverage results. 

### Project Commands
#####From client directory: 
* `npm run dev` builds the project for a development environment 
* `npm run prod` builds the project for a production environment (minification etc)
* `npm run test` runs karma tests within the terminal window and displays all pass and fail conditions
* `npm run lint` runs eslint on *.js and *.jsx files

#####Server
* `npm run start` runs the server in debug mode
