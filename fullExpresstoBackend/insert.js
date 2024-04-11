const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/Univ";
MongoClient.connect(url)
  .then((client) => {
    const db = client.db("Univ");
    const myobj = [
      {
        name: "Manoj",
        course: "Java",
        marks: 98,
        Grade: "O",
        Mode: "Regular",
      }/* 
      { name: "Anu", course: "React js", marks: 98 },
      { name: "Ram", course: "HTML", marks: 98 },
      { name: "Tej", course: "Angular js", marks: 98 },
      {
        name: "Manoj",
        course: "Node js",
        marks: 98,
        Grade: "O",
        Mode: "Regular",
      }, */
    ];
    return db.collection("Student_data").insertMany(myobj);
  })
  .then((result) => {
    console.log("Number of documents inserted: " + result.insertedCount);
    process.exit();
  })
  .catch((err) => {
    console.error("An error occurred:", err);
  });
