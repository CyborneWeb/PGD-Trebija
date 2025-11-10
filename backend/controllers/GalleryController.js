const cloudinary = require('cloudinary').v2;

/**
 * GET /api/gallery
 * Query params:
 *   - max_results (optional) : number (default 100, max 500)
 *   - next_cursor (optional)  : string (for pagination)
 */
async function listGallery(req, res) {
  try {
    const prefix = 'pgd-trebija/gallery';
    let max_results = parseInt(req.query.max_results, 10) || 100;
    if (max_results > 500) max_results = 500;

    const options = {
      type: 'upload',
      prefix,
      max_results,
    };
    if (req.query.next_cursor) options.next_cursor = req.query.next_cursor;

    cloudinary.api.resources(options, (error, result) => {
      if (error) {
        console.error('Cloudinary list error:', error);
        return res.status(500).json({ success: false, message: 'Failed to list gallery images', error: error.message || error });
      }

      const resources = (result.resources || []).map((r) => ({
        public_id: r.public_id,
        url: r.secure_url || r.url,
        format: r.format,
        width: r.width,
        height: r.height,
        created_at: r.created_at,
      }));

      return res.json({
        success: true,
        total_count: result.total_count || resources.length,
        next_cursor: result.next_cursor || null,
        resources,
      });
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

module.exports = { listGallery };