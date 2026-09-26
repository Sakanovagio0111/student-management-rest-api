const express = require('express');
const path = require('path');

const app = express();

const PORT = 1945;


// Middleware JSON
app.use(express.json());


// Routes siswa
const siswaRoutes = require('./siswa');

app.use('/api/siswa', siswaRoutes);


// Frontend
app.use(express.static(__dirname));


// Halaman utama
app.get('/', (req, res) => {

    res.sendFile(
        path.join(__dirname, 'index.html')
    );

});


// Jalankan server
app.listen(PORT, () => {

    console.log(
        `Server berjalan di http://localhost:${PORT}`
    );

});