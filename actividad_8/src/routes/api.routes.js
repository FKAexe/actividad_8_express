const router = require('express').Router();

// Define your routes here
router.use('/clientes', require('./api/clientes.routes'));
router.use('/posts', require('./api/posts.routes'));

module.exports = router;
