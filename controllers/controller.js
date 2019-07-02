const db = require("../models/index");

module.exports = {
	createThread: function (req, res) {
		db.Thread
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	findById: function(req, res) {
		db.Thread
		  .findById(req.params.id)
		  .then(dbModel => res.json(dbModel))
		  .catch(err => res.status(422).json(err));
	  },
	

	createPost: function (req, res) {
		db.Post 
			.create(req.body)
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	displayThreads: function (req, res) {
		db.Thread
		.find(req.query)
		.sort({ date: -1 })
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	
	},

	
	displayPosts: function (req, res) {
		db.Post
		.find(req.query)
		.sort({ date: -1 })
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
	
	},
};