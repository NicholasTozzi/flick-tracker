const router = require("express").Router();
const { Profile, User, Review } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  console.log("homeRoute");
  try {
    res.render("homepage", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/community", async (req, res) => {
  try {
    const reviewData = await Review.findAll(req.params.id, {
      // getting all of the blogs and users(ref model)
      include: [
        {
          model: User,
        },
      ],
    });

    const allReviews = reviewData.map((y) => y.get({ plain: true }));
    res.render("community", {
      // telling all off the cur blogs(if any) to render/show up on the homepage
      allReviews,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const profileData = await Profile.findAll(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const userData = await User.findByPk(req.session.user_id, {
      // using session id, to get the currently logged in user, to display THEIR blogs.
      attributes: { exclude: ["password"] }, // excluding the password so nobody can see it.
      include: [{ model: Review }],
    });

    const user = userData.get({ plain: true });

    const profile = profileData.map((y) => y.get({ plain: true }));
    res.render("profile", {
      // telling all off the cur blogs(if any) to render/show up on the homepage
      profile,
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/review", async (req, res) => {
  try {
    res.render("review", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
