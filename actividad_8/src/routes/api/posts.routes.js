const { getAllPosts, getPostById } = require('../../controllers/posts.controller');
const { checkAuthorId, checkAuthorExists } = require('../../middlewares/autores.middleware');

const router = require('express').Router();

// Define your routes here
router.get('/', getAllPosts);
router.get('/:author_id', checkAuthorId, getPostById);
router.post('/', checkAuthorExists, create );
module.exports = router;
