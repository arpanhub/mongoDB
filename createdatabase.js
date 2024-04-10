/* 
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/Univ";
MongoClient.connect(url)
.then(db => {
console.log("Database created!");
db.close();
})
.catch(err => {
throw err;
}); */
/* const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/Univ";

MongoClient.connect(url, { useUnifiedTopology: true })
  .then((db) => {
    console.log("Database created!");
    db.close();
  })
  .catch((err) => {
    throw err;
  }); */
  /* const MongoClient = require('mongodb').MongoClient;
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
    }); */


/* var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://127.0.0.1:27017/Univ"; 
MongoClient.connect(url, function(err, db) { 
  if (err) throw err; 
  var dbo = db.db("Univ"); 
var myobj=[ 
{name:'Manoj',course:'Node js', marks:98,Grade:'O', Mode: 'Regular' }, 
{name:'Anu',course:'React js', marks:98}, 
{name:'Ram',course:'HTML', marks:98}, 
{name:'Tej',course:'Angular js', marks:98}, 
{name:'Manoj',course:'Node js', marks:98,Grade:'O', Mode: 'Regular' }, 
]; 
dbo.collection("Student_data").insertMany(myobj, function(err, data) { 
    if (err) throw err; 
    console.log("Number of documents inserted: " + data.insertedCount); 
    db.close(); 
  });
}); */
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/Univ";
MongoClient.connect(url)
.then(client => {
const db = client.db("Univ");
const myobj = [
{ name: 'Manoj', course: 'Node js', marks: 98, Grade: 'O', Mode: 'Regular' },
{ name: 'Anu', course: 'React js', marks: 98 },
{ name: 'Ram', course: 'HTML', marks: 98 },
{ name: 'Tej', course: 'Angular js', marks: 98 },
{ name: 'Manoj', course: 'Node js', marks: 98, Grade: 'O', Mode: 'Regular' }
];
return db.collection("Student_data").insertMany(myobj);
})
.then(result => {
console.log("Number of docunoments inserted: " + result.insertedCount);
process.exit();
})
.catch(err => {
console.error("An error occurred:", err);
});