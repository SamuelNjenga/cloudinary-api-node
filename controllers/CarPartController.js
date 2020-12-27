const carPartService = require('../services/CarPartService');
const ReqValidator = require('../utils/validator')

exports.createCarPart = async (req, res) => {

    try {
        const valid = await ReqValidator.validate(req, res, {
            part: 'required|string'
        })
        if (!valid) return
        const data = {
            part: req.body.part
        };
        await carPartService.createCarPart(data)
        res.status(201).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.updateCarPart = async (req, res) => {
    try {
        const valid = await ReqValidator.validate(req, res, {
            part: 'required|string'
        })
        if (!valid) return
        const data = {
            part: req.body.part
        };

        const carPartId = req.params.id;
        await carPartService.updateCarPart(data, {
            where: {
                id: carPartId
            }
        });
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
    }
};

exports.deleteCarPart = async (req, res, next) => {
    try {
        const carPartId = req.params.id;
        await carPartService.deleteCarPicture({
            where: {
                id: carPartId 
            }
        });
        res.status(200).json({
            data: null,
            message: `CarPart ${carPartId} has been deleted`
        });
    } catch (error) {
        next(error)
    }
}

exports.getCarParts = async (req, res) => {
    try {
        const carParts = await carPartService.getCarParts();
        res.status(200).json(carParts);
    } catch (err) {
        res.json({
            message: err
        });
    }
};