// =============================================
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8-zHCEwB1nNoJRfajQ6cQe05DesGGP5I",
  authDomain: "nara-training-68474.firebaseapp.com",
  projectId: "nara-training-68474",
  storageBucket: "nara-training-68474.firebasestorage.app",
  messagingSenderId: "1084927024233",
  appId: "1:1084927024233:web:607ac21ea0fba3868856f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// =============================================
// DATA DEFAULT (jika cloud kosong atau error)
// =============================================
const defaultSteps = {
        1: { title: 'Greeting & Sambutan', role: '👤 Kasir · Barista · Server', 
            sop: `<p><strong>Tujuan :</strong> Memberikan kesan pertama yang hangat dan profesional.</p><ul><li>Sapa segera setelah pelanggan membuka pintu.</li><li>Gunakan senyum dan kontak mata.</li><li>Tawarkan rekomendasi menu signature Nara.</li></ul>`, 
            script: `<div class="script-box"><p><span class="speaker">Kasir/Server/Barista :</span> "Selamat datang di Nara, Bapak/Ibu! Kami ada Mont Blanc dengan foam orange zest yang sedang populer. Mau saya bantu pilihkan menu?"</p></div>` },
        2: { title: 'Edukasi Menu', role: '👤 Kasir', 
            sop: `<p><strong>Tujuan :</strong> Membantu pelanggan memahami pilihan menu.</p><ul><li>Jelaskan Mont Blanc (foam orange zest), Butterscotch (seasalt + caramel crumble), Ramen (kuah/dry + topping Chasu/Beef/Katsu), Bolen, Roti Bakar.</li><li>Jelaskan tingkat manis dan pilihan blend.</li></ul>`, 
            script: `<div class="script-box"><p><span class="speaker">Kasir :</span> "Mont Blanc ini kopi dengan foam yang lembut dan ada taburan orange zest. Untuk Ramen, kami ada yang berkuah dan dry, toppingnya bisa Chasu, Beef, atau Katsu."</p></div>` },
        3: { title: 'Upselling', role: '👤 Kasir', 
            sop: `<p><strong>Tujuan :</strong> Meningkatkan nilai transaksi.</p><ul><li>Tawarkan extra shot atau upgrade blend (Full Arabica / Single Origin) dengan biaya tambahan.</li><li>Rekomendasikan Bolen atau Roti Bakar.</li></ul>`, 
            script: `<div class="script-box"><p><span class="speaker">Kasir :</span> "Untuk Mont Blanc-nya, Bapak/Ibu bisa tambahkan extra shot atau pilih single origin untuk rasa yang lebih kompleks. Ada biaya tambahan Rp X untuk extra shot."</p></div>` },
        4: { title: 'Konfirmasi Pemesanan', role: '👤 Kasir', 
            sop: `<p><strong>Tujuan :</strong> Menghindari kesalahan.</p><ul><li>Ulangi readback semua pesanan.</li><li>Konfirmasi varian, tingkat manis, blend, topping.</li></ul>`, 
            script: `<div class="script-box"><p><span class="speaker">Kasir :</span> "Baik, saya ulangi: satu Mont Blanc, tingkat manis regular, extra shot, dan satu Ramen kuah dengan topping Chasu. Apakah sudah benar, Bapak/Ibu?"</p></div>` },
        5: { title: 'Pembayaran di Awal', role: '👤 Kasir', 
            sop: `<p><strong>Tujuan :</strong> Memproses transaksi dengan akurat.</p><ul><li>Terima pembayaran Cash/QRIS/EDC.</li><li>Cetak struk dan siapkan nomor meja.</li></ul>`, 
            script: `<div class="script-box"><p><span class="speaker">Kasir :</span> "Totalnya Rp 85.000, Bapak/Ibu. Ini struk dan nomor mejanya #07. Nanti pesanan akan kami antar ke meja."</p></div>` },
        6: { title: 'Penyerahan Bill & Nomor Meja', role: '👤 Kasir', 
            sop: `<p><strong>Tujuan :</strong> Memberikan instruksi yang jelas.</p><ul><li>Berikan struk dan nomor meja.</li><li>Informasikan pesanan akan diantar ke meja atau dibungkus di kasir (take away).</li></ul>`, 
            script: `<div class="script-box"><p><span class="speaker">Kasir :</span> "Silakan duduk di mana saja, nanti pesanan akan kami antar langsung. Selamat menikmati di Nara!"</p></div>` },
        7: { title: 'Pelanggan Duduk & Display Nomor Meja', role: '👤 Customer Journey', 
            sop: `<ul><li>Pelanggan memilih meja (Indoor/Outdoor/Komunal).</li><li>Menaruh nomor meja di tempat mudah terlihat.</li></ul>`, 
            script: `<div class="script-box"><p><em>Jika pelanggan bingung, server membantu :</em><br><span class="speaker">Server :</span> "Silakan duduk di sini, nomor mejanya bisa ditaruh di sisi meja ini."</p></div>` },
        8: { title: 'Produksi', role: '👤 Production', 
            sop: `<p><strong>Tujuan :</strong> Menghasilkan produk sesuai standar.</p><ul><li>Barista membuat Mont Blanc (foam rapih, layering jelas, orange zest).</li><li>Kitchen menyiapkan Ramen.</li><li><strong>Mont Blanc wajib diantar dalam 3 menit.</strong></li></ul>`, 
            script: `<div class="script-box"><p><em>Proses internal, tidak ada interaksi langsung dengan pelanggan.</em></p></div>` },
        9: { title: 'Quality Check', role: '👤 Server', 
            sop: `<ul><li>Periksa tampilan Mont Blanc (foam, layering, zest).</li><li>Periksa Butterscotch (foam seasalt, caramel crumble).</li><li>Periksa Ramen (kuah/dry, topping sesuai).</li></ul>`, 
            script: `<div class="script-box"><p><em>Pengecekan internal. Jika ada yang kurang, minta ulang ke dapur.</em></p></div>` },
        10: { title: 'Persiapan Cutleries', role: '👤 Server', 
            sop: `<ul><li>Siapkan sendok, garpu, sumpit (Ramen), serbet, tisu.</li><li>Letakkan di service tray.</li></ul>`, 
            script: `<div class="script-box"><p><em>Tahap persiapan internal.</em></p></div>` },
        11: { title: 'Pengantaran Pesanan', role: '👤 Server', 
            sop: `<ul><li>Antar sesuai nomor meja.</li><li>Untuk Mont Blanc: "Ini Mont Blanc-nya, mohon segera dinikmati agar foam tetap sempurna."</li><li>Untuk Ramen: "Ini Ramen-nya, masih panas, hati-hati ya."</li></ul>`, 
            script: `<div class="script-box"><p><span class="speaker">Server :</span> "Permisi, ini Mont Blanc-nya, Bapak/Ibu. Mohon segera dinikmati agar foam tetap sempurna."</p></div>` },
        12: { title: 'Floor Patrol', role: '👤 Server', 
            sop: `<ul><li>Inspeksi rutin ke Indoor, Outdoor, Komunal.</li><li>Cek meja kotor, tumpahan, sampah, toilet.</li></ul>`, 
            script: `<div class="script-box"><p><span class="speaker">Server :</span> "Ada yang bisa saya bantu, Bapak/Ibu?" <em>(jika pelanggan terlihat butuh bantuan)</em></p></div>` },
        13: { title: 'Bussing (Clearance) Meja', role: '👤 Server', 
            sop: `<ul><li>Buang sisa makanan ke trash bin.</li><li>Bawa piring/gelas kotor ke scullery.</li><li>Lakukan clear-as-you-go.</li></ul>`, 
            script: `<div class="script-box"><p><em>Dilakukan setelah pelanggan pergi.</em></p></div>` },
        14: { title: 'Deteksi Kepergian Pelanggan', role: '👤 Server / FOH', 
            sop: `<ul><li>Scan area setiap 3-5 menit.</li><li>Indikator: pelanggan berdiri, merapikan barang, atau struk di meja.</li><li>Ucapkan: "Terima kasih, sampai jumpa kembali di Nara!"</li></ul>`, 
            script: `<div class="script-box"><p><span class="speaker">Server :</span> "Terima kasih, Bapak/Ibu! Sampai jumpa kembali di Nara."</p></div>` },
        15: { title: 'Reset Meja (Turnaround)', role: '👤 Server', 
            sop: `<ul><li>Sanitasi meja & kursi dengan food-grade sanitizer.</li><li>Reset peralatan makan (mise en place).</li><li>Target maksimal 2 menit.</li></ul>`, 
            script: `<div class="script-box"><p><em>Proses reset meja. Pastikan meja terlihat rapi dan siap untuk pelanggan berikutnya.</em></p></div>` }
    };
const defaultMaterials = {
        // ----- HOSPITALITY -----
        'hospitality_golden': {
            title: 'Golden Rule',
            role: '🌟 Prinsip Dasar',
            tujuan: 'Memahami prinsip dasar hospitality bahwa setiap tamu Nara harus dihormati dan dilayani dengan tulus.',
            content: `<ul><li><strong>Golden Rule :</strong> "Perlakukan orang lain sebagaimana Anda ingin diperlakukan."</li><li>Pelanggan datang untuk merasakan <strong>pengalaman</strong>, bukan hanya makan dan minum.</li><li>Keramahan yang tulus akan membuat pelanggan merasa <strong>dihargai</strong>.</li></ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh :</span> "Selamat datang di Nara, Bapak/Ibu! Kami sangat senang bisa melayani Anda hari ini."</p></div>`
        },
        'hospitality_components': {
            title: 'Komponen Utama',
            role: '📌 6 Kunci',
            tujuan: 'Mengidentifikasi dan menerapkan 6 komponen utama hospitality.',
            content: `<ul><li><strong>Senyum & Kontak Mata</strong> : Keramahan tulus.</li><li><strong>Komunikasi Baik</strong> : Mendengarkan aktif dan bahasa tubuh positif.</li><li><strong>Inisiatif</strong> : Antisipasi kebutuhan sebelum diminta.</li><li><strong>Konsistensi</strong> : Pelayanan sama untuk semua.</li><li><strong>Personalisasi</strong> : Ingat nama/preferensi pelanggan.</li><li><strong>Perhatian Detail</strong> : Hal kecil yang membuat istimewa.</li></ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh Personalisasi :</span> "Selamat sore, Pak Budi! Mont Blanc seperti biasa?"</p></div>`
        },
        'hospitality_recovery': {
            title: 'Service Recovery',
            role: '🔄 Pemulihan',
            tujuan: 'Memulihkan pengalaman pelanggan setelah terjadi kesalahan.',
            content: `<ul><li><strong>Dengarkan</strong> keluhan tanpa menyela.</li><li><strong>Empati</strong> : "Saya memahami kekesalan Anda."</li><li><strong>Minta Maaf</strong> dengan tulus.</li><li><strong>Resolve</strong> : Tawarkan solusi konkret.</li><li><strong>Notify</strong> : Informasikan solusi dan pastikan puas.</li></ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh :</span> "Saya minta maaf, Bu. Saya akan ganti dengan Mont Blanc yang baru. Kami usahakan dalam 5 menit."</p></div>`
        },
        'hospitality_listening': {
            title: 'Active Listening',
            role: '👂 Komunikasi',
            tujuan: 'Melatih kemampuan mendengarkan dengan penuh perhatian.',
            content: `<ul><li>Berikan perhatian penuh.</li><li>Hindari menyela.</li><li>Tunjukkan bahwa Anda mendengar (anggukan, respon verbal).</li><li>Paraphrase untuk memastikan pemahaman.</li><li>Bahasa tubuh positif.</li></ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh Paraphrase :</span> "Jadi, Bapak/Ibu ingin Mont Blanc tanpa gula dan dengan susu almond. Benar?"</p></div>`
        },
        'hospitality_hygiene': {
            title: 'Penampilan & Hygiene',
            role: '🧼 Kebersihan Diri',
            tujuan: 'Menjaga kebersihan diri sebagai cerminan kualitas Nara.',
            content: `<ul><li>Seragam <strong>bersih, rapi, disetrika</strong>.</li><li>Rambut rapi, tidak menutupi wajah.</li><li>Kuku pendek dan bersih.</li><li>Hindari parfum menyengat.</li><li>Name tag jelas terlihat.</li></ul>`,
            script: `<div class="script-box"><p>Cek penampilan di cermin sebelum shift.</p></div>`
        },
        'hospitality_etika': {
            title: 'Etika Komunikasi',
            role: '🗣️ Sopan Santun',
            tujuan: 'Menggunakan bahasa dan sikap yang sopan.',
            content: `<ul><li>Gunakan bahasa <strong>sopan dan profesional</strong>.</li><li>Panggil <strong>Bapak/Ibu</strong>.</li><li>Hindari slang.</li><li>Jika pelanggan marah, tetap <strong>tenang</strong>.</li></ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh :</span> "Mohon maaf, Pak. Untuk pesanan Mont Blanc, kami membutuhkan waktu sekitar 7 menit. Apakah Bapak bersedia menunggu?"</p></div>`
        },
        'hospitality_tips': {
            title: 'Tips Praktis Nara',
            role: '💡 Penerapan',
            tujuan: 'Memberikan tips praktis yang bisa langsung diterapkan.',
            content: `<ul><li><strong>10-5 Rule</strong> : Sapa dalam 10 langkah, salam dalam 5 langkah.</li><li><strong>Checkback</strong> : Tanyakan kepuasan setelah mencicipi.</li><li><strong>Antisipasi</strong> : Perhatikan gelas kosong, tisu habis.</li><li><strong>Ucapan Terima Kasih</strong> : Selalu saat pelanggan pergi.</li></ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh Checkback :</span> "Bagaimana Mont Blanc-nya, Bapak? Apakah sesuai dengan selera?"</p></div>`
        },

        // ----- FOOD SAFETY -----
        'food_carry': {
            title: 'Cara Membawa Piring & Gelas',
            role: '🍽️ Teknik',
            tujuan: 'Menghindari kontaminasi saat membawa pesanan.',
            content: `<ul><li>Ibu jari <strong>tidak boleh</strong> menyentuh permukaan makanan atau bibir gelas.</li><li>Pegang piring dari <strong>bawah</strong>.</li><li>Gelas pegang bagian <strong>bawah atau sisi bawah</strong>.</li><li>Gunakan <strong>service tray</strong> untuk banyak pesanan.</li></ul>`,
            script: `<div class="script-box"><p>Pengingat: Periksa kebersihan tangan sebelum membawa pesanan.</p></div>`
        },
        'food_allergen': {
            title: 'Penanganan Alergen',
            role: '⚠️ Keamanan',
            tujuan: 'Menangani pelanggan dengan alergi makanan.',
            content: `<ul><li>Tanyakan ke dapur jika pelanggan menyebut alergi.</li><li>Beri tahu pelanggan jika ada alergen, tawarkan alternatif.</li><li>Untuk alergi berat, <strong>sanitasi meja</strong> terlebih dahulu.</li><li>Gunakan alat saji terpisah.</li></ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh :</span> "Baik, Bu. Saya cek ke dapur dulu apakah Mont Blanc ini mengandung kacang."</p></div>`
        },
        'food_temperature': {
            title: 'Suhu & Ketepatan',
            role: '🌡️ Kualitas',
            tujuan: 'Memastikan makanan disajikan pada suhu yang tepat.',
            content: `<ul><li>Mont Blanc wajib diantar <strong>maksimal 3 menit</strong> setelah selesai.</li><li>Makanan panas segera diantar, tidak boleh di pass counter lebih dari 2 menit.</li><li>Minuman dingin tetap dingin (tambahkan es).</li></ul>`,
            script: `<div class="script-box"><p>Jika Mont Blanc sudah terlalu lama, minta ulang ke barista.</p></div>`
        },
        'food_hygiene': {
            title: 'Personal Hygiene',
            role: '🧼 Standar',
            tujuan: 'Menjaga kebersihan diri untuk mencegah kontaminasi.',
            content: `<ul><li>Cuci tangan dengan <strong>sabun</strong> sebelum dan sesudah menangani makanan.</li><li>Gunakan <strong>hand sanitizer</strong> rutin.</li><li>Jangan menyentuh hidung/mulut/rambut saat menangani makanan.</li><li>Jika batuk/bersin, lakukan ke arah siku.</li></ul>`,
            script: `<div class="script-box"><p>Pengingat: Cuci tangan minimal 20 detik dengan sabun.</p></div>`
        },
        'food_sanitasi': {
            title: 'Sanitasi & Kontaminasi',
            role: '🧹 Mencegah',
            tujuan: 'Memahami pentingnya sanitasi dan mencegah kontaminasi silang.',
            content: `<ul><li>Sanitasi meja dengan <strong>food-grade sanitizer</strong>.</li><li>Gunakan <strong>alat saji terpisah</strong> untuk makanan berbeda.</li><li>Pisahkan <strong>lap meja</strong> dengan lap lantai.</li></ul>`,
            script: `<div class="script-box"><p>Jangan gunakan pembersih lantai untuk meja makan!</p></div>`
        },

        // ----- CLEANING -----
        'clean_meja': {
            title: 'Pembersihan Meja & Kursi',
            role: '🪑 Prosedur',
            tujuan: 'Membersihkan meja dengan cepat dan efektif.',
            content: `<ul>
                        <li><strong>Langkah 1 :</strong> Bussing — angkat piring, gelas, peralatan kotor.</li>
                        <li><strong>Langkah 2 :</strong> Buang sisa makanan ke trash bin.</li>
                        <li><strong>Langkah 3 :</strong> Semprot meja dengan <strong>food-grade sanitizer</strong>.</li>
                        <li><strong>Langkah 4 :</strong> Lap meja dengan gerakan <strong>S-Pattern (zig-zag) searah</strong> dari sisi terjauh ke arah Anda. <strong>Dilarang gerakan memutar (circular)</strong> karena dapat meninggalkan noda dan tidak efektif.</li>
                        <li><strong>Langkah 5 :</strong> Lap kursi (dudukan dan sandaran).</li>
                        <li><strong>Langkah 6 :</strong> Reset peralatan makan (mise en place).</li>
                        <li><strong>Target waktu :</strong> Maksimal 2 menit per meja.</li>
                    </ul>`,
            script: `<div class="script-box"><p>"Clean as you go" — jangan menunda pembersihan. Meja bersih adalah cerminan kualitas Nara.</p></div>`
        },
        'clean_kaca': {
            title: 'Pembersihan Kaca',
            role: '🪟 Jendela & Partisi',
            tujuan: 'Membersihkan kaca tanpa bekas.',
            content: `<ul>
                        <li>Gunakan <strong>pembersih kaca</strong> dan <strong>lap microfiber</strong> (atau squeegee).</li>
                        <li>Semprotkan cleaner ke <strong>permukaan kaca</strong>, bukan ke lap.</li>
                        <li>Lap dengan gerakan <strong>zig-zag</strong> untuk menghindari bekas.</li>
                        <li>Periksa dari berbagai sudut.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Kaca bersih memberi kesan cafe yang terawat.</p></div>`
        },
        'clean_langit': {
            title: 'Langit-Langit, Dinding & Sudut',
            role: '🏗️ Area Tinggi',
            tujuan: 'Membersihkan area yang sering terlewat.',
            content: `<ul>
                        <li>Periksa langit-langit dan sudut untuk sarang laba-laba atau debu.</li>
                        <li>Gunakan <strong>duster gagang panjang</strong>.</li>
                        <li>Bersihkan dinding yang terkena cipratan dengan lap basah.</li>
                        <li>Perhatikan ventilasi/AC — bersihkan filter secara berkala.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Lakukan pembersihan area tinggi minimal seminggu sekali.</p></div>`
        },
        'clean_lantai': {
            title: 'Pembersihan Lantai',
            role: '🧹 Lantai',
            tujuan: 'Membersihkan lantai indoor dan outdoor.',
            content: `<ul>
                        <li>Sapu atau <strong>vacuum</strong> untuk debu dan remahan.</li>
                        <li>Indoor : gunakan <strong>mop basah</strong> dengan disinfektan (ganti air secara teratur).</li>
                        <li>Outdoor : sapu lalu <strong>siram dengan air</strong> atau pel basah.</li>
                        <li>Perhatikan area di bawah meja dan kursi.</li>
                        <li>Segera bersihkan tumpahan.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Lantai bersih dan tidak licin adalah prioritas.</p></div>`
        },
        'clean_toilet': {
            title: 'Pembersihan Toilet (2 Toilet)',
            role: '🚽 Kebersihan Total',
            tujuan: 'Menjaga kebersihan toilet sebagai bagian dari pengalaman pelanggan.',
            content: `<ul>
                        <li>Periksa toilet setiap <strong>30-60 menit</strong>.</li>
                        <li>Pastikan <strong>sabun, tisu, dan pengharum ruangan</strong> tersedia.</li>
                        <li>Bersihkan <strong>wastafel, kloset, dan lantai</strong> dengan <strong>disinfektan</strong>.</li>
                        <li>Bersihkan cermin dengan pembersih kaca.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Toilet bersih menunjukkan Nara peduli dengan detail.</p></div>`
        },
        'clean_komunal': {
            title: 'Pembersihan Area Komunal',
            role: '🛋️ Meja Bersama, Rak, Sofa',
            tujuan: 'Menjaga kebersihan area komunal yang digunakan bersama.',
            content: `<ul>
                        <li>Lap <strong>meja panjang bersama</strong> dengan food-grade sanitizer.</li>
                        <li>Rapikan dan lap <strong>rak majalah / display</strong>.</li>
                        <li>Lap <strong>sofa tunggu</strong> dan <strong>meja tinggi</strong> dengan lap bersih.</li>
                        <li>Periksa area sekitar komunal dari sampah atau tumpahan.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Area komunal yang rapi membuat pelanggan nyaman untuk bersantai.</p></div>`
        },
        'clean_peralatan': {
            title: 'Peralatan & Bahan Pembersih',
            role: '🧺 Perlengkapan',
            tujuan: 'Mengetahui dan menggunakan peralatan yang tepat.',
            content: `<ul>
                        <li><strong>Lap microfiber</strong> (pisahkan untuk meja, kaca, lantai).</li>
                        <li><strong>Food-grade sanitizer</strong> untuk meja.</li>
                        <li><strong>Pembersih kaca</strong> dan squeegee.</li>
                        <li><strong>Pel dan ember</strong> (ganti air rutin).</li>
                        <li><strong>Disinfektan</strong> untuk toilet dan lantai.</li>
                        <li><strong>Sarung tangan sekali pakai</strong> untuk area kotor.</li>
                        <li><strong>Duster</strong> gagang panjang untuk area tinggi.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Gunakan alat yang tepat untuk area yang tepat.</p></div>`
        },

        // ----- KOMPLAIN -----
        'complaint_learn': {
            title: 'Metode LEARN',
            role: '📖 Lima Langkah',
            tujuan: 'Menguasai lima langkah profesional dalam menangani komplain.',
            content: `<ul>
                        <li><strong>L - Listen (Dengarkan)</strong> : Dengarkan dengan penuh perhatian tanpa menyela.</li>
                        <li><strong>E - Empathize (Empati)</strong> : "Saya sangat memahami kekesalan Bapak/Ibu."</li>
                        <li><strong>A - Apologize (Minta Maaf)</strong> : Minta maaf dengan tulus.</li>
                        <li><strong>R - Resolve (Selesaikan)</strong> : Tawarkan solusi konkret dan segera.</li>
                        <li><strong>N - Notify (Informasikan)</strong> : Beri tahu solusi dan pastikan puas.</li>
                    </ul>`,
            script: `<div class="script-box">
                        <p><span class="speaker">Contoh Penerapan :</span></p>
                        <p>1. <strong>Listen :</strong> "Silakan ceritakan apa yang terjadi, Bu."</p>
                        <p>2. <strong>Empathize :</strong> "Saya sangat memahami kekesalan Anda."</p>
                        <p>3. <strong>Apologize :</strong> "Saya mohon maaf yang sebesar-besarnya."</p>
                        <p>4. <strong>Resolve :</strong> "Saya akan ganti dengan Mont Blanc yang baru."</p>
                        <p>5. <strong>Notify :</strong> "Sudah saya koordinasikan, pesanan baru akan siap dalam 5 menit."</p>
                    </div>`
        },
        'complaint_kasus': {
            title: 'Contoh Kasus & Solusi',
            role: '📌 Skenario',
            tujuan: 'Memberikan contoh konkret penanganan komplain.',
            content: `<ul>
                        <li><strong>Kasus 1 : Mont Blanc terlalu manis/tawar.</strong><br>
                        <em>Solusi :</em> "Saya minta maaf, Bu. Kami akan buatkan ulang Mont Blanc dengan tingkat manis yang sesuai."</li>
                        <li><strong>Kasus 2 : Pesanan lama.</strong><br>
                        <em>Solusi :</em> "Mohon maaf atas keterlambatannya. Pesanan Bapak/Ibu sudah hampir selesai. Sebagai kompensasi, kami berikan Bolen kecil."</li>
                        <li><strong>Kasus 3 : Salah pesanan.</strong><br>
                        <em>Solusi :</em> "Saya minta maaf, Pak. Saya akan ganti dengan pesanan yang benar segera. Kami usahakan dalam 5-7 menit."</li>
                    </ul>`,
            script: `<div class="script-box"><p>Selalu sampaikan solusi dengan tenang dan percaya diri.</p></div>`
        },
        'complaint_larangan': {
            title: 'Hal yang Tidak Boleh Dilakukan',
            role: '🚫 Hindari!',
            tujuan: 'Mengetahui perilaku yang harus dihindari.',
            content: `<ul>
                        <li><strong>Jangan membantah</strong> pendapat pelanggan.</li>
                        <li><strong>Jangan menyalahkan dapur</strong> atau tim lain.</li>
                        <li><strong>Jangan mengatakan "Saya cuma ikut perintah"</strong> — itu menunjukkan tidak bertanggung jawab.</li>
                        <li><strong>Jangan mengabaikan</strong> keluhan.</li>
                        <li><strong>Jangan menjadi defensif</strong>.</li>
                        <li><strong>Jangan menunda</strong> solusi.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Ingat: Pelanggan yang marah marah pada situasi, bukan pada Anda secara pribadi.</p></div>`
        },
        'complaint_tabel': {
            title: 'Tabel Komplain Umum Nara',
            role: '📋 Panduan Cepat',
            tujuan: 'Memberikan panduan cepat untuk menangani komplain yang paling sering terjadi di Nara.',
            content: `<p>Berikut tabel komplain umum beserta kategori, solusi segera, dan PIC yang bertanggung jawab:</p>
                        <table class="complain-table">
                            <thead>
                                <tr>
                                    <th>Jenis Komplain</th>
                                    <th>Kategori</th>
                                    <th>Solusi Segera (Action)</th>
                                    <th>PIC</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="cat-produk">
                                    <td><strong>Rasa Minuman Tidak Sesuai</strong><br><small>(Terlalu manis/pahit/tawar)</small></td>
                                    <td>Produk</td>
                                    <td>Tawarkan untuk memperbaiki atau membuatkan ulang produk baru sesuai standar. Ambil kembali produk yang salah.</td>
                                    <td><strong>Barista</strong></td>
                                </tr>
                                <tr class="cat-service">
                                    <td><strong>Pesanan Terlalu Lama</strong><br><small>(Diatas standar waktu tunggu)</small></td>
                                    <td>Service</td>
                                    <td>Cek posisi antrian, sampaikan permohonan maaf atas keterlambatan. Jika sangat lama, berikan complimentary (takjil/snack kecil) sebagai permohonan maaf.</td>
                                    <td><strong>Kasir / Server</strong></td>
                                </tr>
                                <tr class="cat-service">
                                    <td><strong>Salah Pesanan</strong><br><small>(Menu yang datang berbeda)</small></td>
                                    <td>Service</td>
                                    <td>Tarik kembali menu yang salah, buatkan menu yang benar dengan prioritas tercepat. Pastikan bill sesuai dengan menu yang diterima.</td>
                                    <td><strong>Server / Kasir</strong></td>
                                </tr>
                                <tr class="cat-higienitas">
                                    <td><strong>Ditemukan Benda Asing</strong><br><small>(Rambut/serangga/kotoran)</small></td>
                                    <td>Higienitas</td>
                                    <td>Minta maaf dengan tulus, WAJIB ganti dengan produk baru secara total. Tawarkan diskon atau produk tambahan sebagai kompensasi.</td>
                                    <td><strong>Shift Leader</strong></td>
                                </tr>
                                <tr class="cat-fasilitas">
                                    <td><strong>Area Kotor / Meja Lengket</strong></td>
                                    <td>Fasilitas</td>
                                    <td>Segera bersihkan area tersebut saat itu juga di depan pelanggan. Pindahkan pelanggan ke meja lain yang lebih nyaman jika perlu.</td>
                                    <td><strong>Server</strong></td>
                                </tr>
                                <tr class="cat-attitude">
                                    <td><strong>Sikap Staff Kurang Ramah</strong></td>
                                    <td>Attitude</td>
                                    <td>Shift Leader segera menemui pelanggan, meminta maaf, dan mengambil alih pelayanan untuk meja tersebut.</td>
                                    <td><strong>Shift Leader</strong></td>
                                </tr>
                                <tr class="cat-sistem">
                                    <td><strong>Pesanan "Habis" Setelah Dibayar</strong></td>
                                    <td>Sistem</td>
                                    <td>Minta maaf segera, tawarkan menu pengganti dengan harga setara atau tawarkan <strong>Refund penuh</strong> jika tamu tidak berkenan mengganti.</td>
                                    <td><strong>Kasir</strong></td>
                                </tr>
                            </tbody>
                        </table>
                        <p style="margin-top:12px; font-size:13px; color:#6b7a8d;"><em>Catatan : Selalu koordinasikan dengan Shift Leader untuk komplain yang memerlukan keputusan lebih lanjut.</em></p>`,
            script: `<div class="script-box"><p>Gunakan tabel ini sebagai panduan cepat. Jika ragu, selalu libatkan Shift Leader.</p></div>`
        },
        'complaint_tips': {
            title: 'Tips Tambahan',
            role: '💡 Tips & Trik',
            tujuan: 'Memberikan tips tambahan untuk menangani komplain lebih efektif.',
            content: `<ul>
                        <li><strong>Tetap tenang</strong> — napas dalam dan bicara dengan nada rendah.</li>
                        <li><strong>Gunakan bahasa tubuh terbuka</strong> — jangan menyilangkan tangan.</li>
                        <li><strong>Libatkan manajer</strong> jika perlu.</li>
                        <li><strong>Catat komplain</strong> untuk evaluasi tim.</li>
                        <li><strong>Follow-up</strong> setelah solusi diberikan.</li>
                        <li><strong>Jadikan komplain sebagai pelajaran</strong>.</li>
                    </ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh Follow-up :</span> "Bagaimana dengan Mont Blanc yang baru, Bu? Apakah sudah sesuai?"</p></div>`
        }
    };

const defaultQuizzes = [ /* salin 5 array soal Anda di sini */ ];

const defaultData = {
  steps: defaultSteps,
  materials: defaultMaterials,
  quizzes: defaultQuizzes
};

// =============================================
// FUNGSI BACA & TULIS KE FIRESTORE
// =============================================
const DOC_ID = 'master_data'; // nama dokumen di Firestore

async function getAppData() {
  try {
    const docRef = db.collection('app_data').doc(DOC_ID);
    const doc = await docRef.get();
    if (doc.exists) {
      return doc.data();
    } else {
      // Jika dokumen belum ada, buat dengan data default
      await docRef.set(defaultData);
      return defaultData;
    }
  } catch (error) {
    console.error("Gagal load dari Firebase, pakai default:", error);
    return defaultData;
  }
}

async function saveAppData(newData) {
  try {
    const docRef = db.collection('app_data').doc(DOC_ID);
    await docRef.set(newData);
    return true;
  } catch (error) {
    console.error("Gagal simpan ke Firebase:", error);
    alert("Gagal menyimpan data! Cek koneksi internet.");
    return false;
  }
}
