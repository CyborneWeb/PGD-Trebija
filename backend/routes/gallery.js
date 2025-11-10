const express = require('express');
const router = express.Router();
const { listGallery } = require('../controllers/GalleryController');

router.get('/', listGallery);

module.exports = router;