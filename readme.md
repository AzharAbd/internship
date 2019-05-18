# Tugas Intern

Hi Interns, berikut adalah tugas yang akan kamu kerjakan sebelum memulai intern.
Tugas ini akan kami pakai untuk mengenal bakatmu lebih dalam.

Kriteria pengerjaan tugas adalah sebagai berikut:

- Tugas dikerjakan seorang diri
- Tugas dapat menggunakan segala library yang dapat diakses di github atau npm
- Tugas akan dikumpulkan dalam bentuk pull request
- Pergunakan linting saat mengerjakan tugas (optional)

Deskripsi pekerjaan adalah sebagai berikut:

- Tugas terdiri dari 3 task.
- Intern hanya perlu memilih mengerjakan salah satu dari tiga task.
- Tiap tugas akan dilihat kerapihan kodenya bukan hanya hasil eksekusinya.
- Anda bebas menggunakan library tambahan apapun

Task yang ada adalah sebagai berikut
1. NextJS (NodeJS Frontend)
- HARUS menggunakan NextJS
- Buatlah semacam google copycat yang mengambil hasil berita dari [News API - A JSON API for live news and blog articles](https://newsapi.org/)
- Gunakan axios/fetch atau xhr request tools lainya untuk mengambil berita dan sajikan pada halamn web
- Frontend akan memiliki 2 halaman.
- Halaman pertama akan menjadi halaman yang memiliki search bar dan search result di bawah search bar
- Halaman kedua akan menjadi halaman blog yang berisi berita yang dipilih dari search result page.
  
2. Express + postgresql (NodeJS Backend)
- HARUS menggunakan express sebagai framework
- Parse halaman database.json menjadi dua table.
- Tabel pertama merupakan tabel API Key
- Tabel kedua merupakan tabel artikel
- Buatlah api yang menyajikan data dengan menggunakan input yang hampir sama dengan newsapi (hanya menerima query string q sebagai query dan sortBy untuk sorting item) dan mengambil data tersebut dari database (artikel table).
- Contoh :
```sh
http://localhost:8080/v2/everything?q=bitcoin&sortBy=publishedAt
```

3. Chi + postgresql (Golang Backend)
- Routing HARUS menggunakan router Chi
- Sama dengan tugas di express hanya diimplementasikan di golang
