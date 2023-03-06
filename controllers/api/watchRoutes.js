const router = require("express").Router();
const { Profile } = require('../../models');

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

module.exports = router

// routes for buttons 
// one for "watched" will be /
// one for "watch later" will be /watch/later