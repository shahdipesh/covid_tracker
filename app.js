var express = require("express");
var path = require('path');
var request = require("request");
var tracker = require("./tracker");
var hbs = require ('hbs');

var app = express();

var viewsPath=path.join(__dirname,'templates','views');
var partialsPath =path.join(__dirname,'templates','partials');
app.use(express.static(path.join(__dirname)));

app.set('view engine','hbs');
app.set ('views',viewsPath);
hbs.registerPartials(partialsPath)


app.get ('',(req,res)=>{
  res.render('index');
})


app.get ('/tracker',(req,res)=>{
  res.render('tracker');
})

app.get("/track", (req, res) => {
  var country = req.query.country;
  tracker.getData(country, (data) => {
    res.send(data);
  });
});

app.listen(3000, () => {
  console.log("Server");
});
