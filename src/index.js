
const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes/');
const db = require('./config/db')

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// v1 api routes
app.use('/', routes);

db.connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;