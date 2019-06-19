const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./API");

// API Routes
router.use("/API", apiRoutes);

// If no API routes are hit, send the React app
router.post('/thread', api.post);
router.get('/thread/:title.:format?', api.show);
// router.get('/thread', api.list);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
