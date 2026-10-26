// ==========================================
// Latihan 1: Mengubah Teks dengan DOM
// ==========================================
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

// ==========================================
// Latihan 2: Event Click
// ==========================================
const tombolAksi = document.getElementById("tombolAksi");

tombolAksi.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

// ==========================================
// Latihan 3 & Eksperimen 4: Mengubah Kelas & Gaya CSS
// ==========================================
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");
const tombolSembunyi = document.getElementById("tombolSembunyi");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

// Eksperimen 4: Menyembunyikan / Menampilkan Paragraf
tombolSembunyi.addEventListener("click", function () {
    teksGaya.classList.toggle("sembunyi");
});

// ==========================================
// Latihan 4: Event Input & Penghitung Karakter
// ==========================================
const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});

// ==========================================
// Latihan 5: Validasi Form Pendaftaran
// ==========================================
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah reload halaman

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Eksperimen 2: Nama minimal 3 karakter
    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
    } else if (nama.length < 3) {
        pesanForm.textContent = "Nama harus minimal 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17-100.";
    } else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        form.reset();
    }
});

// ==========================================
// Latihan 6 & Eksperimen 1: To-do List
// ==========================================
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    
    // Eksperimen 1: Tombol Hapus Tambahan
    const hapus = document.createElement("button");

    label.textContent = teks + " ";
    selesai.type = "button";
    selesai.textContent = "Tandai selesai";

    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");
        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });

    hapus.type = "button";
    hapus.textContent = "Hapus";
    hapus.className = "btn-hapus";
    hapus.addEventListener("click", function () {
        item.remove();
        pesanTugas.textContent = "Tugas berhasil dihapus.";
    });

    const wrapperAksi = document.createElement("div");
    wrapperAksi.append(selesai, hapus);

    item.append(label, wrapperAksi);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";
    inputTugas.focus();
});

// ==========================================
// Mini Project: Form Pendaftaran Workshop
// ==========================================
const formWorkshop = document.getElementById("formWorkshop");
const sesiWs = document.getElementById("sesiWs");
const infoSesiSelected = document.getElementById("infoSesiSelected");
const pesanWs = document.getElementById("pesanWs");

// Eksperimen 3: Event change pada dropdown sesi
sesiWs.addEventListener("change", function () {
    if (sesiWs.value !== "") {
        infoSesiSelected.textContent = "Sesi terpilih: " + sesiWs.value;
    } else {
        infoSesiSelected.textContent = "Belum ada sesi yang dipilih.";
    }
});

// Handling Submit Mini Project
formWorkshop.addEventListener("submit", function (e) {
    e.preventDefault();
    const nama = document.getElementById("namaWs").value.trim();
    const email = document.getElementById("emailWs").value.trim();
    const sesi = sesiWs.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama.length < 3) {
        pesanWs.textContent = "Nama peserta minimal 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesanWs.textContent = "Email tidak valid.";
    } else if (sesi === "") {
        pesanWs.textContent = "Silakan pilih sesi workshop.";
    } else {
        pesanWs.textContent = `Pendaftaran berhasil! Terima kasih ${nama}, konfirmasi akan dikirim ke ${email}.`;
        formWorkshop.reset();
        infoSesiSelected.textContent = "Belum ada sesi yang dipilih.";
    }
});