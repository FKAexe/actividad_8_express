const { getAllAuthors } = require('../../controllers/autores.controller');

const router = require('express').Router();

// Define your routes here
router.get('/',getAllAuthors)
module.exports = router;
