const router = require('express').Router();
const userRoutes = require('./userRoutes');
const apiRoutes = require('./api/api_routes');
router.use('/users', userRoutes);
router.use('/api/api', projectRoutes);
module.exports = router;