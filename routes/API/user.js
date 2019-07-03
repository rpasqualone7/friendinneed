const router = require ("express").Router();
const controller = require("../../controllers/controller");

router.route("/")
.post(controller.createUser)

router.route("/:id")
.post(controller.findUserById)

module.exports = router;