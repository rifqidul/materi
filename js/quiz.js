    // =============================================
    // FUNGSI UTILITY: ACACAK ARRAY (Fisher-Yates)
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
    // FUNGSI RENDER KUIS DENGAN OPSI ACAK
    // =============================================
    function renderQuizWithRandomOptions(containerId, questionsData, category) {
        const container = document.getElementById(containerId);
        if (!container) return;
        let html = '';
        questionsData.forEach((q, index) => {
            const shuffledOptions = shuffleArray(q.options);
            const correctIndex = shuffledOptions.indexOf(q.options[q.answer]);
            const name = `${containerId}_q${index}`;
            const adminIcons = `<div class="q-actions admin-only">
                            <button type="button" class="q-icon-btn q-icon-edit" title="Edit Soal" onclick="editQuizQuestionFromQuiz('${category}', '${q.id}')">✏️</button>
                            <button type="button" class="q-icon-btn q-icon-delete" title="Hapus Soal" onclick="deleteQuizQuestionFromQuiz('${category}', '${q.id}')">🗑️</button>
                        </div>`;
            html += `<div class="question-block" id="qblock_${containerId}_${index}">
                        <div class="q-number-row">
                            <div class="q-number">Soal ${index + 1}</div>
                            ${adminIcons}
                        </div>
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
        container.innerHTML = html || '<p class="empty-state">Belum ada soal untuk kuis ini.</p>';
    }

    function renderAllQuizzes() {
        renderQuizWithRandomOptions('questions1Container', sopQuestionsData, 'sop');
        renderQuizWithRandomOptions('questions2Container', hospitalityQuestionsData, 'hospitality');
        renderQuizWithRandomOptions('questions3Container', foodSafetyQuestionsData, 'foodsafety');
        renderQuizWithRandomOptions('questions4Container', cleaningQuestionsData, 'cleaning');
        renderQuizWithRandomOptions('questions5Container', complaintQuestionsData, 'complaint');
    }

    // =============================================
    // HANDLE SUBMIT (dengan validasi & konfirmasi)
    // =============================================
    let pendingQuizNumber = null;

    function handleSubmit(quizNumber) {
        const name = document.getElementById('participantName').value.trim();
        const role = document.getElementById('participantRole').value;
        const nameInput = document.getElementById('participantName');
        const roleSelect = document.getElementById('participantRole');

        let identityValid = true;
        if (!name) { nameInput.classList.add('error'); identityValid = false; }
        else { nameInput.classList.remove('error'); }
        if (!role) { roleSelect.classList.add('error'); identityValid = false; }
        else { roleSelect.classList.remove('error'); }

        const containerId = `quiz${quizNumber}Container`;
        const container = document.getElementById(containerId);
        const questionBlocks = container.querySelectorAll('.question-block');
        let allAnswered = true;

        questionBlocks.forEach((block) => {
            const radios = block.querySelectorAll('input[type="radio"]');
            const checked = Array.from(radios).some(r => r.checked);
            if (!checked) { block.classList.add('error'); allAnswered = false; }
            else { block.classList.remove('error'); }
        });

        if (!identityValid) { alert('⚠️ Mohon isi Nama dan Job Role dengan lengkap.'); return; }
        if (!allAnswered) {
            alert('⚠️ Masih ada pertanyaan yang belum dijawab. Pertanyaan yang belum diisi akan ditandai dengan border merah.');
            const firstError = container.querySelector('.question-block.error');
            if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        pendingQuizNumber = quizNumber;
        document.getElementById('confirmModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeConfirmModal() {
        document.getElementById('confirmModal').classList.remove('active');
        document.body.style.overflow = '';
        pendingQuizNumber = null;
    }

    document.getElementById('confirmSubmitBtn').addEventListener('click', function() {
        if (pendingQuizNumber !== null) {
            doSubmitQuiz(pendingQuizNumber);
            closeConfirmModal();
        }
    });

    function doSubmitQuiz(quizNumber) {
        const name = document.getElementById('participantName').value.trim();
        const role = document.getElementById('participantRole').value;

        const questionsMap = {
            1: sopQuestionsData, 2: hospitalityQuestionsData,
            3: foodSafetyQuestionsData, 4: cleaningQuestionsData,
            5: complaintQuestionsData
        };
        const categoryMap = { 1: 'sop', 2: 'hospitality', 3: 'foodsafety', 4: 'cleaning', 5: 'complaint' };
        const questions = questionsMap[quizNumber];
        if (!questions) return;

        // PENTING: soal & dataset "correct_N" dirender ke dalam kontainer
        // "questionsNContainer" (lihat renderQuizWithRandomOptions), BUKAN
        // ke kontainer luar "quizNContainer". Sebelumnya kode ini membaca
        // dari kontainer luar sehingga nama radio & dataset tidak pernah
        // cocok, akibatnya skor selalu 0 walaupun jawaban benar.
        const containerId = `questions${quizNumber}Container`;
        const container = document.getElementById(containerId);
        const total = questions.length;
        let correct = 0;

        for (let i = 0; i < total; i++) {
            const nameAttr = `${containerId}_q${i}`;
            const radios = container.querySelectorAll(`input[name="${nameAttr}"]`);
            let selected = null;
            radios.forEach(r => { if (r.checked) selected = parseInt(r.value); });
            const correctIndex = parseInt(container.dataset[`correct_${i}`]);
            if (selected === correctIndex) correct++;
        }

        container.querySelectorAll('input[type="radio"]').forEach(el => el.disabled = true);
        container.querySelectorAll('.options label').forEach(el => el.classList.add('disabled-label'));
        document.getElementById(`submitQuiz${quizNumber}Btn`).disabled = true;

        const quizNames = {
            1: 'Kuis 1 (SOP)',
            2: 'Kuis 2 (Hospitality)',
            3: 'Kuis 3 (Food Safety)',
            4: 'Kuis 4 (Cleaning)',
            5: 'Kuis 5 (Komplain)'
        };

        // Simpan hasil ke Supabase (tidak menghambat tampilan hasil ke user)
        if (typeof sb !== 'undefined') {
            sb.from('quiz_results').insert({
                participant: name,
                job_role: role,
                category: categoryMap[quizNumber],
                score: correct,
                total: total
            }).then(({ error }) => {
                if (error) console.error('Gagal menyimpan hasil kuis:', error);
            });
        }

        showResultModal(name, role, correct, total, quizNames[quizNumber]);
        pendingQuizNumber = null;
    }

    function showResultModal(name, role, correct, total, quizTitle) {
        const percentage = Math.round((correct / total) * 100);
        let emoji, grade;
        if (percentage >= 90) { emoji = '🌟'; grade = 'Luar biasa! Anda sangat menguasai materi.'; }
        else if (percentage >= 75) { emoji = '👍'; grade = 'Baik! Tingkatkan lagi pemahaman Anda.'; }
        else if (percentage >= 60) { emoji = '📖'; grade = 'Perlu belajar ulang beberapa bagian.'; }
        else { emoji = '📚'; grade = 'Silakan pelajari materi kembali dengan saksama.'; }

        document.getElementById('resultEmoji').textContent = emoji;
        document.getElementById('resultScore').textContent = `${correct} / ${total}`;
        document.getElementById('resultParticipant').textContent = `Nama : ${name}  |  Job Role : ${role}  |  ${quizTitle}`;
        document.getElementById('resultGrade').textContent = `${grade} (${percentage}%)`;

        document.getElementById('resultModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeResultModal() {
        document.getElementById('resultModal').classList.remove('active');
        document.body.style.overflow = '';
    }
