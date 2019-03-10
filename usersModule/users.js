let db = require('../dbMongo');
const ObjectID = require('mongodb').ObjectID;
// my module
const ObjectUser = require ('./ObjectUser');


exports.insertOne = function (newUser, colB) {
  let objectUser = new ObjectUser(newUser)
  let user = objectUser.user()
  db.get().db("userDB").collection("users").insertOne(user, (err, client)=> {
    console.log("new user added")
    console.log(client.ops)
    colB(err, client)
  })
}

exports.find = function (colB){
  db.get().db("userDB").collection("users").find().toArray((err, doc)=>{
    colB(err, doc)
  })
}

exports.updateOne = function (id, apdate, colB){
  let id =  ObjectID(id);
  db.get().db("userDB").collection("users").updateOne({_id: id}, { $set: apdate}, (err, doc)=>{
    colB(err, doc)
  })
}

exports.deleteOne = function (id, apdate, colB){
  let id =  ObjectID(id);
  db.get().db("userDB").collection("users").deleteOne({_id: id}, (err, doc)=>{
    colB(err, doc)
  })
}