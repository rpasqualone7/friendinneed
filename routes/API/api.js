// const router = require ("express").Router();
const db = require ("../../models");

exports.post = (req, res) => {

db.Thread.create({ title: req.body.title, author: req.body.author }).save();
};

exports.show = ((req, res) =>{
  db.Thread.findOne({title: req.params.title}, (error, thread) => {
    Post.find({thread: thread._id}, (error, posts) => {
      res.send([{thread: thread, posts: posts}]);
    });
  })
});
  // .then(function(dbThread) {
  //   // If saved successfully, print the new Library document to the console
  //   console.log(dbThread);
  // })
  // .catch(function(err) {
  //   // If an error occurs, print it to the console
  //   console.log(err.message);
  // });

  // app.posts("/submit", function(req, res) {

	// db.Posts.create(req.body)
	//   .then(function(dbposts) {
		
	// 	return db.Thread.findOneAndUpdate({}, { $push: { posts: dbposts._id } }, { new: true });
	//   })
	//   .then(function(dbThread) {
	
	// 	res.json(dbThread);
	//   })
	//   .catch(function(err) {
		
	// 	res.json(err);
	//   });
  // });
  


