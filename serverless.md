## Serverless framework

### Installing the required packages
```
yarn global add serverless
yarn add serverless-http
```

### configuring cloud option
serverless config credentials --provider aws --key XXX --secret XXX

###
update code :
```javascript
const serverless = require('serverless-http');
module.exports.handler = serverless(express);
```
