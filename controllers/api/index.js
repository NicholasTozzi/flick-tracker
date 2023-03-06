const router = require("express").Router();
const userRoutes = require("./userRoutes");
const profileRoutes = require("./profileRoutes");
const watchRoutes = require("./watchRoutes");
const reviewPost = require("./reviewPost");
const watchRoutes = require("./watchRoutes");

router.use("/user", userRoutes);

router.use("/profile", profileRoutes);

router.use("/watch", watchRoutes) // for watch.js and the routes file
router.use("/review", reviewPost)

router.use("/watch", watchRoutes);

module.exports = router;
