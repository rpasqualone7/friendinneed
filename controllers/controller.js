const db = require("../models/index");

module.exports = {
	createThread: function (req, res) {
		db.Thread
			.create({ title: req.body.title, author: req.body.author })
			.save()
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	createPost: function (req, res) {
		db.Post
			.create({ title: req.body.title, author: req.body.author })
			.save()
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},

	displayThread: function (req, res) {
		db.Thread
			.findOne({ title: req.params.title }, (error, thread) => {
				Post.find({ thread: thread._id }, (error, posts) => {
					res.send([{ thread: thread, posts: posts }]);
				});
			})
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};