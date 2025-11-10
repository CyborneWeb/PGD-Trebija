// ...existing code...
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const streamifier = require('streamifier');

cloudinary.config(); // uses CLOUDINARY_URL from process.env

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter: (req, file, cb) => {
    if (/^image\/(jpeg|png|webp|gif|bmp|tiff)$/.test(file.mimetype)) cb(null, true);
    else cb(new Error('Only image files are allowed'));
  },
}).single('image');

// Allowed targets mapping — only these keys accepted from the client
const ALLOWED_TARGETS = {
  post: 'posts',     // private post folder (only visible inside post)
  gallery: 'gallery' // gallery folder (visible in site gallery)
};

function uploadImage(req, res) {
  upload(req, res, function (err) {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(413).json({ success: false, message: 'File too large. Max 5MB.' });
      }
      return res.status(400).json({ success: false, message: err.message || 'Upload error' });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No file provided' });
    }

    // Read target from multipart field or query; default to 'post'
    const rawTarget = (req.body?.target || req.query?.target || 'post').toString().toLowerCase();
    const folderKey = ALLOWED_TARGETS[rawTarget];

    if (!folderKey) {
      return res.status(400).json({
        success: false,
        message: `Invalid target. Allowed values: ${Object.keys(ALLOWED_TARGETS).join(', ')}`,
      });
    }

    const cloudFolder = `pgd-trebija/${folderKey}`;

    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: cloudFolder, resource_type: 'image' },
      (error, result) => {
        if (error) return res.status(500).json({ success: false, message: 'Cloudinary upload failed', error });
        return res.json({
          success: true,
          url: result.secure_url,
          public_id: result.public_id,
          folder: cloudFolder,
          target: rawTarget,
        });
      }
    );

    streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
  });
}

module.exports = { uploadImage };
// ...existing code...