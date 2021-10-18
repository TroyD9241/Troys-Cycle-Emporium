//localhost:3000
const router = require('express').Router();
// importing api index
const apiRouter = require('./api/index');

router.use('/api', apiRouter);
//localhost:3000/api

module.exports = router
