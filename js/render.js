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

const CATEGORY_CONTAINER_IDS = {
    operational: 'materialCardsContainer_operational',
    hospitality: 'materialCardsContainer_hospitality',
    foodsafety: 'materialCardsContainer_foodsafety',
    cleaning: 'materialCardsContainer_cleaning',
    complaint: 'materialCardsContainer_complaint'
};

function renderAllMaterialCards() {
    Object.keys(CATEGORY_CONTAINER_IDS).forEach(cat => renderMaterialCards(cat));
}

function renderMaterialCards(category) {
    const containerId = CATEGORY_CONTAINER_IDS[category];
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
