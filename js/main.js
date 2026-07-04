    // =============================================
    // INISIALISASI SAAT HALAMAN DIMUAT
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

        // Cek status login (jika sebelumnya sudah login & sesi masih aktif)
        refreshAuthState();
        // Ambil semua materi & kuis dari Supabase, lalu render UI
        loadAllData();
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
            closeLoginModal();
            closeAdminForm();
            closeQuizManage();
            closeQuizResults();
        }
    });
