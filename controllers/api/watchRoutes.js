const router = require("express").Router();
const { Profile } = require('../../models');

// router.get('/profile:id', async (req, res) => {
//   try {
//     const watched = await Profile.findByPk(req.params.id);
//   }catch (err) {
//     return res.status(404).json(err)
//   }
// });

// router.get("/profile/:id", async (req, res) => {
//   try {
//     const profileData = await Profile.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ["username"],
//         },
//       ],
//     });

//     const profile = profileData.get({ plain: true });

//     res.render("profile", {
//       ...profile,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post('/', async (req, res) => {
    try {
        const watched = await Profile.create(req.body)
        res.status(200).json(watched)
    } catch (err) { 
      res.status(400).json(err)
    }
})

router.post('/later', async (req, res) => {
    try {
        const watchLater = await Profile.create(req.body)
        res.status(200).json(watchLater)
    } catch (err) { 
      res.status(400).json(err)
    }
})

module.exports = router;

// routes for buttons 
// one for "watched" will be /
// one for "watch later" will be /watch/later
