/* var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url)
  .then((db) => {
    var dbo = db.db("Univ");
    dbo
      .collection("Student_data")
      .findOne({ name: "Anu" })
      .toArray()
      .then((data) => {
        console.log(data);
        db.close();
      })
      .catch((err) => {
        console.error("An error occurred:", err);
      });
  })
  .catch((err) => {
    console.error("An error occurred while connecting to MongoDB:", err);
  }); */
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  MongoClient.connect(url)
      .then((db) => {
          var dbo = db.db("Univ");
          dbo.collection("Student_data").findOne({"name": "Anu"})
              .then(result => {
                  if (!result) {
                    console.log("Not found Student with name Anu!")
                    //   return res.status(404).send({
                        //       message: "Not found Student with name Anu!"   
                        //       });
                    } else {
                        console.log(result);
                        //   return res.status(200).send(result);
                    }
                }).catch(err =>{
                  console.log( "Error when get Student by name.")
                  // return res.status(500).send({
                      //     message: "Error when get Student by name."
                      // });
                    });
      })
      .catch(err => {
          console.log( "Service Unavailable! Can not connect to the database.")
          /* return res.status(503).send({
              message: "Service Unavailable! Can not connect to the database."
          }); */
      });
  