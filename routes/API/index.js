const router = require("express").Router();
const postRoutes = require("./api");

// post routes
router.use("/api", postRoutes );

module.exports = router;
