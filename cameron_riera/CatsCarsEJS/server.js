var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
// app.get('/', function(request, response) {
//     // just for fun, take a look at the request and response objects
//    console.log("The request object", request);
//    console.log("The response object", response);
//    // use the response object's .send() method to respond with an h1
//    response.send("<h1>Hello Express</h1>");
// })

app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/cats", function (request, response){
    response.render('cats');
})

app.get("/cars", function (request, response){
    response.render('cars');
})

app.get("/cars/new", function (request, response){
    response.render('carsform');
})


// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
})