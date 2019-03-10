const Express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = Express();

app.use(bodyParser.json());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

// my module
const Users = require ('./controller/userControll')
let db = require('./dbMongo');

const port = 2020;

app.get('/', (req, res)=>{
  res.send("Hello, i am manager!");
});

app.get('/users', Users.find)
app.post('/newUser', Users.insertOne)
app.put('/userUpdate/:id', Users.updateOne)
app.delete('/userDelete/:id', Users.deleteOne)

db.connect("mongodb://localhost:27017", (err, client)=>{
  if(err) {
    return console.log(err)
  }
  app.listen(port, ()=> {
    console.log("app starting. localhost", port);
  });
})