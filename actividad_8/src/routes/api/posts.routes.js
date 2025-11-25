const { getAllPosts, getPostById } = require('../../controllers/posts.controller');
const { checkAuthorId } = require('../../middlewares/autores.middleware');

const router = require('express').Router();

// Define your routes here
router.get('/', getAllPosts);
router.get('/:author_id', checkAuthorId, getPostById);
module.exports = router;
