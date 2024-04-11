// Server:
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/" + "insert.html");
});
app.post("/insert", (req, res) => {
  MongoClient.connect(url).then((db) => {
    var dbo = db.db("Univ");
    dbo
      .collection("Student_data")
      .insertOne(req.body)
      .then((data) => {
        console.log("Inserted data:" + data);
        db.close();
        res.send("<script>alert('values have been inserted');</script>");
        // res.send("Insert Successful");
      })
      .catch((err) => {
        console.error("An error occurred:", err);
      })
      .catch((err) => {
        console.error("An error occurred in connecting DB:", err);
      });
  });
});
app.listen(2000, () => {
  console.log("Visit localhost 2000");
});
