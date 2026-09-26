# Student Management REST API

## 1. Nama Aplikasi

**Student Management REST API**

## 2. Deskripsi Aplikasi

Student Management REST API adalah aplikasi pengelolaan data siswa berbasis REST API yang terintegrasi dengan frontend menggunakan Fetch API.

Aplikasi ini digunakan untuk menampilkan, menambahkan, mengubah, dan menghapus data siswa.

Data siswa yang dikelola meliputi ID, NIS, nama, kelas, jurusan, dan alamat.

## 3. Teknologi yang Digunakan

- Node.js
- Express.js
- MySQL
- HTML
- CSS
- JavaScript
- REST API
- Fetch API
- Git
- GitHub

## Data Siswa

Data siswa yang digunakan dalam aplikasi terdiri dari:

- ID
- NIS
- Nama
- Kelas
- Jurusan
- Alamat

## 4. Cara Menjalankan Backend

Buka terminal VS Code dan masuk ke folder project:

```bash
cd C:\laragon\www\toko-api\praktek
```

Kemudian jalankan server dengan perintah:

```bash
node server.js
```

Jika berhasil, server akan berjalan pada:

```text
http://localhost:1945
```

## 5. Cara Menjalankan Frontend

Setelah backend berhasil dijalankan, buka browser dan akses:

```text
http://localhost:1945
```

Frontend akan menampilkan halaman Student Management System.

Frontend menggunakan JavaScript dan Fetch API untuk berkomunikasi dengan REST API.

## 6. Daftar Endpoint API

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/api/siswa` | Menampilkan semua data siswa |
| GET | `/api/siswa/:id` | Menampilkan data siswa berdasarkan ID |
| POST | `/api/siswa` | Menambahkan data siswa |
| PUT | `/api/siswa/:id` | Mengubah data siswa |
| DELETE | `/api/siswa/:id` | Menghapus data siswa |

### Contoh Endpoint

Menampilkan semua siswa:

```text
GET http://localhost:1945/api/siswa
```

Menampilkan siswa berdasarkan ID:

```text
GET http://localhost:1945/api/siswa/1
```

Menambahkan siswa:

```text
POST http://localhost:1945/api/siswa
```

Mengubah siswa:

```text
PUT http://localhost:1945/api/siswa/1
```

Menghapus siswa:

```text
DELETE http://localhost:1945/api/siswa/1
```

## Fitur

- Menampilkan daftar siswa
- Menambahkan data siswa
- Mengubah data siswa
- Menghapus data siswa
- Konfirmasi sebelum menghapus data
- Loading saat mengambil data
- Pesan berhasil dan gagal
- Integrasi frontend dengan REST API menggunakan Fetch API
- Database MySQL

## 7. Screenshot Aplikasi

Berikut adalah tampilan aplikasi Student Management REST API:

![Screenshot Aplikasi](./screenshot.png)

## Pengujian

Pengujian REST API dilakukan menggunakan Postman dengan metode:

- GET
- POST
- PUT
- DELETE

Frontend juga diuji untuk:

- Menampilkan data siswa
- Menambahkan data siswa
- Mengubah data siswa
- Menghapus data siswa

## Struktur Project

```text
praktek/
├── db.js
├── index.html
├── server.js
├── siswa.js
├── siswaController.js
├── screenshot.png
└── README.md
```

## 8. Identitas Pembuat

**Nama:** Sakanovagio0111

**Project:** Student Management REST API

## GitHub

Source code project tersedia di:

https://github.com/Sakanovagio0111/student-management-rest-api