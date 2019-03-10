const Company = require('../companyModule/company')

exports.insertOne = (req, res)=> {
	let company = req.body;
	Company.insertOne(company, (err, result) =>{
		if(err) {
			console.log(err)
			return res.send(400)
		}
		res.send(result)
	})
}

exports.find = (req, res)=> {
	Company.find((err, doc)=>{
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
	Company.updateOne(id, update, (err, doc) =>{
		if(err) {
			console.log(err)
			return res.sendStatus(400)
		}
		res.send(doc)
	})
}

exports.deleteOne = (req, res)=> {
	let id = req.params.id;
	Company.deleteOne(id, (err, doc)=>{
		if(err) {
			console.log(err)
			return res.sendStatus(400)
		}
		res.send(doc)
	})
}