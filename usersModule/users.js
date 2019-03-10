let db = require('../dbMongo');
const ObjectID = require('mongodb').ObjectID;

exports.insertOne = function (newUser, colB) {
  db.get().db("userDB").collection("users").insertOne(newUser, (err, client)=> {
    console.log(client)
    colB(err, client)
  })
}

exports.find = function (colB){
  db.get().db("userDB").collection("users").find().toArray((err, doc)=>{
    colB(err, doc)
  })
}

exports.updateOne = function (id, apdate, colB){
  db.get().db("userDB").collection("users").updateOne({_id: ObjectID(id)}, { $set: apdate}, (err, doc)=>{
    colB(err, doc)
  })
}