
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myobj = [
        {
        "id": 1,
        "fname": "NNNAAA",
        "lname": "noy",
        "gender": "female",
        "expired":false,
        "role":["admin","user" ],
        }
    ];
    db.collection("customers").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  }); 