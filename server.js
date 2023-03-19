var express = require('express');
var app = express();
var dateTime = require('node-datetime');
var dt = dateTime.create();
var dtformatted = dt.format('H:M:S');

app.set('view engine', 'pug');
app.set('views', './');

app.use((req, res, next) => {
    console.log(dtformatted + ' [Webserver]: Requested');
    next();
  });


app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log(dtformatted + ' [Webserver]: Started on port 3000')
});