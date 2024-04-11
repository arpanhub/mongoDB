const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var fs = require("fs");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "form.html");
});

app.post("/saveData", function (req, res) {
  const response = {
    email: req.body.email,
    name: req.body.name,
    mobile: req.body.mobile,
    password: req.body.password,
    gender: req.body.gender,
  };

  let data = JSON.stringify(response, null, 2);
  fs.appendFile("test.txt", data, function () {
    console.log("Write operation complete.");
  });

  res.end("successfully submitted");
});

app.listen(1000, function (error) {
  if (error) throw error;
  console.log("Server created Successfully");
});

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";
MongoClient.connect(url).then((client) => {
  var dbo = client.db("Univ");
  var request = { course: "Java" };
  var newdata = { $set: { course: "Java C", marks: 70 } };
  dbo
    .collection("Student_data")
    .updateMany(request, newdata)
    .then((result) => {
      console.log("Number of documents updated: " + result.modifiedCount);
      console.log(result);
      process.exit();
    })
    .catch((err) => {
      console.error("An error occurred:", err);
    })
    .catch((err) => {
      console.error("An error occurred:", err);
    });
});
