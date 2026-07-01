// =============================================
// MODAL SOP (Tab 1)
// =============================================
async function openModal(step) {
    if (typeof getAppData !== 'function') {
        console.error('getAppData tidak tersedia.');
        return;
    }
    try {
        const data = await getAppData();
        const stepInfo = data.steps[step];
        if (!stepInfo) return;

        document.getElementById('modalStepNum').textContent = 'STEP ' + String(step).padStart(2, '0');
        document.getElementById('modalTitle').textContent = stepInfo.title;
        document.getElementById('modalRole').textContent = stepInfo.role;
        document.getElementById('modalSopContent').innerHTML = stepInfo.sop;
        document.getElementById('modalScriptContent').innerHTML = stepInfo.script;

        const modalOverlay = document.getElementById('modalOverlay');
        if (modalOverlay) {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    } catch (error) {
        console.error('Gagal membuka modal SOP:', error);
    }
}

function closeModal() {
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalOverlay) modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function closeModalOutside(e) {
    const modalOverlay = document.getElementById('modalOverlay');
    if (e.target === modalOverlay) closeModal();
}

// =============================================
// MODAL MATERI (Tab 2-5)
// =============================================
async function openMaterialModal(id) {
    if (typeof getAppData !== 'function') {
        console.error('getAppData tidak tersedia.');
        return;
    }
    try {
        const data = await getAppData();
        const material = data.materials[id];
        if (!material) return;

        document.getElementById('materialStepNum').textContent = 'MATERI';
        document.getElementById('materialTitle').textContent = material.title;
        document.getElementById('materialRole').textContent = material.role;
        document.getElementById('materialTujuan').innerHTML = `<p>${material.tujuan}</p>`;
        document.getElementById('materialContent').innerHTML = material.content;

        const scriptSection = document.getElementById('materialScriptSection');
        const scriptDivider = document.getElementById('materialScriptDivider');
        const scriptContent = document.getElementById('materialScriptContent');
        if (material.script) {
            scriptContent.innerHTML = material.script;
            scriptSection.style.display = 'block';
            scriptDivider.style.display = 'block';
        } else {
            scriptSection.style.display = 'none';
            scriptDivider.style.display = 'none';
        }

        const materialModal = document.getElementById('materialModal');
        if (materialModal) {
            materialModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    } catch (error) {
        console.error('Gagal membuka modal materi:', error);
    }
}

function closeMaterialModal() {
    const materialModal = document.getElementById('materialModal');
    if (materialModal) materialModal.classList.remove('active');
    document.body.style.overflow = '';
}

function closeMaterialModalOutside(e) {
    const materialModal = document.getElementById('materialModal');
    if (e.target === materialModal) closeMaterialModal();
}
