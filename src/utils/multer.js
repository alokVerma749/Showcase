const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads")
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    console.log('i m here')
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
        cb(null, true);
    } else {
        cb(new Error('Unsupported file format. Upload only JPEG, JPG, or PNG.'), false);
    }
}
const upload = multer({
    storage,
    limits: { fieldSize: 1280 * 720 },
    fileFilter
})

export default upload;