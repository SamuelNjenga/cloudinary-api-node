const db = require('../models/index');

exports.updateCarPart = async (data, root) => {
	return db.CarPart.update(data, root);
};

exports.getCarParts = async () => {
	return db.CarPart.findAll();
};

exports.deleteCarPicture = async (data) => {
	return db.CarPart.destroy(data);
};

exports.createCarPart = async (data) => {
	return db.CarPart.create(data);
};