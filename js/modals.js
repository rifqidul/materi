    // =============================================
    // FUNGSI MODAL SOP & MATERIAL
    // =============================================
    function openModal(step) {
        const data = stepData[step];
        if (!data) return;
        document.getElementById('modalStepNum').textContent = 'STEP ' + String(step).padStart(2, '0');
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalRole').textContent = data.role;
        document.getElementById('modalSopContent').innerHTML = data.sop;
        document.getElementById('modalScriptContent').innerHTML = data.script;
        document.getElementById('modalOverlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeModal() { document.getElementById('modalOverlay').classList.remove('active'); document.body.style.overflow = ''; }
    function closeModalOutside(e) { if (e.target === document.getElementById('modalOverlay')) closeModal(); }

    function openMaterialModal(id) {
        const data = materialData[id];
        if (!data) return;
        document.getElementById('materialStepNum').textContent = 'MATERI';
        document.getElementById('materialTitle').textContent = data.title;
        document.getElementById('materialRole').textContent = data.role;
        document.getElementById('materialTujuan').innerHTML = `<p>${data.tujuan}</p>`;
        document.getElementById('materialContent').innerHTML = data.content;
        if (data.script) {
            document.getElementById('materialScriptContent').innerHTML = data.script;
            document.getElementById('materialScriptSection').style.display = 'block';
            document.getElementById('materialScriptDivider').style.display = 'block';
        } else {
            document.getElementById('materialScriptSection').style.display = 'none';
            document.getElementById('materialScriptDivider').style.display = 'none';
        }
        document.getElementById('materialModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeMaterialModal() { document.getElementById('materialModal').classList.remove('active'); document.body.style.overflow = ''; }
    function closeMaterialModalOutside(e) { if (e.target === document.getElementById('materialModal')) closeMaterialModal(); }
