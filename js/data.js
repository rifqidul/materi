// =============================================
// DATA DEFAULT (SOP, Materi, Soal) - Ambil dari file asli Anda
// =============================================
// (Di sini saya hanya menampilkan struktur, Anda harus mengisi dengan data lengkap dari file asli)
// Untuk menghemat tempat, saya akan menggunakan placeholder. Anda dapat menggantinya dengan data Anda.

const defaultSteps = {
  1: { title: 'Greeting & Sambutan', role: '👤 Kasir · Barista · Server', 
       sop: `<p><strong>Tujuan :</strong> Memberikan kesan pertama yang hangat dan profesional.</p><ul><li>Sapa segera setelah pelanggan membuka pintu.</li><li>Gunakan senyum dan kontak mata.</li><li>Tawarkan rekomendasi menu signature Nara.</li></ul>`, 
       script: `<div class="script-box"><p><span class="speaker">Kasir/Server/Barista :</span> "Selamat datang di Nara, Bapak/Ibu! Kami ada Mont Blanc dengan foam orange zest yang sedang populer. Mau saya bantu pilihkan menu?"</p></div>` },
  // ... (masukkan step 2-15 dari file asli)
};

const defaultMaterials = {
  // Hospitality
  'hospitality_golden': {
    title: 'Golden Rule', role: '🌟 Prinsip Dasar',
    tujuan: 'Memahami prinsip dasar hospitality bahwa setiap tamu Nara harus dihormati dan dilayani dengan tulus.',
    content: `<ul><li><strong>Golden Rule :</strong> "Perlakukan orang lain sebagaimana Anda ingin diperlakukan."</li><li>Pelanggan datang untuk merasakan <strong>pengalaman</strong>, bukan hanya makan dan minum.</li><li>Keramahan yang tulus akan membuat pelanggan merasa <strong>dihargai</strong>.</li></ul>`,
    script: `<div class="script-box"><p><span class="speaker">Contoh :</span> "Selamat datang di Nara, Bapak/Ibu! Kami sangat senang bisa melayani Anda hari ini."</p></div>`
  },
  // ... (masukkan semua materi hospitality, food safety, cleaning, complaint dari file asli)
};

// =============================================
// DATA SOAL (5 kuis × 25 soal)
// =============================================
// Anda harus mengisi array ini dengan data dari file asli (sopQuestionsData, hospitalityQuestionsData, dll.)
// Contoh struktur per soal: { q: "Pertanyaan", options: ["A", "B", "C", "D"], answer: 1 }

const defaultQuizzes = [
  // Kuis 1: SOP (25 soal) — isi dengan data dari file asli
  [
    // TODO: masukkan 25 soal dari sopQuestionsData
  ],
  // Kuis 2: Hospitality (25 soal)
  [
    // TODO: masukkan 25 soal dari hospitalityQuestionsData
  ],
  // Kuis 3: Food Safety (25 soal)
  [
    // TODO: masukkan 25 soal dari foodSafetyQuestionsData
  ],
  // Kuis 4: Cleaning (25 soal)
  [
    // TODO: masukkan 25 soal dari cleaningQuestionsData
  ],
  // Kuis 5: Komplain (25 soal)
  [
    // TODO: masukkan 25 soal dari complaintQuestionsData
  ]
];

// =============================================
// FIRESTORE INTEGRATION (compat)
// =============================================

const firebaseConfig = {
  apiKey: "AIzaSyA8-zHCEwB1nNoJRfajQ6cQe05DesGGP5I",
  authDomain: "nara-training-68474.firebaseapp.com",
  projectId: "nara-training-68474",
  storageBucket: "nara-training-68474.firebasestorage.app",
  messagingSenderId: "1084927024233",
  appId: "1:1084927024233:web:607ac21ea0fba3868856f8"
};

// Inisialisasi Firebase (hanya jika SDK tersedia)
if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
} else {
  console.error("Firebase SDK tidak ditemukan. Pastikan script CDN dimuat.");
}

const defaultData = {
  steps: defaultSteps,
  materials: defaultMaterials,
  quizzes: defaultQuizzes
};

const DOC_ID = 'master_data';

// Fungsi untuk mengambil data dari Firestore
async function getAppData() {
  if (typeof firebase === 'undefined') {
    console.warn("Firebase tidak tersedia, menggunakan data default.");
    return defaultData;
  }
  try {
    const db = firebase.firestore();
    const docRef = db.collection('app_data').doc(DOC_ID);
    const doc = await docRef.get();
    if (doc.exists) {
      return doc.data();
    } else {
      // Jika dokumen belum ada, buat dengan data default
      await docRef.set(defaultData);
      return defaultData;
    }
  } catch (error) {
    console.error("Gagal load dari Firebase, pakai default:", error);
    return defaultData;
  }
}

// Fungsi untuk menyimpan data ke Firestore
async function saveAppData(newData) {
  if (typeof firebase === 'undefined') {
    console.error("Firebase tidak tersedia, data tidak disimpan.");
    return false;
  }
  try {
    const db = firebase.firestore();
    const docRef = db.collection('app_data').doc(DOC_ID);
    await docRef.set(newData);
    return true;
  } catch (error) {
    console.error("Gagal simpan ke Firebase:", error);
    alert("Gagal menyimpan data! Cek koneksi internet.");
    return false;
  }
}

// Export ke global agar bisa diakses file lain
window.getAppData = getAppData;
window.saveAppData = saveAppData;
window.defaultData = defaultData;
