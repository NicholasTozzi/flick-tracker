const router = require("express").Router();
const userRoutes = require("./userRoutes");
const profileRoutes = require("./profileRoutes");

router.use("/user", userRoutes)

router.use("/profile", profileRoutes)

module.exports = router;
