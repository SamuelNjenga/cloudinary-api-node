const db = require('../models/index');

exports.createCarPicture = async (data) => {
	return db.CarPicture.create(data);
};

exports.updateCarPicture = async (data, root) => {
	return db.CarPicture.update(data, root);
};

exports.getCarPictures = async () => {
	return db.CarPicture.findAll();
};

exports.deleteCarPicture = async (data) => {
	return db.CarPicture.destroy(data);
};

exports.createEquipmentPicture = async (data) => {
	return db.EquipmentPicture.create(data);
};