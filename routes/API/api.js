const router = require ("express").Router();
const controller = require("../../controllers/controller");

router.route("/forum")
  .post(controller.createThread)
  // .post(controller.createPost)
  .get(controller.displayThread)

  router.route("/thread")
  .post(controller.createPost)
  .get(controller.displayPost)

  router.route("/thread/:id")
  .get(controller.findById)

module.exports = router;
