const router = require('express').Router();

// Define your routes here
router.use('/autores', require('./api/autores.routes'));
router.use('/posts', require('./api/posts.routes'));

module.exports = router;
