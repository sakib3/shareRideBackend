const express = require('express')
const app = express()
const config = require('./config');
app.get('/', (req, res) => res.send('Hello ShareRide!'))

app.listen(config.port, () => console.log('Example app listening on port '+config.port+'!'))