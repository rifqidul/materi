    // =============================================
    // FUNGSI TAB UTAMA
    // =============================================
    function switchMainTab(tabId) {
        document.querySelectorAll('.main-tab-content').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.main-tab-btn').forEach(el => el.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
        document.querySelector(`.main-tab-btn[data-tab="${tabId}"]`).classList.add('active');
    }

    // =============================================
    // TAMPILKAN SOP / KUIS
    // =============================================
    function showQuiz() {
        document.getElementById('sopPage').classList.add('hidden');
        document.getElementById('quizPage').classList.add('active');
        renderAllQuizzes();
    }
    function showSOP() {
        document.getElementById('sopPage').classList.remove('hidden');
        document.getElementById('quizPage').classList.remove('active');
        closeResultModal(); closeConfirmModal(); closeMaterialModal();
    }

    function showQuizTab(tab) {
        const container = document.getElementById('quizContainers');
        const children = container.children;
        for (let i = 0; i < children.length; i++) { children[i].classList.remove('active'); }
        const target = document.getElementById(`quiz${tab}Container`);
        if (target) target.classList.add('active');
        const buttons = document.querySelectorAll('#quizTabGroup .btn-quiz-toggle');
        buttons.forEach((btn, index) => {
            btn.className = (index + 1 === tab) ? 'btn-quiz-toggle active-tab' : 'btn-quiz-toggle secondary';
        });
    }
