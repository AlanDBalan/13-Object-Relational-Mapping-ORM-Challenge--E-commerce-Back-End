const router = require('express').Router();
const categoryRoutes = require('./api/category-routes');
const productRoutes = require('./api/product-routes');
const tagRoutes = require('./api/tag-routes');

router.use('/api/categories', categoryRoutes);
router.use('/api/products', productRoutes);
router.use('/api/tags', tagRoutes);

module.exports = router;
