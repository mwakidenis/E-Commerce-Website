const path = require('path');
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/user_images')); // Thư mục lưu tệp
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname); // Phần mở rộng tệp
        const baseName = path.basename(file.originalname, ext); // Tên không phần mở rộng
        let fileName = file.originalname;

        // Kiểm tra nếu tệp đã tồn tại
        let counter = 1;
        while (fs.existsSync(path.join(__dirname, '../public/user_images', fileName))) {
            fileName = `${baseName}_${counter}${ext}`;
            counter++;
        }

        cb(null, fileName);
    }
});

const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

const fileFilter = (req, file, cb) => {
    if (ALLOWED_MIME_TYPES.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only image files (JPEG, PNG, GIF, WEBP) are allowed'), false);
    }
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 2 * 1024 * 1024 } });

module.exports = upload;
