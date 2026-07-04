// =============================================================
// KONFIGURASI SUPABASE
// -------------------------------------------------------------
// Ganti 2 nilai di bawah dengan milik project Supabase Anda.
// Lokasi: Supabase Dashboard > Project Settings > API
//   - "Project URL"      -> SUPABASE_URL
//   - "anon public" key  -> SUPABASE_ANON_KEY
//
// CATATAN KEAMANAN: anon key ini AMAN untuk ditaruh di kode
// frontend (memang didesain untuk itu). Yang menjaga keamanan
// data adalah Row Level Security (RLS) yang sudah diatur lewat
// file supabase/schema.sql — BUKAN kerahasiaan key ini.
// Jangan pernah menaruh "service_role key" di sini.
// =============================================================
const SUPABASE_URL = 'https://dtcwlszoldlixfnjxggt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR0Y3dsc3pvbGRsaXhmbmp4Z2d0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMDM3NTIsImV4cCI6MjA5ODY3OTc1Mn0.xY-ovmmEn8m7sw6h8zjWQFi2WIgEHSnAT-rF8SvOAyg';
