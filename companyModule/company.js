let db = require('../dbMongo');
const ObjectID = require('mongodb').ObjectID;

exports.insertOne = function (company, colB) {
  db.get().db("companyDB").collection("company").insertOne(company, (err, doc)=> {
    console.log("new company added")
    console.log(doc.ops)
    colB(err, doc)
  })
}

exports.find = function (colB){
  db.get().db("companyDB").collection("company").find().toArray((err, doc)=>{
    colB(err, doc)
  })
}

exports.updateOne = function (id, apdate, colB){
  let idUpgade =  ObjectID(id);
  db.get().db("companyDB").collection("company").updateOne({_id: idUpgade}, { $set: apdate}, (err, doc)=>{
    colB(err, doc)
  })
}

exports.deleteOne = function (id, colB){
  let idDelete =  ObjectID(id);
  db.get().db("companyDB").collection("company").deleteOne({_id: idDelete}, (err, doc)=>{
    colB(err, doc)
  })
}