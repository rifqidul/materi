// =============================================================
// SUPABASE CLIENT & AUTH STATE
// =============================================================
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

let currentUser = null;   // objek user Supabase Auth jika sedang login
let isAdminUser = false;  // true hanya jika email user ada di tabel app_admins

// Dipanggil saat load pertama & setiap ada perubahan status login
async function refreshAuthState() {
    const { data: { session } } = await sb.auth.getSession();
    currentUser = session ? session.user : null;

    if (currentUser) {
        const { data, error } = await sb.rpc('is_admin');
        isAdminUser = !error && data === true;
    } else {
        isAdminUser = false;
    }
    if (typeof updateAuthUI === 'function') updateAuthUI();
}

// Login sebagai admin. Mengembalikan { ok: boolean, message?: string }
async function loginAdmin(email, password) {
    const { error: signInError } = await sb.auth.signInWithPassword({ email, password });
    if (signInError) {
        return { ok: false, message: 'Login gagal: ' + signInError.message };
    }
    await refreshAuthState();
    if (!isAdminUser) {
        await sb.auth.signOut();
        currentUser = null;
        return { ok: false, message: 'Akun ini valid, tapi belum terdaftar sebagai admin. Hubungi pemilik sistem.' };
    }
    return { ok: true };
}

async function logoutAdmin() {
    await sb.auth.signOut();
    currentUser = null;
    isAdminUser = false;
    if (typeof updateAuthUI === 'function') updateAuthUI();
}

sb.auth.onAuthStateChange(() => { refreshAuthState(); });
