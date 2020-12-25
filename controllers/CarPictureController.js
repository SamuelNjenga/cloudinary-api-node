const carPicService = require('../services/CarPictureService');
const {
    cloudinary
} = require('../utils/cloudinary')
const ReqValidator = require('../utils/validator');

exports.setCarPicture = async (req, res) => {
    try {
        const fileStr = req.body.data
        const part = req.body.part
        //const id = req.params.id
        //console.log(id);
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            folder: 'sam'
        })
        console.log(uploadedResponse);

        const data = {
            part: part,
            picture: uploadedResponse.secure_url

        };
        await carPicService.createCarPicture(data)
        console.log(data);
        res.status(201).json(data);
    } catch (error) {
        console.error(error)
        res.status(500).json({
            err: 'Something went wrong'
        })
    }
};