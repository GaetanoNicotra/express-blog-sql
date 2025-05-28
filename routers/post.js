const express = require('express');
const router = express.Router();
const controller = require('../controllers/postController')

// rotta che mostra tutti i posts
router.get("/", controller.index);

// rotta che elimina un post
router.delete("/elimina/:id", controller.destroy)

// rotta che modifica un post
router.get("/dettaglio/:id", controller.show)


module.exports = router;