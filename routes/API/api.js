const router = require ("express").Router();
const controller = require("../../controllers/controller");

router.route("/forum")
  .post(controller.createThread)
  // .post(controller.createPost)
  .get(controller.displayThread)
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
  

module.exports = router;
