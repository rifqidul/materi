    // =============================================
    // HAPUS BORDER MERAH SAAT FORM DIISI
    // =============================================
    document.addEventListener('DOMContentLoaded', function() {
        const nameInput = document.getElementById('participantName');
        const roleSelect = document.getElementById('participantRole');

        nameInput.addEventListener('input', function() {
            if (this.value.trim()) this.classList.remove('error');
        });

        roleSelect.addEventListener('change', function() {
            if (this.value) this.classList.remove('error');
        });

        renderAllQuizzes();
        document.getElementById('quiz1Container').classList.add('active');
        document.getElementById('tab1Btn').className = 'btn-quiz-toggle active-tab';
    });

    // =============================================
    // PENUTUP: Keyboard shortcut Escape untuk semua modal
    // =============================================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
            closeMaterialModal();
            closeConfirmModal();
            closeResultModal();
        }
    });
