const db = require('./db');


// ========================================
// GET SEMUA SISWA
// ========================================
exports.getSiswa = (req, res) => {

    const sql = `
        SELECT *
        FROM database_praktek
        ORDER BY id ASC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil data siswa'
            });
        }

        res.status(200).json({
            success: true,
            data: results
        });

    });
};


// ========================================
// GET SISWA BERDASARKAN ID
// ========================================
exports.getSiswaById = (req, res) => {

    const { id } = req.params;

    const sql = `
        SELECT *
        FROM database_praktek
        WHERE id = ?
    `;

    db.query(sql, [id], (err, results) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil data siswa'
            });
        }

        if (results.length === 0) {

            return res.status(404).json({
                success: false,
                message: 'Siswa tidak ditemukan'
            });

        }

        res.status(200).json({
            success: true,
            data: results[0]
        });

    });
};


// ========================================
// POST TAMBAH SISWA
// ========================================
exports.createSiswa = (req, res) => {

    const {
        nis,
        nama,
        kelas,
        jurusan,
        alamat
    } = req.body;


    // Validasi
    if (!nis || !nama || !kelas || !jurusan || !alamat) {

        return res.status(400).json({
            success: false,
            message: 'Semua data siswa wajib diisi'
        });

    }


    const sql = `
        INSERT INTO database_praktek
        (nis, nama, kelas, jurusan, alamat)
        VALUES (?, ?, ?, ?, ?)
    `;


    db.query(
        sql,
        [nis, nama, kelas, jurusan, alamat],
        (err, result) => {

            if (err) {
                console.error(err);

                return res.status(500).json({
                    success: false,
                    message: 'Gagal menambahkan siswa'
                });
            }


            res.status(201).json({
                success: true,
                message: 'Siswa berhasil ditambahkan',
                id: result.insertId
            });

        }
    );
};


// ========================================
// PUT EDIT SISWA
// ========================================
exports.updateSiswa = (req, res) => {

    const { id } = req.params;

    const {
        nis,
        nama,
        kelas,
        jurusan,
        alamat
    } = req.body;


    // Validasi
    if (!nis || !nama || !kelas || !jurusan || !alamat) {

        return res.status(400).json({
            success: false,
            message: 'Semua data siswa wajib diisi'
        });

    }


    const sql = `
        UPDATE database_praktek
        SET
            nis = ?,
            nama = ?,
            kelas = ?,
            jurusan = ?,
            alamat = ?
        WHERE id = ?
    `;


    db.query(
        sql,
        [nis, nama, kelas, jurusan, alamat, id],
        (err, result) => {

            if (err) {
                console.error(err);

                return res.status(500).json({
                    success: false,
                    message: 'Gagal mengubah data siswa'
                });
            }


            if (result.affectedRows === 0) {

                return res.status(404).json({
                    success: false,
                    message: 'Siswa tidak ditemukan'
                });

            }


            res.status(200).json({
                success: true,
                message: 'Data siswa berhasil diubah'
            });

        }
    );
};


// ========================================
// DELETE SISWA
// ========================================
exports.deleteSiswa = (req, res) => {

    const { id } = req.params;

    const sql = `
        DELETE FROM database_praktek
        WHERE id = ?
    `;


    db.query(sql, [id], (err, result) => {

        if (err) {
            console.error(err);

            return res.status(500).json({
                success: false,
                message: 'Gagal menghapus siswa'
            });
        }


        if (result.affectedRows === 0) {

            return res.status(404).json({
                success: false,
                message: 'Siswa tidak ditemukan'
            });

        }


        res.status(200).json({
            success: true,
            message: 'Siswa berhasil dihapus'
        });

    });
};