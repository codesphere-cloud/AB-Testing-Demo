const sqlite3 = require('sqlite3').verbose()
const path = require('path');
const express = require('express')

const app = module.exports = express();

app.use('/', express.static('public'));

app.listen(3000)
