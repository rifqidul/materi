-- =============================================================
-- MIGRASI: Tabel custom_categories (fitur "➕ Tambah Tab")
-- -------------------------------------------------------------
-- Jalankan script ini di Supabase Dashboard > SQL Editor pada
-- project yang sama dengan yang dipakai app ini (schema.sql yang
-- sudah ada sebelumnya untuk sop_steps, materials, quiz_questions,
-- quiz_results, dan fungsi is_admin() TIDAK perlu diubah).
--
-- Setelah migrasi ini dijalankan, admin yang login bisa menekan
-- tombol "➕ Tambah Tab" di halaman utama untuk membuat tab/kategori
-- materi baru tanpa perlu mengubah kode.
-- =============================================================

create table if not exists public.custom_categories (
    id text primary key,
    label text not null,
    item_order integer not null default 1,
    created_at timestamptz not null default now()
);

alter table public.custom_categories enable row level security;

-- Semua orang (termasuk pengunjung yang belum login) boleh membaca
-- daftar tab custom, supaya tab & materinya tetap tampil di halaman publik.
drop policy if exists "custom_categories_select_public" on public.custom_categories;
create policy "custom_categories_select_public"
    on public.custom_categories
    for select
    using (true);

-- Hanya admin (sesuai fungsi is_admin() yang sudah ada) yang boleh
-- menambah, mengubah, atau menghapus tab.
drop policy if exists "custom_categories_insert_admin" on public.custom_categories;
create policy "custom_categories_insert_admin"
    on public.custom_categories
    for insert
    with check (is_admin());

drop policy if exists "custom_categories_update_admin" on public.custom_categories;
create policy "custom_categories_update_admin"
    on public.custom_categories
    for update
    using (is_admin())
    with check (is_admin());

drop policy if exists "custom_categories_delete_admin" on public.custom_categories;
create policy "custom_categories_delete_admin"
    on public.custom_categories
    for delete
    using (is_admin());

-- Catatan: kolom "category" pada tabel "materials" sudah bertipe text
-- bebas (bukan enum), jadi materi dengan category = id tab custom akan
-- otomatis tersimpan & terbaca tanpa perlu perubahan skema tambahan.
