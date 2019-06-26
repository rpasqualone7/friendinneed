const db = require("../models/index");

module.exports = {
	createThread: function (req, res) {
		db.Thread
			.create({ title: req.body.title, body:req.body.body, user: req.body.user, date: req.body.date,  })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	createPost: function (req, res) {
		db.Post 
			.create({ post: req.body.title, user: req.body.user, date: req.body.date })
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	displayThread: function (req, res) {
		db.Thread
		.findOneAndUpdate({ _id: req.params.id }, req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	
	},

	
	displayPost: function (req, res) {
		db.Post
		.findOneAndUpdate({ _id: req.params.id }, req.body)
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	
	},
};