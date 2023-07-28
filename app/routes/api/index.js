const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/api/products', productRoutes);
router.use('/api/tags', tagRoutes);

module.exports = router;
