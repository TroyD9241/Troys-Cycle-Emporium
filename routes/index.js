const router = require('express').Router();
const apiRouter = require('./api');

//localhost:3000

router.use('/api', apiRouter);
//localhost:3000/api

module.exports = router
