const db = require('../config/db');

const selectAuthors = async () => {
    const [result] = await db.query('SELECT * FROM autores');
    return result;
}

const insertAuthor = async ({ nombre, email, imagen }) => {
    const [result] = await db.query
        ('INSERT INTO autores (nombre,email,imagen) VALUES (?,?,?)', [nombre, email, imagen]);
    return result;
}
module.exports = { selectAuthors, insertAuthor };