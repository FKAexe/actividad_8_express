const db = require('../config/db');

const selectPosts = async () => {
    const [result] = await db.query('SELECT a.nombre AS autor, a.id as autorid, p.id, p.titulo, p.descripcion, p.fecha_creacion, p.categoria FROM posts p JOIN autores a ON p.autores_id = a.id');
    return result;
}

const insertPost = async(titulo, descripcion, fecha_creacion, categoria, autor_id) => {
    const [result] = await db.query('INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autor_id) VALUES (?,?,?,?,?)', [titulo, descripcion, fecha_creacion, categoria, autor_id]);
    return result;
}
const postById = async (autor_id) => {
    const [result] = await db.query('SELECT a.nombre AS autor, a.id as autorid, p.id, p.titulo, p.descripcion, p.fecha_creacion, p.categoria FROM posts p JOIN autores a ON p.autores_id = a.id WHERE a.id = ?', [autor_id]);
    return result;
}

module.exports = { selectPosts, insertPost, postById };