const router = require("express").Router();
const { Profile, Review, User  } = require("../../models");
const withAuth = require("../../utils/auth");

//The `/api/profile` endpoint
router.get("/", async (req, res) => {
  // find all profiles
  try {
    const profileData = await Profile.findAll();     
    res.status(200).json(profileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/community", async (req, res) => {
  // find all watched
  try {
    const watched = await Review.findAll();  
    req.session.save(() => {
      req.session.id = watched.id;

        
    res.status(200).json(watched);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one profile by its `id` value
  try {
    const profileData = await Profile.findByPk(req.params.id, {
      include: [{ model: Review, through: User, as: 'user_review' }],
    });

    if (!profileData) {
      res.status(404).json({ message: "no profile found!" });
      return;
    }
    res.status(200).json(profileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => { //belongs in the user route "signUp"
  try {
    const newProfile = await Profile.create({
      ...req.body,
       
    });
    res.status(200).json(newProfile); //Changed to newProfile to match variable
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/profile", async (req, res) => {
  // Calls the update method on the Profile model
  Profile.update(
    {
      watched: req.body.watched,
      watchList: req.body.watchList,
      top5: req.body.top5,
      genre: req.body.genre,
      followingActors: req.body.followingActors,
      followingUsers: req.body.followingUsers,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedProfile) => {
      res.json(updatedProfile);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});





router.post('/profile', async (req, res) => {
  try {
    const profileData = await Profile.create(req.body);
      // watched: req.body.watched,
      // watchlist: req.body.watchlist,
      // top5: req.body.top5,
      // genre: req.body.genre,
      // followingActors: req.body.followingActors,
      // followingUsers: req.body.followingUsers,
    req.session.save(() => {
      req.session.id = profileData.id;

      res.status(200).json(profileData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
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

module.exports = router;
