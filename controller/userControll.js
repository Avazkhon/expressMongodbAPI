const User = require('../usersModule/users')

exports.insertOne = (req, res)=> {
	let newUser = req.body;
	User.insertOne(newUser, (err, result) =>{
		if(err) {
			console.log(err)
			return res.send(400)
		}
		res.send(result)
	})
}

exports.find = (req, res)=> {
	User.find((err, doc) =>{
		if(err) {
			console.log(err)
			return res.send(400)
		}
		res.send(doc)
	})
}

exports.updateOne = (req, res)=> {
	let id = req.params.id;
	let update = req.body;
	User.updateOne(id, update, (err, doc) =>{
		if(err) {
			console.log(err)
			return res.sendStatus(400)
		}
		res.send(doc)
	})
}

exports.deleteOne = (req, res)=> {
	let id = req.params.id;
	let update = req.body;
	User.deleteOne(id, (err, doc) =>{
		if(err) {
			console.log(err)
			return res.sendStatus(400)
		}
		res.send(doc)
	})
}