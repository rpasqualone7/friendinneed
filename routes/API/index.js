const router = require("express").Router();
const forumRoutes = require("./forum");

// post routes
router.use("/forum", forumRoutes );

module.exports = router;
