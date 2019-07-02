const path = require("path");
const router = require("express").Router();
const forumRoutes = require("./api");
const userRoutes = require("./user")

// API Routes
router.use("/api", forumRoutes);
router.use("/user", userRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
