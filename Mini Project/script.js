// ==========================================
// Mini Project: Form Pendaftaran Workshop
// ==========================================
const formWorkshop = document.getElementById("formWorkshop");
const sesiWs = document.getElementById("sesiWs");
const infoSesiSelected = document.getElementById("infoSesiSelected");
const pesanWs = document.getElementById("pesanWs");

// Fungsi Interaktif 1: Event 'change' pada dropdown sesi workshop
sesiWs.addEventListener("change", function () {
    if (sesiWs.value !== "") {
        infoSesiSelected.textContent = "Sesi terpilih: " + sesiWs.value;
    } else {
        infoSesiSelected.textContent = "Belum ada sesi yang dipilih.";
    }
});

// Fungsi Interaktif 2 & 3: Validasi form (nama, email, sesi) & Pesan dinamis
formWorkshop.addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah reload halaman
    
    const nama = document.getElementById("namaWs").value.trim();
    const email = document.getElementById("emailWs").value.trim();
    const sesi = sesiWs.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama.length < 3) {
        pesanWs.textContent = "Validasi Gagal: Nama peserta minimal 3 karakter.";
        pesanWs.style.color = "#d9534f";
    } else if (!polaEmail.test(email)) {
        pesanWs.textContent = "Validasi Gagal: Format email tidak valid.";
        pesanWs.style.color = "#d9534f";
    } else if (sesi === "") {
        pesanWs.textContent = "Validasi Gagal: Silakan pilih sesi workshop terlebih dahulu.";
        pesanWs.style.color = "#d9534f";
    } else {
        // Berhasil
        pesanWs.style.color = "#2b7a2b";
        pesanWs.textContent = `Pendaftaran Berhasil! Terima kasih ${nama}, konfirmasi akan dikirim ke ${email}.`;
        formWorkshop.reset();
        infoSesiSelected.textContent = "Belum ada sesi yang dipilih.";
    }
});