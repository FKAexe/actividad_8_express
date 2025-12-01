const autoresModel = require('../models/autores.model');


const getAllAuthors = async (req, res) => {
    const autores = await autoresModel.selectAuthors()
    console.log(autores);
    res.json(autores);
}
const create = async (req, res) => {
    const result = await autoresModel.insertAuthor(req.body);
    res.json(result);
}
module.exports = { getAllAuthors, create }
