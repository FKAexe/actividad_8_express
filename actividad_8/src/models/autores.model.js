const db = require('../config/db');

const selectAuthors = async () => {
    const [result] = db.query('SELECT * FROM autores');
    return result;
}
module.exports = { selectAuthors };