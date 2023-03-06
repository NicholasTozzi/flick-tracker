const router = require("express").Router();
const userRoutes = require("./userRoutes");
const profileRoutes = require("./profileRoutes");
const reviewPost = require("./reviewPost");

router.use("/user", userRoutes)

router.use("/profile", profileRoutes)

router.use("/review", reviewPost)

// router.use("/watch", watchRoutes) // for watch.js and the routes file

module.exports = router;
