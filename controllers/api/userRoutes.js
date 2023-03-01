// To do
// Movie Model
const router = require("express").Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

//For the user to sign up. If we would like to put a username in the model we can.
router.post('/signUp', async (req, res) => {
    try {
        const userData = await User.create({
            // username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        req.session.save(() => {
            req.session.id = userData.id
            req.session.logged_in = true

            //200 code is for testing purposes
            res.status(200).json({message:"Successish!"});
            // res.redirect("/profile")
        })
    }
    catch(err) {
        res.status(500).json(err);
        //Collaborate with front end.   
    } 
});

router.post('/login', withAuth, async (req, res) => {
    try {
        const userData = await userData.fineOne( {where: {email: req.body.email } })

        if (!userData) {
            res.status(400).json({ message: "Incorrect E-Mail or Password. Check your spelling and capitalization and try again"})
        return
        }

        const correctPass = await userData.checkPassword(req.body.password)

        if (!correctPass) {
            res.status(400).json(message,"You are now logged in") //comma? Thought it was supposed to be a :
        }

    } catch (err) {
        res.status(400).json(err)
    }
});

// router.delete('/:id', withAuth, async (req, res) => {

// });

router.post("/logout", (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})

module.exports = router;