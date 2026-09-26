const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_toko'
});

db.connect((err) => {
    if (err) {
        console.error('Database gagal terhubung:', err);
        return;
    }

    console.log('Terhubung ke database MySQL');
});

module.exports = db;