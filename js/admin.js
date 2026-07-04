// =============================================================
// ADMIN PANEL: LOGIN, CRUD SOP STEP, CRUD MATERI, CRUD SOAL KUIS
// =============================================================

function escAttr(s) {
    return String(s == null ? '' : s).replace(/"/g, '&quot;');
}

// -------------------------------------------------------------
// AUTH UI
// -------------------------------------------------------------
function updateAuthUI() {
    document.body.classList.toggle('is-admin', isAdminUser);
    const btn = document.getElementById('authButton');
    if (!btn) return;
    if (currentUser && isAdminUser) {
        btn.textContent = '🔓 Logout (' + currentUser.email + ')';
        btn.onclick = handleLogoutClick;
    } else {
        btn.textContent = '🔐 Login Admin';
        btn.onclick = openLoginModal;
    }
}

function openLoginModal() {
    document.getElementById('loginError').textContent = '';
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeLoginModal() {
    document.getElementById('loginModal').classList.remove('active');
    document.body.style.overflow = '';
}
function closeLoginModalOutside(e) {
    if (e.target === document.getElementById('loginModal')) closeLoginModal();
}

async function handleLoginSubmit() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errEl = document.getElementById('loginError');
    errEl.textContent = '';
    if (!email || !password) { errEl.textContent = 'Isi email dan password terlebih dahulu.'; return; }

    const btn = document.getElementById('loginSubmitBtn');
    btn.disabled = true; btn.textContent = 'Memproses...';
    const result = await loginAdmin(email, password);
    btn.disabled = false; btn.textContent = 'Login';

    if (!result.ok) { errEl.textContent = result.message; return; }
    closeLoginModal();
}

async function handleLogoutClick() {
    await logoutAdmin();
}

// -------------------------------------------------------------
// GENERIC ADMIN FORM MODAL (dipakai untuk Step, Materi, Soal)
// -------------------------------------------------------------
function openAdminForm() {
    document.getElementById('adminFormModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeAdminForm() {
    document.getElementById('adminFormModal').classList.remove('active');
    document.body.style.overflow = '';
}
function closeAdminFormOutside(e) {
    if (e.target === document.getElementById('adminFormModal')) closeAdminForm();
}

// -------------------------------------------------------------
// CRUD: SOP STEPS (Tab 1)
// -------------------------------------------------------------
const STEP_GROUPS = ['cashier', 'customer', 'production', 'server'];

function openStepForm(stepId) {
    const isEdit = stepId !== null && stepId !== undefined;
    const s = isEdit ? stepList.find(x => x.id === stepId) : null;
    const nextId = stepList.length ? Math.max(...stepList.map(x => x.id)) + 1 : 1;

    document.getElementById('adminFormTitle').textContent = isEdit ? 'Edit SOP Step' : 'Tambah SOP Step Baru';
    document.getElementById('adminFormFields').innerHTML = `
        <label>Nomor Urut (id unik)
            <input type="number" id="f_id" value="${isEdit ? s.id : nextId}" ${isEdit ? 'readonly' : ''}>
        </label>
        <label>Grup Warna / Jobdesk
            <select id="f_group">
                ${STEP_GROUPS.map(g => `<option value="${g}" ${isEdit && s.group_tag === g ? 'selected' : ''}>${g}</option>`).join('')}
            </select>
        </label>
        <label>Judul<input type="text" id="f_title" value="${isEdit ? escAttr(s.title) : ''}"></label>
        <label>Role Label (badge di card & modal)<input type="text" id="f_role" value="${isEdit ? escAttr(s.role_label) : '👤 '}"></label>
        <label>Ringkasan Singkat (tampil di card)<textarea id="f_summary" rows="2">${isEdit ? s.summary : ''}</textarea></label>
        <label>Isi SOP Lengkap (boleh tag HTML, mis. &lt;strong&gt;)<textarea id="f_sop" rows="6">${isEdit ? s.sop_html : ''}</textarea></label>
        <label>Script Komunikasi (boleh tag HTML)<textarea id="f_script" rows="6">${isEdit ? s.script_html : ''}</textarea></label>
    `;
    document.getElementById('adminFormSaveBtn').onclick = () => saveStep(isEdit, isEdit ? s.id : null);
    openAdminForm();
}

async function saveStep(isEdit, existingId) {
    const payload = {
        id: parseInt(document.getElementById('f_id').value, 10),
        step_order: parseInt(document.getElementById('f_id').value, 10),
        group_tag: document.getElementById('f_group').value,
        title: document.getElementById('f_title').value.trim(),
        role_label: document.getElementById('f_role').value.trim(),
        summary: document.getElementById('f_summary').value.trim(),
        sop_html: document.getElementById('f_sop').value,
        script_html: document.getElementById('f_script').value
    };
    if (!payload.title) { alert('Judul wajib diisi.'); return; }

    let error;
    if (isEdit) {
        ({ error } = await sb.from('sop_steps').update(payload).eq('id', existingId));
    } else {
        ({ error } = await sb.from('sop_steps').insert(payload));
    }
    if (error) { alert('Gagal menyimpan: ' + error.message); return; }

    closeAdminForm();
    closeModal();
    await loadAllData();
}

async function deleteStep(stepId) {
    if (!confirm('Yakin hapus SOP step ini? Tindakan tidak bisa dibatalkan.')) return;
    const { error } = await sb.from('sop_steps').delete().eq('id', stepId);
    if (error) { alert('Gagal menghapus: ' + error.message); return; }
    closeModal();
    await loadAllData();
}

// -------------------------------------------------------------
// CRUD: MATERIALS (Tab 2-6)
// -------------------------------------------------------------
let currentAdminCategory = 'operational';

function addMaterialInCategory(category) {
    currentAdminCategory = category;
    openMaterialForm(null);
}

function openMaterialForm(materialId) {
    const isEdit = materialId !== null && materialId !== undefined;
    let m = null, category = currentAdminCategory;
    if (isEdit) {
        for (const cat of Object.keys(materialsByCategory)) {
            const found = materialsByCategory[cat].find(x => x.id === materialId);
            if (found) { m = found; category = cat; break; }
        }
    }
    const nextOrder = (materialsByCategory[category] || []).length + 1;

    document.getElementById('adminFormTitle').textContent = isEdit ? 'Edit Materi' : 'Tambah Materi Baru';
    document.getElementById('adminFormFields').innerHTML = `
        <label>ID unik (slug huruf kecil & underscore, mis. hospitality_baru)
            <input type="text" id="f_id" value="${isEdit ? m.id : ''}" ${isEdit ? 'readonly' : ''} placeholder="contoh: hospitality_baru">
        </label>
        <label>Kategori / Tab
            <select id="f_category">
                ${Object.keys(CATEGORY_CONTAINER_IDS).map(c => `<option value="${c}" ${category === c ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
        </label>
        <label>Urutan Tampil (angka)<input type="number" id="f_order" value="${isEdit ? m.item_order : nextOrder}"></label>
        <label>Judul<input type="text" id="f_title" value="${isEdit ? escAttr(m.title) : ''}"></label>
        <label>Role / Tag Label (tampil di card)<input type="text" id="f_role" value="${isEdit ? escAttr(m.role_label) : ''}"></label>
        <label>Ringkasan Singkat (tampil di card)<textarea id="f_summary" rows="2">${isEdit ? m.summary : ''}</textarea></label>
        <label>Tujuan (boleh tag HTML)<textarea id="f_tujuan" rows="3">${isEdit ? m.tujuan_html : ''}</textarea></label>
        <label>Isi Materi Lengkap (boleh tag HTML)<textarea id="f_content" rows="6">${isEdit ? m.content_html : ''}</textarea></label>
        <label>Script / Contoh (boleh tag HTML, opsional)<textarea id="f_script" rows="4">${isEdit && m.script_html ? m.script_html : ''}</textarea></label>
    `;
    document.getElementById('adminFormSaveBtn').onclick = () => saveMaterial(isEdit, isEdit ? m.id : null);
    openAdminForm();
}

async function saveMaterial(isEdit, existingId) {
    const payload = {
        id: document.getElementById('f_id').value.trim(),
        category: document.getElementById('f_category').value,
        item_order: parseInt(document.getElementById('f_order').value, 10) || 1,
        title: document.getElementById('f_title').value.trim(),
        role_label: document.getElementById('f_role').value.trim(),
        summary: document.getElementById('f_summary').value.trim(),
        tujuan_html: document.getElementById('f_tujuan').value,
        content_html: document.getElementById('f_content').value,
        script_html: document.getElementById('f_script').value || null
    };
    if (!payload.id || !payload.title) { alert('ID dan Judul wajib diisi.'); return; }

    let error;
    if (isEdit) {
        ({ error } = await sb.from('materials').update(payload).eq('id', existingId));
    } else {
        ({ error } = await sb.from('materials').insert(payload));
    }
    if (error) { alert('Gagal menyimpan: ' + error.message); return; }

    closeAdminForm();
    closeMaterialModal();
    await loadAllData();
}

async function deleteMaterial(materialId) {
    if (!confirm('Yakin hapus materi ini? Tindakan tidak bisa dibatalkan.')) return;
    const { error } = await sb.from('materials').delete().eq('id', materialId);
    if (error) { alert('Gagal menghapus: ' + error.message); return; }
    closeMaterialModal();
    await loadAllData();
}

// -------------------------------------------------------------
// CRUD: SOAL KUIS
// -------------------------------------------------------------
let quizManageCategory = 'sop';
const QUIZ_CATEGORY_LABELS = {
    sop: 'Kuis 1 — SOP',
    hospitality: 'Kuis 2 — Hospitality',
    foodsafety: 'Kuis 3 — Food Safety',
    cleaning: 'Kuis 4 — Cleaning',
    complaint: 'Kuis 5 — Komplain'
};

function openQuizManage() {
    document.getElementById('quizManageModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    renderQuizManageList();
}
function closeQuizManage() {
    document.getElementById('quizManageModal').classList.remove('active');
    document.body.style.overflow = '';
}
function closeQuizManageOutside(e) {
    if (e.target === document.getElementById('quizManageModal')) closeQuizManage();
}
function switchQuizManageCategory(cat) {
    quizManageCategory = cat;
    renderQuizManageList();
}

function renderQuizManageList() {
    const tabsEl = document.getElementById('quizManageTabs');
    if (tabsEl && !tabsEl.dataset.built) {
        tabsEl.innerHTML = Object.keys(QUIZ_CATEGORY_LABELS).map(cat =>
            `<button data-cat="${cat}" onclick="switchQuizManageCategory('${cat}')">${QUIZ_CATEGORY_LABELS[cat]}</button>`
        ).join('');
        tabsEl.dataset.built = '1';
    }
    document.querySelectorAll('#quizManageTabs button').forEach(b => {
        b.classList.toggle('active-tab', b.dataset.cat === quizManageCategory);
    });

    const list = QUIZ_DATA_MAP()[quizManageCategory] || [];
    const container = document.getElementById('quizManageList');
    container.innerHTML = list.map((q, idx) => `
        <div class="quiz-manage-item">
            <div class="quiz-manage-q"><strong>${idx + 1}.</strong> ${q.q}</div>
            <div class="quiz-manage-actions">
                <button title="Edit" onclick="openQuestionForm('${q.id}')">✏️</button>
                <button title="Hapus" onclick="deleteQuestion('${q.id}')">🗑️</button>
            </div>
        </div>
    `).join('') + `<button class="btn-admin-add" onclick="openQuestionForm(null)">+ Tambah Soal Baru</button>`;
}

function openQuestionForm(questionId) {
    const isEdit = questionId !== null && questionId !== undefined;
    const list = QUIZ_DATA_MAP()[quizManageCategory] || [];
    const q = isEdit ? list.find(x => x.id === questionId) : null;
    const opts = isEdit ? q.options : ['', '', '', ''];

    document.getElementById('adminFormTitle').textContent = isEdit ? 'Edit Soal Kuis' : 'Tambah Soal Kuis Baru';
    document.getElementById('adminFormFields').innerHTML = `
        <label>Pertanyaan<textarea id="f_question" rows="2">${isEdit ? q.q : ''}</textarea></label>
        ${opts.map((o, i) => `<label>Opsi ${i + 1}<input type="text" id="f_opt${i}" value="${escAttr(o)}"></label>`).join('')}
        <label>Jawaban Benar
            <select id="f_answer">
                ${opts.map((o, i) => `<option value="${i}" ${isEdit && q.answer === i ? 'selected' : ''}>Opsi ${i + 1}</option>`).join('')}
            </select>
        </label>
    `;
    document.getElementById('adminFormSaveBtn').onclick = () => saveQuestion(isEdit, isEdit ? q.id : null);
    openAdminForm();
}

async function saveQuestion(isEdit, existingId) {
    const options = [0, 1, 2, 3].map(i => document.getElementById('f_opt' + i).value.trim());
    const question = document.getElementById('f_question').value.trim();
    const answerIndex = parseInt(document.getElementById('f_answer').value, 10);

    if (!question || options.some(o => !o)) { alert('Lengkapi pertanyaan dan keempat opsi jawaban.'); return; }

    const payload = {
        category: quizManageCategory,
        question: question,
        options: options,
        answer_index: answerIndex
    };
    if (!isEdit) {
        payload.question_order = (QUIZ_DATA_MAP()[quizManageCategory] || []).length + 1;
    }

    let error;
    if (isEdit) {
        ({ error } = await sb.from('quiz_questions').update(payload).eq('id', existingId));
    } else {
        ({ error } = await sb.from('quiz_questions').insert(payload));
    }
    if (error) { alert('Gagal menyimpan: ' + error.message); return; }

    closeAdminForm();
    await loadAllData();
    renderQuizManageList();
}

async function deleteQuestion(questionId) {
    if (!confirm('Yakin hapus soal ini? Tindakan tidak bisa dibatalkan.')) return;
    const { error } = await sb.from('quiz_questions').delete().eq('id', questionId);
    if (error) { alert('Gagal menghapus: ' + error.message); return; }
    await loadAllData();
    renderQuizManageList();
}

// -------------------------------------------------------------
// LIHAT HASIL KUIS PESERTA (khusus admin)
// -------------------------------------------------------------
async function openQuizResults() {
    document.getElementById('quizResultsModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    const container = document.getElementById('quizResultsList');
    container.innerHTML = '<p class="empty-state">Memuat...</p>';

    const { data, error } = await sb
        .from('quiz_results')
        .select('*')
        .order('submitted_at', { ascending: false })
        .limit(100);

    if (error) {
        container.innerHTML = `<p class="empty-state">Gagal memuat hasil: ${error.message}</p>`;
        return;
    }
    if (!data || data.length === 0) {
        container.innerHTML = '<p class="empty-state">Belum ada hasil kuis yang masuk.</p>';
        return;
    }
    container.innerHTML = `
        <table class="quiz-results-table">
            <thead><tr><th>Nama</th><th>Role</th><th>Kategori</th><th>Skor</th><th>Waktu</th></tr></thead>
            <tbody>
                ${data.map(r => `
                    <tr>
                        <td>${r.participant}</td>
                        <td>${r.job_role}</td>
                        <td>${r.category}</td>
                        <td>${r.score} / ${r.total}</td>
                        <td>${new Date(r.submitted_at).toLocaleString('id-ID')}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}
function closeQuizResults() {
    document.getElementById('quizResultsModal').classList.remove('active');
    document.body.style.overflow = '';
}
function closeQuizResultsOutside(e) {
    if (e.target === document.getElementById('quizResultsModal')) closeQuizResults();
}
