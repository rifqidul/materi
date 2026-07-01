// =============================================
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8-zHCEwB1nNoJRfajQ6cQe05DesGGP5I",
  authDomain: "nara-training-68474.firebaseapp.com",
  projectId: "nara-training-68474",
  storageBucket: "nara-training-68474.firebasestorage.app",
  messagingSenderId: "1084927024233",
  appId: "1:1084927024233:web:607ac21ea0fba3868856f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// =============================================
// DATA DEFAULT (jika cloud kosong atau error)
// =============================================
const defaultSteps = { /* salin data stepData Anda di sini */ };
const defaultMaterials = { /* salin data materialData Anda di sini */ };
const defaultQuizzes = [ /* salin 5 array soal Anda di sini */ ];

const defaultData = {
  steps: defaultSteps,
  materials: defaultMaterials,
  quizzes: defaultQuizzes
};

// =============================================
// FUNGSI BACA & TULIS KE FIRESTORE
// =============================================
const DOC_ID = 'master_data'; // nama dokumen di Firestore

async function getAppData() {
  try {
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

async function saveAppData(newData) {
  try {
    const docRef = db.collection('app_data').doc(DOC_ID);
    await docRef.set(newData);
    return true;
  } catch (error) {
    console.error("Gagal simpan ke Firebase:", error);
    alert("Gagal menyimpan data! Cek koneksi internet.");
    return false;
  }
}
