const Router = require('express');
const CarPicRoutes = require('./CarPictureRoutes');
const CarPartRoutes = require('./CarPartRoutes');

const router = Router();

router.use('/carPictures', CarPicRoutes);
router.use('/carParts', CarPartRoutes);

module.exports = router;