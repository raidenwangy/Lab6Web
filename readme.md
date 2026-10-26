# Praktikum 6: JavaScript DOM dan Event Handling

| Mata Kuliah | Pemrograman Web | 
| ----- | ----- | 
| **Pertemuan** | 7 | 
| **Topik** | JavaScript DOM dan Event Handling | 
| **Repository** | Lab6Web | 

## 📌 Deskripsi Proyek

Proyek ini berisi implementasi praktikum manipulasi **Document Object Model (DOM)** dan **Event Handling** menggunakan JavaScript tingkat dasar hingga menengah. Materi mencakup pemilihan elemen, manipulasi atribut dan kelas CSS, penggunaan event listener dinamis (`click`, `input`, `change`, `submit`), validasi formulir, serta pembuatan fitur daftar tugas (*To-do List*) dan *Mini Project* Form Pendaftaran Workshop.

## 📁 Struktur File

```
lab6_dom_event/
├── index.html       # Struktur utama elemen HTML
├── style.css        # Aturan tata letak & kelas tampilan (gaya CSS)
├── script.js        # Logika manipulasi DOM & Event Handling
└── README.md        # Dokumentasi praktikum

```

## Cara Menjalankan Proyek

1. Clone atau unduh repository ini ke komputer Anda:

   ```
   git clone https://github.com/username/Lab6Web.git
   
   ```

2. Buka folder `lab6_dom_event` menggunakan editor kode **Visual Studio Code**.

3. Buka file `index.html` langsung di browser modern (Google Chrome, Firefox, atau Edge).

4. Untuk memantau eksekusi JavaScript, buka **Developer Tools** peramban dengan menekan tombol `F12` atau `Ctrl + Shift + I`, lalu pilih tab **Console**.

## 📝 Penjelasan Tahap Praktikum

### 🛠️ Bagian D: Persiapan Praktikum

* Membuka struktur folder `lab6_dom_event` dan membuat tiga file utama (`index.html`, `style.css`, `script.js`).

* Menghubungkan file `script.js` di dalam tag `<head>` file `index.html` menggunakan atribut `defer`.

* **Fungsi Atribut `defer`:** Memastikan bahwa kode JavaScript baru dijalankan setelah seluruh struktur dokumen HTML selesai diparsing oleh browser, sehingga pemilihan elemen tidak menghasilkan nilai `null`.

### Bagian E: Langkah Kerja Praktikum

#### 1. Latihan 1 – Mengubah Teks dengan DOM

* **Penjelasan:** Menggunakan method `document.getElementById()` untuk memilih elemen judul (`<h1>`) dan pesan (`<p>`), kemudian memperbarui isinya menggunakan atribut `.textContent`.

* **Fungsi Utama:**

  ```
  const judul = document.getElementById("judul");
  judul.textContent = "Belajar JavaScript DOM";
  
  ```



#### 2. Latihan 2 – Event `click`

* **Penjelasan:** Menambahkan `addEventListener("click", ...)` pada tombol aksi. Ketika tombol diklik, paragraf akan menampilkan waktu saat tindakan dilakukan menggunakan `new Date().toLocaleTimeString()`.

  

#### 3. Latihan 3 – Mengubah Kelas dan Gaya CSS

* **Penjelasan:** Menambahkan kelas `.highlight` dan `.teks-besar` pada file `style.css`. Pada JavaScript, digunakan method `classList.toggle()` untuk mefasilitasi bongkar-pasang kelas CSS saat tombol diklik.

  

#### 4. Latihan 4 – Event `input` dan Penghitung Karakter

* **Penjelasan:** Memantau setiap ketikan pengguna secara *real-time* pada bidang input teks menggunakan event `input`, lalu memperbarui angka panjang string (`value.length`) pada elemen `<span>`.

  

#### 5. Latihan 5 – Validasi Form Pendaftaran

* **Penjelasan:** Menghentikan proses pengiriman form bawaan dengan `event.preventDefault()`. Melakukan verifikasi apakah kolom nama terisi, email cocok dengan ekspresi reguler (*Regex*), serta usia berada pada rentang angka 17–100.


  

#### 6. Latihan 6 – Daftar Tugas Sederhana (*To-do List*)

* **Penjelasan:** Membuat elemen daftar baru (`<li>`) secara dinamis menggunakan `document.createElement()`. Dilengkapi tombol "Tandai Selesai" yang memanfaatkan `classList.toggle("selesai")` untuk mencoret teks tugas.


  

### Bagian F: Mini Project – Form Pendaftaran Workshop

Mengembangkan antarmuka pendaftaran workshop dengan interaksi berikut:

1. **Validasi Formulir:** Nama minimal 3 karakter, format email valid, serta memilih salah satu sesi.

2. **Umpan Balik Langsung (*Live Feedback*):** Event `change` pada dropdown sesi workshop akan langsung menampilkan info sesi terpilih di dalam kotak instruksi.

3. **Pesan Status Dinamis:** Menampilkan pesan error berwarna merah jika input salah dan pesan sukses berwarna hijau saat pendaftaran berhasil.

4. **Tombol Reset:** Mengosongkan form dan mengembalikan info status ke kondisi awal.


  

## Bagian G: Eksperimen Mandiri

1. **Tombol Hapus pada To-do List:**

   Menambahkan tombol "Hapus" pada setiap item daftar tugas (`<li>`) menggunakan method `item.remove()`.

2. **Validasi Panjang Nama:**

   Menambahkan syarat `nama.length < 3` pada validasi formulir agar nama pendek/kosong ditolak.

3. **Event `change` Dropdown Sesi:**

   Memasang *listener* pada elemen `<select>` untuk menangkap pilihan sesi yang dipilih oleh pengguna secara instan.

4. **Sembunyi / Tampil Paragraf:**

   Menambahkan fitur menyembunyikan elemen teks menggunakan perpaduan kelas CSS `.sembunyi { display: none; }` dan `classList.toggle()`.

5. **Analisis Script Tanpa `defer` pada Bagian `<head>`:**

   * **Hasil Amatan:** Jika atribut `defer` dihapus saat skrip dimuat pada bagian `<head>`, peramban akan mengalami error di console:

     `Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')`.

   * **Penyebab:** JavaScript dieksekusi sebelum peramban selesai membaca dan membuat objek elemen HTML pada DOM Tree, sehingga pemilihan elemen mengembalikan nilai `null`.

## Bagian H: Pertanyaan Evaluasi dan Jawaban

1. **Apa yang dimaksud dengan DOM dan apa manfaatnya?**

   *Jawab:* DOM (*Document Object Model*) adalah antarmuka pemograman (API) yang merepresentasikan struktur dokumen HTML sebagai pohon objek. Manfaat utamanya adalah memungkinkan JavaScript mengubah konten, struktur, gaya CSS, serta merespons interaksi pengguna secara dinamis tanpa perlu memuat ulang seluruh halaman.

2. **Apa perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`?**

   *Jawab:*

   * `getElementById()`: Memilih satu elemen berdasarkan atribut `id`.

   * `querySelector()`: Memilih elemen pertama yang cocok dengan *selector* CSS.

   * `querySelectorAll()`: Memilih seluruh elemen yang cocok dengan *selector* CSS dan mengembalikannya sebagai kumpulan node (*NodeList*).

3. **Apa fungsi `addEventListener()` dan sebutkan tiga contoh event?**

   *Jawab:* Fungsi `addEventListener()` digunakan untuk mendaftarkan fungsi penangan (*event listener*) yang akan dijalankan ketika suatu event terjadi pada elemen target. Contoh event: `click`, `input`, dan `submit`.

4. **Mengapa `event.preventDefault()` digunakan pada event submit form?**

   *Jawab:* Secara bawaan (*default*), event submit akan mengarahkan halaman ke URL baru atau memuat ulang (*reload*) halaman. `event.preventDefault()` digunakan untuk membatalkan aksi bawaan tersebut agar proses validasi JavaScript dapat mengeksekusi pemeriksaan data terlebih dahulu.

5. **Apa perbedaan `textContent` dan `innerHTML` dari sisi penggunaan dan keamanan?**

   *Jawab:* `textContent` hanya membaca atau menyisipkan teks biasa sehingga sangat aman dari celah *Cross-Site Scripting* (XSS). Sedangkan `innerHTML` dapat memproses dan mengeksekusi tag HTML, namun berisiko menimbulkan masalah keamanan jika digunakan untuk menampilkan input pengguna tanpa sanitasi.

6. **Bagaimana `classList.toggle()` membantu mengubah tampilan elemen?**

   *Jawab:* `classList.toggle()` bekerja dengan cara menambahkan kelas CSS jika kelas tersebut belum ada pada elemen, atau menghapusnya jika kelas sudah ada. Hal ini memudahkan pembuatan efek ganti gaya (seperti mode malam, highlight, atau tombol sembunyi/tampil) hanya dengan satu panggilan fungsi.

7. **Sebutkan minimal tiga skenario pengujian validasi form.**

   *Jawab:*

   1. Menekan tombol submit dalam keadaan semua kolom input kosong.

   2. Mengisi kolom email dengan format yang salah (misalnya tanpa simbol `@` atau tanpa nama domain).

   3. Mengisi angka usia di luar batasan yang ditentukan (misalnya mengisi angka di bawah 17 atau di atas 100).