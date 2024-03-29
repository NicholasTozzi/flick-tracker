const router = require("express").Router();
const { Profile } = require("../../models");
const withAuth = require("../../utils/auth");


router.post("/", withAuth, async (req, res) => {
  try {
    const profileData = await Profile.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(profileData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  } 
  console.log(user_id)
});

router.delete("/:id", async (req, res) => {
  // delete a profile by its `id` value
  try {
    const profileData = await Profile.destroy({
      where: {
        id: req.params.id,
        
      },
    });

    if (!profileData) {
      res.status(404).json({ message: "no profile found" });
      return;
    }
    res.status(200).json(profileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/:id", async (req, res) => {
//   // find one profile by its `id` value
//   try {
//     const profileData = await Profile.findByPk(req.params.id, {
//       include: [{ model: User }],
//     });

//     if (!profileData) {
//       res.status(404).json({ message: "no profile found!" });
//       return;
//     }
//     res.status(200).json(profileData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post("/", async (req, res) => { //belongs in the user route "signUp"
//   try {
//     const newProfile = await Profile.create({
//       ...req.body,
//       user_id: req.session.user_id, //Take session out. Creating profile isn't a session
//     });
//     res.status(200).json(newProfile); //Changed to newProfile to match variable
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.put("/id", async (req, res) => {
//   // update a profile by its `id` value
//   Profile.update(
//     {
//       id: req.body.id,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((updatedProfile) => {
//       res.json(updatedProfile);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.json(err);
//     });
// });

// router.post("/id", async (req, res) => {
//   try {
//     const profileData = await Profile.create({
//       watched: req.body.watched,
//       watchlist: req.body.watchlist,
//       top5: req.body.top5,
//       genre: req.body.genre,
//       followingActors: req.body.followingActors,
//       followingUsers: req.body.followingUsers,
//     });
//     req.session.save(() => {
//       req.session.id = profileData.id;

//       res.status(200).json({ message: "Success!" });
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post("/", withAuth, async (req, res) => {
//   try {
//     const profileData = await Profile.create({
//       watched: req.body.watched,
//       watchlist: req.body.watchlist,
//       top5: req.body.top5,
//       genre: req.body.genre,
//       followingActors: req.body.followingActors,
//       followingUsers: req.body.followingUsers,
//     });
//     res.status(200).json(profileData);
//   } catch (err) {
//     res.status(400).json(err);
//     console.log(err)
//   }
// });

module.exports = router;
