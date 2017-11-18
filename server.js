const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello ShareRide!'));

app.listen(config.port, () => console.log('Example app listening on port '+config.port+'!'));