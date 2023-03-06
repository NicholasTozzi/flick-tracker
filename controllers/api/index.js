const router = require("express").Router();
const userRoutes = require("./userRoutes");
const profileRoutes = require("./profileRoutes");

router.use("/user", userRoutes)

router.use("/profile", profileRoutes)

// router.use("/watch", watchRoutes) // for watch.js and the routes file

module.exports = router;
