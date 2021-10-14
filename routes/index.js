const router = require('express').Router();
const apiRouter = require('./api');

//localhost:3000

router.use('/api', apiRouter);

module.exports = router
