const autoresModel = require('../models/autores.model');

const checkAuthorId = async (req, res, next) => {
    const { author_id } = req.params;
    //No es un numero
    if (isNaN(author_id)) {
        return res.status(400).json({ message: 'El ID del autor debe ser un número' });
    }
    //Comprobar si existe en la base de datos.
    const cliente = await autoresModel.selectById(author_id);
    if (!cliente) {
        return res.status(404).json({ message: 'Autor no encontrado' });
    }
    next();
}

const checkAuthorExists = async (req, res, next) => {
    const {author_id} = req.body;
    const author = await autoresModel.selectById(author_id);
    if (!author) {
        return res.status(404).json({ message: 'Autor no encontrado' });
    }
    next();
}

module.exports = { checkAuthorId, checkAuthorExists };