// =============================================================
// ADMIN PANEL: LOGIN, CRUD SOP STEP, CRUD MATERI, CRUD SOAL KUIS
// =============================================================

function escAttr(s) {
    return String(s == null ? '' : s).replace(/"/g, '&quot;');
}

// -------------------------------------------------------------
// RICH TEXT EDITOR (pengganti textarea HTML mentah)
// Dipakai untuk field SOP / Materi yang butuh formatting
// (bold, italic, list, dsb) tanpa mengharuskan admin menulis tag HTML.
// -------------------------------------------------------------
function richEditorHTML(fieldId, initialHtml, opts) {
    opts = opts || {};
    const placeholder = opts.placeholder || 'Tulis isi di sini...';
    const sizeClass = opts.small ? ' small' : '';
    const content = (initialHtml && initialHtml.trim()) ? initialHtml : '';
    return `
        <div class="rich-editor-wrap" data-field="${fieldId}">
            <div class="rich-editor-toolbar">
                <button type="button" data-cmd="bold" title="Tebal (Bold)"><b>B</b></button>
                <button type="button" data-cmd="italic" title="Miring (Italic)"><i>I</i></button>
                <button type="button" data-cmd="underline" title="Garis Bawah"><u>U</u></button>
                <span class="sep"></span>
                <button type="button" data-cmd="insertUnorderedList" title="Bullet List">• ≡</button>
                <button type="button" data-cmd="insertOrderedList" title="Numbered List">1. ≡</button>
                <span class="sep"></span>
                <button type="button" data-cmd="formatBlock" data-value="H4" title="Judul Kecil">H</button>
                <button type="button" data-cmd="formatBlock" data-value="P" title="Paragraf Biasa">¶</button>
                <span class="sep"></span>
                <button type="button" data-cmd="createLink" title="Sisipkan Link">🔗</button>
                <button type="button" data-cmd="removeFormat" title="Hapus Formatting">⨯</button>
            </div>
            <div class="rich-editor-area${sizeClass}" id="${fieldId}_area" contenteditable="true" data-placeholder="${escAttr(placeholder)}">${content}</div>
        </div>
    `;
}

function richEditorValue(fieldId) {
    const el = document.getElementById(fieldId + '_area');
    if (!el) return '';
    const html = el.innerHTML.trim();
    // Anggap kosong kalau isinya cuma <br> atau tag kosong dari contenteditable
    if (!html || html === '<br>' || html === '<p><br></p>') return '';
    return html;
}

// Event delegation: tombol toolbar rich editor ada di dalam #adminFormFields
// yang isinya dibangun ulang setiap kali form admin dibuka, jadi listener
// dipasang sekali saja di parent yang selalu ada di DOM.
document.addEventListener('DOMContentLoaded', function () {
    const fieldsHost = document.getElementById('adminFormFields');
    if (!fieldsHost) return;
    fieldsHost.addEventListener('mousedown', function (e) {
        // mousedown (bukan click) supaya selection di editor tidak hilang duluan
        const btn = e.target.closest('.rich-editor-toolbar button');
        if (!btn) return;
        e.preventDefault();
        const wrap = btn.closest('.rich-editor-wrap');
        const area = wrap.querySelector('.rich-editor-area');
        area.focus();
        const cmd = btn.dataset.cmd;
        if (cmd === 'createLink') {
            const url = prompt('Masukkan URL link:', 'https://');
            if (url) document.execCommand('createLink', false, url);
        } else if (cmd === 'formatBlock') {
            document.execCommand('formatBlock', false, btn.dataset.value);
        } else {
            document.execCommand(cmd, false, null);
        }
    });
});

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
        <label>Isi SOP Lengkap
            ${richEditorHTML('f_sop', isEdit ? s.sop_html : '', { placeholder: 'Tulis detail SOP di sini...' })}
        </label>
        <label>Script Komunikasi
            ${richEditorHTML('f_script', isEdit ? s.script_html : '', { placeholder: 'Tulis contoh script komunikasi di sini...' })}
        </label>
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
        sop_html: richEditorValue('f_sop'),
        script_html: richEditorValue('f_script')
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
                ${allCategories().map(c => `<option value="${c.id}" ${category === c.id ? 'selected' : ''}>${c.label}</option>`).join('')}
            </select>
        </label>
        <label>Urutan Tampil (angka)<input type="number" id="f_order" value="${isEdit ? m.item_order : nextOrder}"></label>
        <label>Judul<input type="text" id="f_title" value="${isEdit ? escAttr(m.title) : ''}"></label>
        <label>Role / Tag Label (tampil di card)<input type="text" id="f_role" value="${isEdit ? escAttr(m.role_label) : ''}"></label>
        <label>Ringkasan Singkat (tampil di card)<textarea id="f_summary" rows="2">${isEdit ? m.summary : ''}</textarea></label>
        <label>Tujuan
            ${richEditorHTML('f_tujuan', isEdit ? m.tujuan_html : '', { placeholder: 'Tulis tujuan materi di sini...', small: true })}
        </label>
        <label>Isi Materi Lengkap
            ${richEditorHTML('f_content', isEdit ? m.content_html : '', { placeholder: 'Tulis isi materi lengkap di sini...' })}
        </label>
        <label>Script / Contoh (opsional)
            ${richEditorHTML('f_script', isEdit && m.script_html ? m.script_html : '', { placeholder: 'Tulis contoh / script (opsional)...', small: true })}
        </label>
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
        tujuan_html: richEditorValue('f_tujuan'),
        content_html: richEditorValue('f_content'),
        script_html: richEditorValue('f_script') || null
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
// CRUD: TAB / KATEGORI TAMBAHAN (dibuat admin)
// -------------------------------------------------------------
function slugifyCategoryId(text) {
    return String(text || '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '')
        .slice(0, 40);
}

function openCategoryForm() {
    document.getElementById('adminFormTitle').textContent = '➕ Tambah Tab Baru';
    document.getElementById('adminFormFields').innerHTML = `
        <label>Nama Tab (contoh: "Training Barista")
            <input type="text" id="f_cat_label" placeholder="Nama yang tampil pada tab">
        </label>
        <p style="font-size:12px; color:#6b7a8d; margin-top:-6px;">ID unik akan dibuat otomatis dari nama tab. Tab baru akan muncul di sebelah kiri tombol "➕ Tambah Tab".</p>
    `;
    document.getElementById('adminFormSaveBtn').onclick = saveCategory;
    openAdminForm();
}

async function saveCategory() {
    const label = document.getElementById('f_cat_label').value.trim();
    if (!label) { alert('Nama tab wajib diisi.'); return; }
    let id = slugifyCategoryId(label);
    if (!id) { alert('Nama tab tidak valid, gunakan huruf/angka.'); return; }

    const existingIds = BUILTIN_CATEGORIES.map(c => c.id).concat(customCategories.map(c => c.id));
    if (existingIds.includes(id)) {
        id = id + '_' + Date.now().toString(36).slice(-4);
    }

    const payload = {
        id: id,
        label: label,
        item_order: customCategories.length + 1
    };
    const { error } = await sb.from('custom_categories').insert(payload);
    if (error) {
        alert('Gagal membuat tab baru: ' + error.message + '\n\nPastikan tabel "custom_categories" sudah dibuat di Supabase (lihat file migrasi yang disertakan).');
        return;
    }
    closeAdminForm();
    await loadAllData();
}

async function deleteCategory(categoryId) {
    if (!confirm('Yakin hapus tab ini beserta seluruh materi di dalamnya? Tindakan tidak bisa dibatalkan.')) return;
    // Hapus dulu semua materi di kategori ini, baru hapus kategorinya.
    const { error: matError } = await sb.from('materials').delete().eq('category', categoryId);
    if (matError) { alert('Gagal menghapus materi pada tab ini: ' + matError.message); return; }
    const { error } = await sb.from('custom_categories').delete().eq('id', categoryId);
    if (error) { alert('Gagal menghapus tab: ' + error.message); return; }
    await loadAllData();
}

// -------------------------------------------------------------
// AKSI EDIT/HAPUS SOAL LANGSUNG DARI HALAMAN KUIS (bukan dari
// modal "Kelola Soal Kuis") — dipakai oleh icon di tiap soal.
// -------------------------------------------------------------
function editQuizQuestionFromQuiz(category, questionId) {
    quizManageCategory = category;
    openQuestionForm(questionId);
}

async function deleteQuizQuestionFromQuiz(category, questionId) {
    quizManageCategory = category;
    await deleteQuestion(questionId);
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
    `).join('') + `<button class="btn-admin-add admin-only" onclick="openQuestionForm(null)">+ Tambah Soal Baru</button>`;
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
