const express = require('express');

// ========================================
// REST API SISWA
// ========================================
// GET    /api/siswa       -> Semua siswa
// GET    /api/siswa/:id   -> Siswa berdasarkan ID
// POST   /api/siswa       -> Tambah siswa
// PUT    /api/siswa/:id   -> Edit siswa
// DELETE /api/siswa/:id   -> Hapus siswa

const router = express.Router();

const siswaController = require('./siswaController');


// GET semua siswa
router.get('/', siswaController.getSiswa);


// GET siswa berdasarkan ID
router.get('/:id', siswaController.getSiswaById);


// POST tambah siswa
router.post('/', siswaController.createSiswa);


// PUT edit siswa
router.put('/:id', siswaController.updateSiswa);


// DELETE siswa
router.delete('/:id', siswaController.deleteSiswa);


module.exports = router;