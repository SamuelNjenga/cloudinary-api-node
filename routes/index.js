const Router = require('express');
const CarPicRoutes = require('./CarPictureRoutes');

const router = Router();

router.use('/carPictures', CarPicRoutes);

module.exports = router;