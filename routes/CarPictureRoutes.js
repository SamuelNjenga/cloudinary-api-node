const Router = require('express');
const carPictureController = require("../controllers/CarPictureController");

const router = Router();

// router.post('/', equipmentController.createEquipment);
// router.get('/', equipmentController.getEquipments);
// router.delete('/:id', equipmentController.deleteEquipment);
// router.put('/:id', equipmentController.updateEquipment);
// router.post('/:id/pictures',equipmentController.setEquipmentPicture);
router.post('/pictures',carPictureController.setCarPicture);

module.exports = router;