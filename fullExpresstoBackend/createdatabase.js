// /* 
// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://127.0.0.1:27017/Univ";
// MongoClient.connect(url)
// .then(db => {
// console.log("Database created!");
// db.close();
// })
// .catch(err => {
// throw err;
// }); */



// /* const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://127.0.0.1:27017/Univ";

// MongoClient.connect(url, { useUnifiedTopology: true })
//   .then((db) => {
//     console.log("Database created!");
//     db.close();
//   })
//   .catch((err) => {
//     throw err;
//   }); */




  const MongoClient = require('mongodb').MongoClient;
  const url = "mongodb://127.0.0.1:27017/Univ";
  
  MongoClient.connect(url)
    .then((db) => {
      const dbo = db.db("Univ");
      dbo.createCollection("Student_data")
        .then((res) => {
          console.log("Collection created");
          db.close();
        })
        .catch((err) => {
          console.error(`Error creating collection: ${err}`);
          db.close();
        });
    })
    .catch((err) => {
      console.error(`Error connecting to MongoDB: ${err}`);
    });



