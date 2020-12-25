const express = require('express');
const app = express();

app.use(express.json({ limit: '50mb' }));
const routes = require('./routes/')

app.use('/api/', routes);

// require('dotenv').config();
// const cloudinary = require('cloudinary').v2;
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// app.post('/api/upload', async (req, res) => {
//     try {
//         const fileStr = req.body.data;
//         const uploadResponse = await cloudinary.uploader.upload(fileStr, {
//             folder: 'sam'
//         });
//         console.log(uploadResponse);
//         res.json({ msg: 'succeed' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ err: 'Something went wrong' });
//     }
// });

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('listening on 3001');
});