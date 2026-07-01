// =============================================
// UTILITY: ACACAK ARRAY (Fisher-Yates)
// =============================================
function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// =============================================
// RENDER SATU KUIS DENGAN OPSI ACAK
// =============================================
function renderQuizWithRandomOptions(containerId, questionsData) {
    const container = document.getElementById(containerId);
    if (!container) return;
    let html = '';
    questionsData.forEach((q, index) => {
        const shuffledOptions = shuffleArray(q.options);
        const correctIndex = shuffledOptions.indexOf(q.options[q.answer]);
        const name = `${containerId}_q${index}`;
        html += `<div class="question-block" id="qblock_${containerId}_${index}">
                    <div class="q-number">Soal ${index + 1}</div>
                    <div class="q-text">${q.q}</div>
                    <div class="options">`;
        shuffledOptions.forEach((opt, optIndex) => {
            html += `<label>
                        <input type="radio" name="${name}" value="${optIndex}">
                        ${opt}
                    </label>`;
        });
        html += `</div></div>`;
        container.dataset[`correct_${index}`] = correctIndex;
    });
    container.innerHTML = html;
}

// =============================================
// RENDER SEMUA KUIS (mengambil data dari cloud via getAppData)
// =============================================
async function renderAllQuizzes() {
    if (typeof getAppData !== 'function') {
        console.error('getAppData tidak tersedia. Pastikan data.js dimuat.');
        return;
    }
    try {
        const data = await getAppData();
        const quizzes = data.quizzes || [];
        // Pastikan ada 5 kuis
        for (let i = 0; i < 5; i++) {
            const containerId = `questions${i+1}Container`;
            if (quizzes[i]) {
                renderQuizWithRandomOptions(containerId, quizzes[i]);
            } else {
                // Jika kuis kosong, tampilkan pesan
                const container = document.getElementById(containerId);
                if (container) container.innerHTML = '<p style="color:#6b7a8d;">Belum ada soal untuk kuis ini.</p>';
            }
        }
    } catch (error) {
        console.error('Gagal render kuis:', error);
    }
}

// =============================================
// HANDLE SUBMIT (dengan validasi & konfirmasi)
// =============================================
let pendingQuizNumber = null;

function handleSubmit(quizNumber) {
    const nameInput = document.getElementById('participantName');
    const roleSelect = document.getElementById('participantRole');
    const name = nameInput ? nameInput.value.trim() : '';
    const role = roleSelect ? roleSelect.value : '';

    let identityValid = true;
    if (nameInput) {
        if (!name) { nameInput.classList.add('error'); identityValid = false; }
        else { nameInput.classList.remove('error'); }
    }
    if (roleSelect) {
        if (!role) { roleSelect.classList.add('error'); identityValid = false; }
        else { roleSelect.classList.remove('error'); }
    }

    const containerId = `quiz${quizNumber}Container`;
    const container = document.getElementById(containerId);
    if (!container) return;

    const questionBlocks = container.querySelectorAll('.question-block');
    let allAnswered = true;
    questionBlocks.forEach((block) => {
        const radios = block.querySelectorAll('input[type="radio"]');
        const checked = Array.from(radios).some(r => r.checked);
        if (!checked) { block.classList.add('error'); allAnswered = false; }
        else { block.classList.remove('error'); }
    });

    if (!identityValid) {
        alert('⚠️ Mohon isi Nama dan Job Role dengan lengkap.');
        return;
    }
    if (!allAnswered) {
        alert('⚠️ Masih ada pertanyaan yang belum dijawab. Pertanyaan yang belum diisi akan ditandai dengan border merah.');
        const firstError = container.querySelector('.question-block.error');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }

    pendingQuizNumber = quizNumber;
    const confirmModal = document.getElementById('confirmModal');
    if (confirmModal) {
        confirmModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeConfirmModal() {
    const confirmModal = document.getElementById('confirmModal');
    if (confirmModal) confirmModal.classList.remove('active');
    document.body.style.overflow = '';
    pendingQuizNumber = null;
}

// Event listener untuk tombol konfirmasi (dipasang setelah DOM siap)
document.addEventListener('DOMContentLoaded', function () {
    const confirmBtn = document.getElementById('confirmSubmitBtn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function () {
            if (pendingQuizNumber !== null) {
                doSubmitQuiz(pendingQuizNumber);
                closeConfirmModal();
            }
        });
    }
});

function doSubmitQuiz(quizNumber) {
    const nameInput = document.getElementById('participantName');
    const roleSelect = document.getElementById('participantRole');
    const name = nameInput ? nameInput.value.trim() : '';
    const role = roleSelect ? roleSelect.value : '';

    // Ambil data kuis dari cloud atau dari variabel global? 
    // Karena data sudah dimuat saat render, kita bisa mengambil dari container?
    // Kita akan gunakan pendekatan: ambil data dari localStorage? 
    // Sebenarnya data soal sudah tersimpan di defaultData atau di cloud, 
    // tapi untuk koreksi, kita harus tahu jawaban benar.
    // Cara termudah: kita simpan jawaban benar di dataset container saat render.
    const containerId = `quiz${quizNumber}Container`;
    const container = document.getElementById(containerId);
    if (!container) return;

    const total = container.querySelectorAll('.question-block').length;
    let correct = 0;
    for (let i = 0; i < total; i++) {
        const correctIndex = parseInt(container.dataset[`correct_${i}`]);
        const nameAttr = `${containerId}_q${i}`;
        const radios = container.querySelectorAll(`input[name="${nameAttr}"]`);
        let selected = null;
        radios.forEach(r => { if (r.checked) selected = parseInt(r.value); });
        if (selected === correctIndex) correct++;
    }

    // Disable semua radio
    container.querySelectorAll('input[type="radio"]').forEach(el => el.disabled = true);
    container.querySelectorAll('.options label').forEach(el => el.classList.add('disabled-label'));
    const submitBtn = document.getElementById(`submitQuiz${quizNumber}Btn`);
    if (submitBtn) submitBtn.disabled = true;

    const quizNames = {
        1: 'Kuis 1 (SOP)',
        2: 'Kuis 2 (Hospitality)',
        3: 'Kuis 3 (Food Safety)',
        4: 'Kuis 4 (Cleaning)',
        5: 'Kuis 5 (Komplain)'
    };
    showResultModal(name, role, correct, total, quizNames[quizNumber] || `Kuis ${quizNumber}`);
    pendingQuizNumber = null;
}

function showResultModal(name, role, correct, total, quizTitle) {
    const percentage = Math.round((correct / total) * 100);
    let emoji, grade;
    if (percentage >= 90) { emoji = '🌟'; grade = 'Luar biasa! Anda sangat menguasai materi.'; }
    else if (percentage >= 75) { emoji = '👍'; grade = 'Baik! Tingkatkan lagi pemahaman Anda.'; }
    else if (percentage >= 60) { emoji = '📖'; grade = 'Perlu belajar ulang beberapa bagian.'; }
    else { emoji = '📚'; grade = 'Silakan pelajari materi kembali dengan saksama.'; }

    const resultEmoji = document.getElementById('resultEmoji');
    const resultScore = document.getElementById('resultScore');
    const resultParticipant = document.getElementById('resultParticipant');
    const resultGrade = document.getElementById('resultGrade');
    if (resultEmoji) resultEmoji.textContent = emoji;
    if (resultScore) resultScore.textContent = `${correct} / ${total}`;
    if (resultParticipant) resultParticipant.textContent = `Nama : ${name}  |  Job Role : ${role}  |  ${quizTitle}`;
    if (resultGrade) resultGrade.textContent = `${grade} (${percentage}%)`;

    const resultModal = document.getElementById('resultModal');
    if (resultModal) {
        resultModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeResultModal() {
    const resultModal = document.getElementById('resultModal');
    if (resultModal) resultModal.classList.remove('active');
    document.body.style.overflow = '';
}
