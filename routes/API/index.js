const router = require("express").Router();
const path = require("path");
const userRoutes = require("./user");
const forumRoutes = require("./forum");

router.use("/user", userRoutes );

router.use("/forum", forumRoutes );

router.use(function(req, res) {
	res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });
  

module.exports = router;
