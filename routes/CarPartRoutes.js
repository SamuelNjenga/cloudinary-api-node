const Router = require('express');
const carPartController = require("../controllers/CarPartController");

const router = Router();

router.post('/', carPartController.createCarPart);
router.get('/', carPartController.getCarParts);
router.delete('/:id', carPartController.deleteCarPart);
router.put('/:id', carPartController.updateCarPart);

module.exports = router;