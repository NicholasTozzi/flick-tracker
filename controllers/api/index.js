const router = require("express").Router();
const userRoutes = require("./userRoutes");
const profileRoutes = require("./profileRoutes");
const watchRoutes = require("./watchRoutes");
const reviewPost = require("./reviewPost");

router.use("/user", userRoutes);

router.use("/profile", profileRoutes);
router.use("/watch", watchRoutes); // for watch.js and the routes file
router.use("/review", reviewPost);

module.exports = router;
