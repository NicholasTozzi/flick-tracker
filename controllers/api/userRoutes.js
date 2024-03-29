// To do
// Movie Model
const router = require("express").Router();
const { User } = require('../../models');
// const withAuth = require('../../utils/auth');

// CREATE new user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
  
          req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
      
            res.status(200).json(userData);
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      });

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username } })
        console.log(userData)

        if (!userData) {
            res.status(400).json({ message: "Incorrect Name and/or Password. Check your spelling and capitalization and try again" })
            return
        }
        // console.log(User.checkPassword)
        const correctPass = await userData.checkPassword(req.body.password) //changed to User
        console.log(correctPass, 'correct pass')

        if (!correctPass) {
            res
                .status(400)
                .json({ message: "Incorrect Name and/or Password. Check your spelling and capitalization and try again" });
            return;
        }
        console.log('thereq',req.session)
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

// router.delete('/:id', withAuth, async (req, res) => {

// });

router.get("/logout", (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})
module.exports = router;
