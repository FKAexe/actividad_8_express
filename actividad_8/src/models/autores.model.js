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
const selectById = async (authorId) => {
    const [result] = await db.query('SELECT * FROM autores WHERE id = ?', [authorId]);
    if(result.length === 0){ 
        return null;
    }
    return result[0]; //se retorna el primer elemento del array.
    //si la longitud del array es 0, no existe el cliente. si es 1 existe.
    //Como la query es un select la variable result recoge un array de filas.
}

module.exports = { selectAuthors, insertAuthor, selectById };