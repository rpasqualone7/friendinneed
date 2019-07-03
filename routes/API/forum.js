const router = require("express").Router();
const controller = require("../../controllers/controller");

router.route("/")
  .post(controller.createThread)
  .get(controller.displayThreads)

  router.route("/:id")
  .post(controller.createPost)
  .get(controller.displayPosts)
  .get(controller.findById)

module.exports = router;
