const path = require("path");
const router = require("express").Router();
<<<<<<< HEAD
const forumRoutes = require("./api");
const userRoutes = require("./user")
=======
const apiRoutes = require("./API");
>>>>>>> 9495f7b4212a0af35bff5b3359d06331051e05a1

// API Routes
router.use("/api", forumRoutes);
router.use("/user", userRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
