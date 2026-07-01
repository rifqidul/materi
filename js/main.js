// =============================================
// INISIALISASI SAAT HALAMAN DIMUAT
// =============================================
document.addEventListener('DOMContentLoaded', async function () {
    // Elemen form identitas
    const nameInput = document.getElementById('participantName');
    const roleSelect = document.getElementById('participantRole');

    if (nameInput) {
        nameInput.addEventListener('input', function () {
            if (this.value.trim()) this.classList.remove('error');
        });
    }
    if (roleSelect) {
        roleSelect.addEventListener('change', function () {
            if (this.value) this.classList.remove('error');
        });
    }

    // Render semua kuis (memanggil fungsi dari quiz.js)
    if (typeof renderAllQuizzes === 'function') {
        await renderAllQuizzes();
    } else {
        console.warn('renderAllQuizzes tidak ditemukan. Pastikan quiz.js sudah dimuat.');
    }

    // Set default tab kuis pertama aktif
    const firstQuizTab = document.querySelector('#quizTabGroup .btn-quiz-toggle');
    if (firstQuizTab) {
        firstQuizTab.classList.add('active-tab');
    }
    const firstQuizContainer = document.getElementById('quiz1Container');
    if (firstQuizContainer) {
        firstQuizContainer.classList.add('active');
    }
});

// =============================================
// SHORTCUT KEYBOARD ESCAPE UNTUK SEMUA MODAL
// =============================================
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        // Fungsi-fungsi close didefinisikan di modals.js dan quiz.js
        if (typeof closeModal === 'function') closeModal();
        if (typeof closeMaterialModal === 'function') closeMaterialModal();
        if (typeof closeConfirmModal === 'function') closeConfirmModal();
        if (typeof closeResultModal === 'function') closeResultModal();
    }
});

// =============================================
// (Opsional) Fungsi untuk toggle tampilan SOP / Kuis
// =============================================
// Fungsi ini didefinisikan di tabs.js, tetapi kita tambahkan di sini
// agar konsisten jika tabs.js belum dimuat.
window.showQuiz = function() {
    const sopPage = document.getElementById('sopPage');
    const quizPage = document.getElementById('quizPage');
    if (sopPage) sopPage.classList.add('hidden');
    if (quizPage) quizPage.classList.add('active');
    // Render ulang kuis jika perlu
    if (typeof renderAllQuizzes === 'function') renderAllQuizzes();
};

window.showSOP = function() {
    const sopPage = document.getElementById('sopPage');
    const quizPage = document.getElementById('quizPage');
    if (sopPage) sopPage.classList.remove('hidden');
    if (quizPage) quizPage.classList.remove('active');
    // Tutup modal yang mungkin masih terbuka
    if (typeof closeResultModal === 'function') closeResultModal();
    if (typeof closeConfirmModal === 'function') closeConfirmModal();
    if (typeof closeMaterialModal === 'function') closeMaterialModal();
};
