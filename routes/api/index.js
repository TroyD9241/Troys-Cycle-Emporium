const router = require('express').Router();
const customerRouter = require('./customersRoutes');
const inventoryRouter = require('./inventoryRoutes');
const repairsRouter = require('./repairsRoutes');

router.use('/customers', customerRouter);
// localhost:3000/api/customers
router.use('/inventory', inventoryRouter);
// localhost:3000/api/inventory
router.use('/repairs', repairsRouter);
// localhost:3000/api/repairs
module.exports = router
