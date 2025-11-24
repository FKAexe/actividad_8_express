const autoresModel = require('../models/autores.model');

const getAllAuthors = async (req, res) => {
    const autores = await autoresModel.selectAuthors()
    res.json(autores);
}
const create = (req, res) => {
    // Implement your logic here
}
module.exports = { getAllAuthors, create }
