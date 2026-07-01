# FOH Training Module — Nara Curated Compound

Modul training interaktif untuk tim Front of House (Kasir, Server, Barista, Kitchen) berisi materi SOP, Hospitality, Food Safety, Cleaning, dan Penanganan Komplain, dilengkapi kuis evaluasi (5 topik x 25 soal, dengan opsi jawaban acak).

Awalnya dibuat sebagai satu file HTML, sekarang dipecah menjadi struktur modular supaya lebih mudah dikelola dan di-upload ke GitHub.

## Struktur Folder

```
├── index.html          # Struktur halaman (markup saja, tanpa CSS/JS inline)
├── css/
│   └── style.css        # Semua styling
└── js/
    ├── data.js           # Data konten: 15 step SOP, materi tab 2-5, 125 soal kuis
    ├── modals.js         # Buka/tutup modal detail SOP & Materi
    ├── tabs.js            # Navigasi tab utama (SOP/Hospitality/dst) & switch halaman SOP <-> Kuis
    ├── quiz.js            # Logika kuis: acak opsi, render soal, validasi, submit, hasil skor
    └── main.js            # Inisialisasi saat halaman dimuat + shortcut keyboard (Esc)
```

## Cara Menjalankan

Tidak perlu build tool apapun (vanilla HTML/CSS/JS). Cukup:

1. Clone / download repo ini
2. Buka `index.html` langsung di browser, **atau**
3. Untuk hasil terbaik (menghindari isu CORS pada beberapa browser), jalankan lewat local server, misalnya:
   ```bash
   npx serve .
   # atau
   python3 -m http.server 8000
   ```
4. Buka juga bisa langsung lewat **GitHub Pages** setelah di-push (Settings → Pages → pilih branch `main` → root).

## Urutan Load Script

`data.js` dimuat paling awal karena `modals.js`, `quiz.js`, dan `tabs.js` bergantung pada data (`stepData`, `materialData`, dan 5 array soal) yang didefinisikan di sana. Urutan di `index.html` sudah diatur sesuai dependensi ini — jangan diacak urutannya.

## Known Issue (peninggalan dari versi asli)

Di `js/main.js`, saat inisialisasi ada baris:
```js
document.getElementById('tab1Btn').className = 'btn-quiz-toggle active-tab';
```
Elemen dengan id `tab1Btn` tidak ada di markup (tombol tab kuis di `index.html` tidak diberi id), jadi baris ini berpotensi memicu error di console browser meski tidak mengganggu fungsi utama kuis. Ini sudah ada di file HTML aslinya sebelum dipecah — beri tahu saya kalau mau sekalian diperbaiki.
