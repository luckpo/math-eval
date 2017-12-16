## Simple API with Express

This application evaluates mathematical expressions, using [math.js](http://mathjs.org/).

It accepts POST calls on the /evaluate endpoints. Here is the format of the payload :

`{
    "expression": "<valid mathematical expression>"
}`


#### Dependencies
* axios: ^0.17.1
* express: ^4.16.2
* mathjs: ^3.17.0
* q: ^1.5.1

#### Installation
* application: `yarn install`

#### Execution
* This app is intended to get executed in elastic beanstalk (AWS), but can be run in other cloud environments
* Locally, run `node api.js`, `npm start` or use forever or pm2 (not provided/documented here)

Testing
* `yarn run test-local` to test locally (the runner tests `lib/mathEval.js`)
* `yarn run test-remote` to test remotely, the API endpoints are tested. You must update the url to test in `tests/config.js`, the default value is the public url of the Elastic Beanstalk application (the runner uses http calls and waits for the promises to return the result and compare with the expected results)

No cats were harmed during the coding of this app