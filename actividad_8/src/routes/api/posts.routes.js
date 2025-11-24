const { getAllPosts } = require('../../controllers/posts.controller');

const router = require('express').Router();

// Define your routes here
router.get('/', getAllPosts);

module.exports = router;
