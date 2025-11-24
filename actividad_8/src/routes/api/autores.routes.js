const { getAllAuthors, create } = require('../../controllers/autores.controller');

const router = require('express').Router();

// Define your routes here
router.get('/',getAllAuthors);
router.post('/', create );

module.exports = router;
