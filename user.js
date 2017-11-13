
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/quiz2";
var db;

MongoClient.connect(url, function(err, database) {
if (err) throw err;
db = database;
console.log("connect to"+ url);
});

function getal(req,res){
    var query={};
db.collection("users").find(query).toArray(function (err, result) {
if (err) throw err;
console.log(result);
res.send(result);
});
}

function getf(req,res){
var para = req.param('fname');
var query = { fname: para };
db.collection("users").find(query).toArray(function (err, result) {
if (err) throw err;
console.log(result);
res.send(result);
});
}

function getr(req, res) {
    var role = req.params.role;
    var query = { role: role };
    db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);

    });
}

function gete(req, res) {
    var para = req.param('expired');
    var query = { expired: true };
    db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);

    });
}

function getg(req,res){
    var para = req.param('gender');
    var query = { gender: 'female' };
    db.collection("users").find(query).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result);
    });
    }

    function getgm(req,res){
        var para = req.param('gender');
        var query = { gender: 'male' };
        db.collection("users").find(query).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send(result);
        });
        }

module.exports = {
getal: getal,
getf: getf,
getr: getr,
gete: gete,
getg: getg,
getgm: getgm
};





