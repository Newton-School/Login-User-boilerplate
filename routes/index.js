const router = require('express').Router();

router.use('/blog', require('./blogRoutes'));
router.use('/user', require('./userRoutes'));

module.exports = router;