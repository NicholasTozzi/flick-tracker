const router = require("express").Router();
const { Profile, User, Review } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  console.log("homeRoute");
  try {
    // Get all projects and JOIN with user data
    // const profileData = await Profile.findAll({
    //   // might not need all of this for the homepage since no new data actually appears on this screen.
    //   include: [
    //     {
    //       model: User,
    //       attributes: ["username"],
    //     },
    //   ],
    // });
    // console.log(profileData)

    // // Serialize data so the template can read it
    // const profiles = profileData.map((profile) => profile.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      // profiles,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get("/", async (req, res) => {
//   try {
//     const profileData = await community.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ["username"],
//         },
//       ],
//     });

//     const profile = profileData.get({ plain: true });
//     console.log(profile)

//     res.render("community", {
//       community,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// Use withAuth middleware to prevent access to route
router.get("/community", async (req, res) => {
  try {
    const reviewData = await Review.findAll({ // getting all of the blogs and users(ref model)
      include: [
        {
          model: User
        },
      ],
    });

    const allReviews = reviewData.map((y) => y.get({ plain: true }));
    res.render('community', { // telling all off the cur blogs(if any) to render/show up on the homepage
      allReviews,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get("/community", async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       // using session id, to get the currently logged in user, to display THEIR blogs.
//       attributes: { exclude: ["password"] }, // excluding the password so nobody can see it.
//       include: [{ model: Review }],
//     });

//     const user = userData.get({ plain: true });

//     res.render("community", {
//       // rendering/sending all content(if any) to the dashboard page.
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//     console.log(err);
//   }
// });

router.get("/profile/:id", async (req, res) => {
  try {
    const profileData = await Profile.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const profile = profileData.get({ plain: true });

    res.render("profile", {
      ...profile,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// The dashboard page, getting users data based off their login info.
router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      // using session id, to get the currently logged in user, to display THEIR blogs.
      attributes: { exclude: ["password"] }, // excluding the password so nobody can see it.
      include: [{ model: Profile, Review }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      // rendering/sending all content(if any) to the dashboard page.
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/review', async (req, res) => {
  try {
  //   const reviewData = await Review.findByPk(req.params.user_id, {
  //     include: [
  //       {
  //         model: User, Profile,
  //         attributes: ["username"],
  //       },
  //     ],
  //   });

  //   const review = reviewData.get({ plain: true });
    
  //   res.render('review', { // rendering/sending all content(if any) to the dashboard page.
  //     ...review,
  //     logged_in: true
  //   });
  // } catch (err) {
  //   res.status(500).json(err);
  //   console.log(err)
  res.render("review", {
    // profiles,
    logged_in: req.session.logged_in,
  });
} catch (err) {
  console.log(err)
  res.status(500).json(err);
}
  // }
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
