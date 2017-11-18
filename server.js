const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router);

app.listen(config.port, () => console.log('Example app listening on port '+config.port+'!'));