const router = require("express").Router();
const postRoutes = require("./api");

// post routes
router.use("/post", postRoutes );

module.exports = router;
