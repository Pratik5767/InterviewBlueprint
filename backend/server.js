const dns = require('dns')
const connectToDB = require('./src/config/database.js')
const app = require('./src/app.js')
require('dotenv').config()


dns.setServers(['1.1.1.1', '8.8.8.8'])

connectToDB()

app.listen(3000, () => {
    console.log("SERVER IS RUNNING ON PORT 3000")
})