// Create a basic server using Express.JS
var express = require("express");
var bodyParser = require("body-parser");
var path = require ("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var reservations = [
  {
    routeName: "ravenwills",
    name: "Raven Wills",
    phoneNumber: "5127799614",
    email: "raven.wills@gmail.com",
    uniqueID: "raven"
  },
  {
    routeName: "erikamats",
    name: "Erika Matsumoto",
    phoneNumber: "5124444444",
    email: "erikamatsumoto@utexas.edu",
    uniqueID: "erika"
  },
  {
    routeName: "kevinpena",
    name: "Kevin Pena",
    phoneNumber: "5125555555",
    email: "kevin.pena@gmail.com",
    uniqueID: "kevin"
  }
];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "html/index.html"));
});
app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "html/table.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "html/reserve.html"));
});

app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

app.get("/api/reservations/:reservation", function(req, res) {
  var chosen = req.params.reservation;
  console.log(chosen);
  for (var i = 0; i < reservations.length; i++) {
    if (chosen === reservations[i].routeName) {
      return res.json(reservations[i]);
    }
  }
  return res.json(false);
});

app.post("/api/reservations", function(req, res) {

var newreservation = req.body;

newreservation.routeName = newreservation.name
    .replace(/\s+/g, "")
    .toLowerCase();
  console.log(newreservation);
  characters.push(newreservation);
  res.json(newreservation);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
