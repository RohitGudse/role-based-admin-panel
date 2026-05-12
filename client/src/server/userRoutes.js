const router = require("express").Router();

const authMiddleware = require("../middleware/authMiddleware");

const roleMiddleware = require("../middleware/roleMiddleware");

const {
  getUsers,
} = require("../controllers/userController");

router.get(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  getUsers
);

module.exports = router;