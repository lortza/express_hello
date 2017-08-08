// requires the express package
const express = require('express');

// enable 'app' to bind a route handler function to a particular URL pattern for the given HTTP method.
const app = express();

// enable view rendering with handlebars
app.set('view engine', 'hbs');

// set up basic application based on the express package
// In this case, when our app receives a get request to the top-level path (/), it will send back the string "Hello World!" as its response
app.get('/', function (request, response) {
  response.render('home');
});

app.get('/:name', function (req, res) {
  const infoFromParams = req.params.name;
  // res.send(`Hello ${name}`);
  res.render('home', { whoDat: infoFromParams });
});

// enable server to run
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});