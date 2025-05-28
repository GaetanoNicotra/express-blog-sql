const express = require('express');
const router = express.Router();
const controller = require('../controllers/postController')

// rotte dei posts
router.get("/", controller.index);

router.delete("/elimina/:id", controller.destroy)

module.exports = router;