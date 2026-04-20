const express = require("express")
const router = express.Router();
const userController = require("../controller/UserController")
const fetchUser = require("../middleware/fetchUser")

router.post("/signup", userController.signup)
router.post("/login", userController.login)
router.post("/logout", userController.logout)
router.post("/addtocart",fetchUser, userController.addToCart)
router.post("/removetocart",fetchUser, userController.removeToCart)
router.post("/getcart", fetchUser, userController.getCart)

module.exports = router