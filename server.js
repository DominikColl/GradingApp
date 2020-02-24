const log = require('debug')('web:logging')
const app = require('./app')
// setting to port localhost:3000
const port = 3000;

app.listen(port, () => log(`WEB listening on port ${port}!`))