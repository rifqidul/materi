// =============================================================
// RENDER CARD SECARA DINAMIS (dari data yang dimuat via Supabase)
// =============================================================

function renderStepCards() {
    const container = document.getElementById('stepCardsContainer');
    if (!container) return;
    container.innerHTML = stepList.map(s => `
        <div class="step-card group-${s.group_tag}" onclick="openModal(${s.id})">
            <div class="step-number">${String(s.step_order).padStart(2, '0')}</div>
            <div class="step-content">
                <div class="title-step">${s.title}</div>
                <div class="desc-step">${s.summary}</div>
                <span class="role-tag role-tag-single">${s.role_label}</span>
            </div>
        </div>
    `).join('');
}

// -------------------------------------------------------------
// KATEGORI / TAB — bawaan (built-in) + custom buatan admin
// -------------------------------------------------------------
const BUILTIN_CATEGORIES = [
    { id: 'operational', label: 'SOP Operational', tabId: 'tabOperational' },
    { id: 'hospitality', label: 'Hospitality', tabId: 'tabHospitality' },
    { id: 'foodsafety', label: 'Food Safety', tabId: 'tabFoodSafety' },
    { id: 'cleaning', label: 'Cleaning', tabId: 'tabCleaning' },
    { id: 'complaint', label: 'Komplain', tabId: 'tabComplaint' }
];

// Diisi dari tabel Supabase "custom_categories" oleh loadAllData() di data.js.
// Format tiap item: { id, label, item_order }
let customCategories = [];

function allCategories() {
    return BUILTIN_CATEGORIES.concat(
        customCategories.map(c => ({ id: c.id, label: c.label, tabId: 'tabCustom_' + c.id, isCustom: true }))
    );
}

function categoryContainerId(categoryId) {
    return 'materialCardsContainer_' + categoryId;
}

// Dipertahankan namanya (dipakai admin.js untuk dropdown kategori form materi)
function getCategoryContainerIds() {
    const map = {};
    allCategories().forEach(c => { map[c.id] = categoryContainerId(c.id); });
    return map;
}
// Kompatibilitas mundur: beberapa kode lama memakai CATEGORY_CONTAINER_IDS
// sebagai object statis. Sekarang dibuat sebagai getter supaya selalu up to date.
Object.defineProperty(window, 'CATEGORY_CONTAINER_IDS', { get: getCategoryContainerIds });

// -------------------------------------------------------------
// Render tombol tab tambahan (custom) + kontainer kontennya
// -------------------------------------------------------------
function renderCustomTabsUI() {
    const tabsHost = document.getElementById('mainTabsContainer');
    const addBtn = document.getElementById('addTabBtn');
    const contentHost = document.getElementById('customTabContentsHost');
    if (!tabsHost || !contentHost || !addBtn) return;

    // Bersihkan tombol tab custom & konten lama sebelum render ulang
    tabsHost.querySelectorAll('.main-tab-btn.custom-tab-btn').forEach(el => el.remove());
    contentHost.innerHTML = '';

    customCategories.forEach(cat => {
        const tabId = 'tabCustom_' + cat.id;
        const btn = document.createElement('button');
        btn.className = 'main-tab-btn custom-tab-btn';
        btn.dataset.tab = tabId;
        btn.textContent = cat.label;
        btn.onclick = () => switchMainTab(tabId);
        tabsHost.insertBefore(btn, addBtn);

        const contentDiv = document.createElement('div');
        contentDiv.className = 'main-tab-content';
        contentDiv.id = tabId;
        contentDiv.innerHTML = `
            <div class="section-title">${cat.label}</div>
            <div class="section-desc">Materi pada kategori ini. Klik pada card untuk melihat materi lengkap.</div>
            <div class="admin-only custom-tab-actions">
                <button class="btn-admin-add" onclick="addMaterialInCategory('${cat.id}')">+ Tambah Materi Baru</button>
                <button class="btn-admin-add" onclick="editCustomCategory('${cat.id}', '${escAttr(cat.label)}')">✏️ Edit Tab</button>
                <button class="btn-admin-add btn-admin-add-danger" onclick="deleteCategory('${cat.id}')">🗑️ Hapus Tab Ini</button>
            </div>
            <div id="${categoryContainerId(cat.id)}"></div>
        `;
        contentHost.appendChild(contentDiv);
    });

    updateAuthUI(); // pastikan tombol admin-only yang baru dibuat mengikuti status login saat ini
}

function renderAllMaterialCards() {
    allCategories().forEach(c => renderMaterialCards(c.id));
}

function renderMaterialCards(category) {
    const containerId = categoryContainerId(category);
    const container = document.getElementById(containerId);
    if (!container) return;
    const items = materialsByCategory[category] || [];
    if (items.length === 0) {
        container.innerHTML = '<p class="empty-state">Belum ada materi di kategori ini.</p>';
        return;
    }
    container.innerHTML = items.map((m, idx) => `
        <div class="material-card group-${category}" onclick="openMaterialModal('${m.id}')">
            <div class="material-number">${String(idx + 1).padStart(2, '0')}</div>
            <div class="material-content-summary">
                <div class="title-material">${m.title}</div>
                <div class="desc-material">${m.summary}</div>
                <span class="material-tag">${m.role_label}</span>
            </div>
        </div>
    `).join('');
}
