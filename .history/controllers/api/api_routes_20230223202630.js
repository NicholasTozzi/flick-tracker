// To do
// Movie Model
const APIKey = AKIAQ7X32SVHM2FOQPUN
const
const router = require("express").Router();
const { models } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {

});

router.post('/', withAuth, async (req, res) => {

});

router.delete('/:id', withAuth, async (req, res) => {

});

module.exports = router;