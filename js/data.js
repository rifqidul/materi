// =============================================================
// DATA LOADER — mengambil semua materi & kuis dari Supabase
// Variabel di bawah ini dipertahankan namanya (stepData,
// materialData, ...QuestionsData) supaya modals.js, tabs.js,
// dan quiz.js yang sudah ada tetap bisa jalan tanpa diubah.
// =============================================================

let stepData = {};            // { [id]: {title, role, sop, script} }
let materialData = {};        // { [slug]: {title, role, tujuan, content, script} }
let sopQuestionsData = [];
let hospitalityQuestionsData = [];
let foodSafetyQuestionsData = [];
let cleaningQuestionsData = [];
let complaintQuestionsData = [];

let stepList = [];            // array baris asli dari tabel sop_steps (untuk render card & admin form)
let materialsByCategory = {   // dikelompokkan per tab untuk render card & admin form
    operational: [], hospitality: [], foodsafety: [], cleaning: [], complaint: []
};

function QUIZ_DATA_MAP() {
    return {
        sop: sopQuestionsData,
        hospitality: hospitalityQuestionsData,
        foodsafety: foodSafetyQuestionsData,
        cleaning: cleaningQuestionsData,
        complaint: complaintQuestionsData
    };
}

function setLoadingState(isLoading, errorMessage) {
    const overlay = document.getElementById('loadingOverlay');
    if (!overlay) return;
    if (errorMessage) {
        overlay.querySelector('.loading-text').textContent = errorMessage;
        overlay.querySelector('.loading-spinner').style.display = 'none';
        overlay.classList.add('is-error');
        overlay.classList.remove('hidden');
        return;
    }
    overlay.classList.toggle('hidden', !isLoading);
}

async function loadAllData() {
    setLoadingState(true);

    const [stepsRes, materialsRes, quizRes] = await Promise.all([
        sb.from('sop_steps').select('*').order('step_order', { ascending: true }),
        sb.from('materials').select('*').order('item_order', { ascending: true }),
        sb.from('quiz_questions').select('*').order('question_order', { ascending: true })
    ]);

    const firstError = stepsRes.error || materialsRes.error || quizRes.error;
    if (firstError) {
        console.error('Gagal memuat data dari Supabase:', firstError);
        setLoadingState(false, '⚠️ Gagal memuat data dari Supabase. Pastikan konfigurasi di js/supabase-config.js sudah benar, dan schema.sql + seed.sql sudah dijalankan. Detail error: ' + firstError.message);
        return;
    }

    // ---- STEPS (Tab 1) ----
    stepList = stepsRes.data;
    stepData = {};
    stepList.forEach(s => {
        stepData[s.id] = { title: s.title, role: s.role_label, sop: s.sop_html, script: s.script_html };
    });

    // ---- MATERIALS (Tab 2-6) ----
    materialsByCategory = { operational: [], hospitality: [], foodsafety: [], cleaning: [], complaint: [] };
    materialData = {};
    materialsRes.data.forEach(m => {
        materialData[m.id] = { title: m.title, role: m.role_label, tujuan: m.tujuan_html, content: m.content_html, script: m.script_html };
        if (materialsByCategory[m.category]) materialsByCategory[m.category].push(m);
    });

    // ---- QUIZ ----
    const grouped = { sop: [], hospitality: [], foodsafety: [], cleaning: [], complaint: [] };
    quizRes.data.forEach(q => { if (grouped[q.category]) grouped[q.category].push(q); });
    const mapRow = row => ({ id: row.id, q: row.question, options: row.options, answer: row.answer_index });
    sopQuestionsData = grouped.sop.map(mapRow);
    hospitalityQuestionsData = grouped.hospitality.map(mapRow);
    foodSafetyQuestionsData = grouped.foodsafety.map(mapRow);
    cleaningQuestionsData = grouped.cleaning.map(mapRow);
    complaintQuestionsData = grouped.complaint.map(mapRow);

    // ---- RENDER ULANG UI ----
    renderStepCards();
    renderAllMaterialCards();
    if (document.getElementById('quizPage') && document.getElementById('quizPage').classList.contains('active')) {
        renderAllQuizzes();
    }
    if (document.getElementById('quizManageModal') && document.getElementById('quizManageModal').classList.contains('active')) {
        renderQuizManageList();
    }

    setLoadingState(false);
}
