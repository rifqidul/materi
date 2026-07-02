    // =============================================
    // DATA SOP (15 steps) - untuk modal
    // =============================================
    const stepData = {
        1: { title: 'Greeting & Sambutan', role: '👤 Kasir · Barista · Server', 
            sop: `<p><strong>Tujuan :</strong> Memberikan kesan pertama yang hangat dan profesional.</p><ul><li>Sapa segera setelah pelanggan membuka pintu.</li><li>Gunakan senyum dan kontak mata.</li></ul>`, 
            script: `<div class="script-box"><p><span class="speaker">Kasir/Server/Barista :</span> "Selamat pagi/siang/sore/malam Welcome to Nara"</p></div>` },
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

    // =============================================
    // DATA MATERI LENGKAP (untuk tab 2-5)
    // =============================================
    const materialData = {
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
        },

        // ----- SOP OPERATIONAL -----
        'operational_kasir': {
            title: 'Tugas & Tanggung Jawab Kasir',
            role: '🧾 Posisi : Kasir',
            tujuan: 'Memahami seluruh tugas dan tanggung jawab posisi Kasir dalam operasional harian Nara Curated Compound.',
            content: `<ul>
                        <li><strong>Menyambut pelanggan</strong> dengan senyum dan salam saat memasuki area kasir.</li>
                        <li><strong>Edukasi menu</strong> : Menjelaskan pilihan menu, bahan, dan varian kepada pelanggan dengan percaya diri.</li>
                        <li><strong>Upselling</strong> : Menawarkan extra shot, upgrade blend, atau menu tambahan secara sopan dan natural.</li>
                        <li><strong>Konfirmasi pesanan (Readback)</strong> : Mengulang seluruh pesanan untuk memastikan akurasi sebelum diproses.</li>
                        <li><strong>Memproses pembayaran</strong> : Cash, QRIS, dan EDC dengan akurat dan efisien.</li>
                        <li><strong>Mencetak struk dan menyiapkan nomor meja</strong> untuk pengantaran pesanan ke meja.</li>
                        <li><strong>Koordinasi dengan produksi</strong> : Memastikan order tersampaikan dengan benar ke barista dan kitchen.</li>
                        <li><strong>Mengelola antrian</strong> : Mengatur arus pelanggan agar tidak terjadi penumpukan di area kasir.</li>
                        <li><strong>Menjaga kebersihan area kasir</strong> : Meja kasir, mesin EDC, dan area sekitar selalu rapi setiap saat.</li>
                        <li><strong>Melapor ke Shift Leader</strong> jika terjadi kendala transaksi, selisih kas, atau keluhan pelanggan.</li>
                    </ul>`,            
        },
        'operational_barista': {
            title: 'Tugas & Tanggung Jawab Barista',
            role: '☕ Posisi : Barista',
            tujuan: 'Memahami seluruh tugas dan tanggung jawab posisi Barista dalam operasional harian Nara Curated Compound.',
            content: `<ul>
                        <li><strong>Memproduksi minuman sesuai standar resep</strong> : rasa, tampilan, dan teknik harus konsisten setiap saat.</li>
                        <li><strong>Quality control</strong> : Memeriksa tampilan dan rasa setiap minuman sebelum diserahkan ke server untuk diantar.</li>
                        <li><strong>Kecepatan produksi</strong> : Menu minuman wajib selesai dalam <strong>1 - 5 menit</strong> sejak order masuk.</li>
                        <li><strong>Menjaga kebersihan bar area</strong> : Area kerja, peralatan, grup head, dan steam wand selalu bersih sepanjang shift.</li>
                        <li><strong>Kalibrasi mesin kopi</strong> : Mengecek grinder, tekanan espresso, dan suhu air secara berkala sesuai SOP pembukaan.</li>
                        <li><strong>Manajemen stok bahan baku</strong> : Memantau ketersediaan biji kopi, susu, sirup, dan bahan baku lainnya; melaporkan ke group WA jika stok menipis.</li>
                        <li><strong>Penerapan personal hygiene</strong> : Sarung tangan saat handling topping, apron bersih, dan kuku pendek wajib dipatuhi.</li>
                        <li><strong>Koordinasi dengan kasir dan server</strong> : Memastikan urutan pesanan sesuai antrian, terutama saat jam ramai.</li>
                        <li><strong>Membantu menyapa pelanggan</strong> secara hangat jika posisi berada dekat area pelanggan.</li>
                    </ul>`,            
        },
        'operational_server': {
            title: 'Tugas & Tanggung Jawab Server',
            role: '🛎️ Posisi : Server',
            tujuan: 'Memahami seluruh tugas dan tanggung jawab posisi Server dalam operasional harian Nara Curated Compound.',
            content: `<ul>
                        <li><strong>Quality check sebelum pengantaran</strong> : Pastikan pesanan sesuai — tampilan, topping, dan varian sudah benar.</li>
                        <li><strong>Persiapan cutleries</strong> : Siapkan sendok, garpu, sumpit (Ramen), serbet, dan tisu di service tray sebelum mengantarkan.</li>
                        <li><strong>Mengantarkan pesanan ke meja</strong> yang benar sesuai nomor meja, cepat dan tanpa tumpah.</li>
                        <li><strong>Menyampaikan informasi saat antar</strong> : "Ini Mont Blanc-nya, mohon segera dinikmati agar foam tetap sempurna."</li>
                        <li><strong>Floor patrol</strong> : Inspeksi rutin ke area Indoor, Outdoor, dan Komunal setiap 3–5 menit selama shift.</li>
                        <li><strong>Mendeteksi kebutuhan pelanggan</strong> secara proaktif — tawarkan bantuan sebelum diminta.</li>
                        <li><strong>Bussing (table clearance)</strong> : Bawa peralatan kotor ke scullery segera setelah pelanggan pergi, terapkan clear-as-you-go.</li>
                        <li><strong>Deteksi kepergian pelanggan</strong> : Scan area setiap 3–5 menit, ucapkan "Terima kasih, sampai jumpa kembali di Nara!"</li>
                        <li><strong>Reset meja (turnaround)</strong> : Sanitasi meja dan kursi dengan food-grade sanitizer, mise en place, target maksimal 2 menit.</li>
                        <li><strong>Pemeriksaan toilet</strong> : Cek kebersihan, sabun, tisu, dan pengharum setiap 30–60 menit.</li>
                        <li><strong>Melaporkan kendala</strong> atau komplain pelanggan ke Shift Leader segera, jangan ditangani sendiri jika di luar kewenangan.</li>
                    </ul>`,
        },

        // ----- CLEANING : TANAMAN -----
        'clean_tanaman': {
            title: 'Perawatan Tanaman',
            role: '🌿 Area Outdoor & Indoor',
            tujuan: 'Menjaga tanaman dekoratif Nara tetap segar, bersih, dan mendukung kenyamanan visual area dining sebelum dan selama operasional.',
            content: `<ul>
                        <li><strong>Jadwal penyiraman</strong> : Siram tanaman <strong>setiap pagi sebelum operasional dimulai</strong> — sebelum pelanggan pertama datang.</li>
                        <li><strong>Jumlah air</strong> : Siram hingga media tanam lembab merata, tidak tergenang. Periksa kondisi tanah (tidak terlalu kering, tidak terlalu basah).</li>
                        <li><strong>Tanaman indoor</strong> : Gunakan watering can kecil agar air tidak membasahi meja, lantai, atau dekorasi di sekitarnya. Lap segera jika ada percikan air.</li>
                        <li><strong>Tanaman outdoor</strong> : Gunakan selang atau watering can sesuai ukuran pot. Arahkan air ke pangkal tanaman, bukan ke daun secara langsung.</li>
                        <li><strong>Pemeriksaan visual</strong> : Cek daun layu, daun kuning, atau daun mati setiap hari — cabut dan buang segera agar tampilan tetap rapi dan estetis.</li>
                        <li><strong>Bersihkan pot dan area sekitar</strong> : Lap debu dari permukaan pot, nampan, dan area lantai atau meja di sekitar tanaman setelah menyiram.</li>
                        <li><strong>Laporkan ke Shift Leader</strong> jika ada tanaman yang layu parah, terserang hama, atau perlu penggantian media tanam dan pot.</li>
                    </ul>`,
            script: `<div class="script-box"><p><span class="speaker">Catatan :</span> Tanaman adalah bagian dari estetika dan suasana. Pastikan kondisi tanaman selalu segar dan area sekitarnya bersih sebelum pelanggan pertama tiba.</p></div>`
        }
    };

    // =============================================
    // DATA SOAL 125 SOAL (5 kuis × 25)
    // =============================================
    // KUIS 1: SOP
    const sopQuestionsData = [
        { q: "Kapan waktu yang tepat bagi tim FOH untuk mulai menyapa pelanggan yang baru datang?", options: ["Setelah pelanggan duduk di meja", "Segera setelah pelanggan membuka pintu dan melangkah masuk", "Saat pelanggan sudah memegang menu", "Setelah pelanggan selesai membaca menu"], answer: 1 },
        { q: "Apa langkah pertama yang harus dilakukan kasir setelah pelanggan selesai menyampaikan pesanan?", options: ["Langsung memproses pembayaran", "Mengulang (readback) seluruh pesanan untuk konfirmasi", "Memanggil barista untuk membuat minuman", "Memberikan nomor antrian"], answer: 1 },
        { q: "Istilah untuk teknik menawarkan produk tambahan (misal: extra shot) guna meningkatkan nilai transaksi disebut?", options: ["Cross-selling", "Upselling", "Bundling", "Discounting"], answer: 1 },
        { q: "Apa definisi dari 'suggestive selling' dalam konteks F&B?", options: ["Menjual produk dengan harga diskon besar-besaran", "Memberikan saran produk yang cocok berdasarkan preferensi pelanggan", "Menawarkan produk secara paksa tanpa memedulikan keinginan pelanggan", "Menjual produk dalam jumlah besar untuk stok"], answer: 1 },
        { q: "Metode pembayaran apa saja yang diterima di kasir Nara?", options: ["Cash dan transfer bank saja", "Cash dan QRIS saja", "Cash, QRIS, dan EDC", "EDC dan transfer bank saja"], answer: 2 },
        { q: "Apa fungsi utama dari nomor meja (table number) dalam sistem layanan Nara?", options: ["Sebagai hiasan meja agar terlihat menarik", "Untuk identifikasi pesanan agar diantar ke meja yang tepat", "Untuk menghitung jumlah pelanggan yang datang", "Sebagai kode promo untuk pelanggan"], answer: 1 },
        { q: "Siapa yang bertanggung jawab memproses pesanan setelah order masuk ke sistem?", options: ["Kasir", "Server", "Tim Barista & Kitchen", "Manager"], answer: 2 },
        { q: "Apa yang harus diperhatikan server saat melakukan quality check (QC) sebelum pesanan diantar?", options: ["Harga pesanan apakah sudah sesuai", "Tampilan, garnish, dan kelengkapan pesanan", "Warna meja dan kursi", "Jumlah pelanggan di meja"], answer: 1 },
        { q: "Peralatan makan (cutleries) disiapkan oleh siapa dan kapan?", options: ["Kasir saat pembayaran", "Server sebelum mengantar pesanan", "Barista saat membuat minuman", "Pelanggan mengambil sendiri"], answer: 1 },
        { q: "Ucapan yang paling tepat saat server mengantar pesanan ke meja adalah?", options: ["'Ini pesanannya, silakan'", "'Selamat menikmati' dan menyebutkan nama pesanan", "'Cepat habiskan sebelum dingin'", "'Bayar di kasir ya'"], answer: 1 },
        { q: "Apa tujuan utama dari floor patrol yang dilakukan server secara rutin?", options: ["Menjaga kebersihan dan kenyamanan area dine-in", "Menghitung jumlah pelanggan", "Menyiapkan bill untuk pelanggan", "Memasak pesanan yang tertunda"], answer: 0 },
        { q: "Apa yang dimaksud dengan istilah 'bussing' dalam operasional F&B?", options: ["Mengantar pesanan ke meja", "Membersihkan meja setelah pelanggan pergi", "Menerima pembayaran", "Menyiapkan bahan baku di dapur"], answer: 1 },
        { q: "Ke mana piring dan gelas kotor harus dibawa setelah proses bussing?", options: ["Ke meja kasir", "Ke area scullery", "Ke dapur produksi", "Ke tempat sampah umum"], answer: 1 },
        { q: "Apa indikasi yang paling jelas bahwa pelanggan akan segera meninggalkan area?", options: ["Pelanggan memesan makanan lagi", "Pelanggan berdiri dan merapikan barang", "Pelanggan meminta tambahan es", "Pelanggan membuka menu kembali"], answer: 1 },
        { q: "Berapa target waktu ideal untuk menyelesaikan reset meja (turnaround) setelah pelanggan pergi?", options: ["5 menit", "2 menit", "10 menit", "1 menit"], answer: 1 },
        { q: "Apa kepanjangan dari singkatan FOH?", options: ["Front of House", "Food of House", "Fast Order Handling", "Full Operation Handling"], answer: 0 },
        { q: "Jika pesanan yang tiba di meja ternyata tidak sesuai dengan struk, apa yang harus dilakukan server?", options: ["Tetap diantar dan berharap pelanggan tidak menyadari", "Segera koordinasikan dengan tim produksi untuk perbaikan", "Membatalkan pesanan dan meminta pelanggan memesan ulang", "Memberi diskon sebagai kompensasi"], answer: 1 },
        { q: "Siapa yang bertanggung jawab utama membersihkan meja setelah pelanggan pergi?", options: ["Kasir", "Server", "Barista", "Manager"], answer: 1 },
        { q: "Apa yang dimaksud dengan istilah 'mise en place' di area FOH?", options: ["Proses memasak makanan", "Penataan ulang peralatan makan dan pelengkap meja", "Pembayaran di awal", "Pembersihan lantai"], answer: 1 },
        { q: "Mengapa penting bagi server untuk mengucapkan terima kasih saat pelanggan pergi?", options: ["Agar pelanggan merasa berkewajiban untuk kembali", "Sebagai bentuk sopan santun dan menciptakan kesan positif", "Karena pelanggan sudah membayar", "Agar pelanggan memberikan tip"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'table turnover'?", options: ["Proses pergantian pelanggan baru setelah meja dibersihkan", "Memindahkan meja ke lokasi lain", "Menata ulang meja dengan dekorasi baru", "Menghitung jumlah meja yang tersedia"], answer: 0 },
        { q: "Sikap non-verbal yang paling penting saat menyapa pelanggan adalah?", options: ["Senyum dan kontak mata", "Menunduk dan bicara pelan", "Bicara cepat dan tegas", "Tidak menatap langsung"], answer: 0 },
        { q: "Jika pelanggan terlihat bingung dengan menu, langkah terbaik yang harus dilakukan kasir adalah?", options: ["Memberikan rekomendasi dan edukasi menu secara sabar", "Membiarkan mereka bingung agar memilih sendiri", "Menunjukkan menu dengan harga termahal", "Menanyakan budget mereka secara langsung"], answer: 0 },
        { q: "Contoh kalimat upselling yang paling efektif dan sopan adalah?", options: ["'Ini saja yang Bapak/Ibu pesan?'", "'Tambahkan extra shot untuk rasa yang lebih kuat dan nikmat?'", "'Mau pesan apa lagi?'", "'Cepat pesan karena antrian panjang'"], answer: 1 },
        { q: "Apa esensi dari prinsip 'clear-as-you-go'?", options: ["Membersihkan semua kotoran di akhir shift", "Membersihkan kotoran segera setelah terlihat", "Membersihkan hanya jika pelanggan meminta", "Tidak membersihkan area selama jam sibuk"], answer: 1 }
    ];

    // KUIS 2: HOSPITALITY
    const hospitalityQuestionsData = [
        { q: "Apa yang dimaksud dengan 'Golden Rule' dalam hospitality?", options: ["Pelanggan selalu benar dalam segala hal", "Perlakukan orang lain sebagaimana Anda ingin diperlakukan", "Keuntungan perusahaan adalah prioritas utama", "Pelayanan harus secepat mungkin"], answer: 1 },
        { q: "Langkah pertama yang paling krusial saat pelanggan menyampaikan keluhan adalah?", options: ["Langsung memberi diskon agar cepat selesai", "Mendengarkan dengan aktif dan penuh empati", "Memanggil manajer tanpa mendengar", "Mengabaikan keluhan karena pelanggan salah"], answer: 1 },
        { q: "Sikap tubuh (posture) yang benar saat melayani pelanggan adalah?", options: ["Berdiri tegak, bahu rileks, dan tersenyum", "Bersandar di meja agar lebih santai", "Tangan di saku untuk terlihat profesional", "Melihat ke lantai agar tidak canggung"], answer: 0 },
        { q: "Apa yang dimaksud dengan 'service recovery'?", options: ["Upaya memperbaiki pengalaman pelanggan setelah terjadi kesalahan", "Mengurangi harga menu sebagai strategi pemasaran", "Menambah jumlah pesanan untuk meningkatkan penjualan", "Mempercepat waktu masak"], answer: 0 },
        { q: "Cara terbaik menangani pelanggan yang tampak dalam pengaruh alkohol adalah?", options: ["Tetap melayani alkohol seperti biasa", "Segera laporkan ke manajer dan tawarkan air", "Mengusir pelanggan tanpa penjelasan", "Mengabaikan kondisi pelanggan"], answer: 1 },
        { q: "Teknik memegang baki (service tray) yang benar adalah?", options: ["Telapak tangan terbuka dengan jari terbentang, siku 90 derajat", "Menggunakan satu jari untuk keseimbangan", "Memegang dengan kedua tangan di bagian pinggir", "Meletakkan baki di atas kepala"], answer: 0 },
        { q: "Kapan waktu yang paling tepat untuk melakukan 'checkback' ke meja pelanggan?", options: ["Segera setelah pesanan diantar", "Setelah pelanggan mencicipi beberapa suap", "Saat pelanggan sedang berbicara dengan teman", "Setelah pelanggan selesai makan"], answer: 1 },
        { q: "Jika pelanggan menumpahkan minuman di meja, tindakan yang paling profesional adalah?", options: ["Mengabaikan dan berharap tidak terlihat", "Membantu membersihkan dan menawarkan minuman pengganti gratis", "Menagih biaya tambahan untuk pembersihan", "Memarahi pelanggan karena ceroboh"], answer: 1 },
        { q: "Mengapa seorang server perlu memiliki kesadaran tinggi terhadap alergi (allergy awareness)?", options: ["Agar terlihat pintar di depan pelanggan", "Untuk menghindari risiko kesehatan serius pada pelanggan", "Untuk menaikkan harga menu", "Tidak terlalu penting karena jarang terjadi"], answer: 1 },
        { q: "Cara menjaga kebersihan diri (personal hygiene) yang benar di lingkungan F&B adalah?", options: ["Memakai parfum menyengat untuk menutupi bau", "Seragam rapi, rambut rapi, kuku pendek dan bersih", "Rambut panjang terurai agar terlihat stylish", "Memakai banyak aksesoris agar menarik"], answer: 1 },
        { q: "Apa tujuan utama dari teknik upselling bagi bisnis?", options: ["Membuat pelanggan kesal", "Meningkatkan nilai transaksi rata-rata", "Menjual produk yang paling murah", "Mengurangi stok barang"], answer: 1 },
        { q: "Cara profesional menangani pelanggan yang sedang terburu-buru adalah?", options: ["Mengabaikan permintaan mereka agar tidak tergesa-gesa", "Memproses pesanan dengan cepat dan memberikan estimasi waktu akurat", "Menyuruh mereka menunggu seperti pelanggan lain", "Menolak melayani karena terburu-buru"], answer: 1 },
        { q: "Apa perbedaan mendasar antara upselling dan cross-selling?", options: ["Tidak ada perbedaan, keduanya sama", "Upselling: upgrade produk yang sama; Cross-selling: produk pelengkap", "Upselling: produk pelengkap; Cross-selling: upgrade", "Keduanya bertujuan menambah harga"], answer: 1 },
        { q: "Hal penting yang harus diperhatikan server sebelum mendekati meja pelanggan adalah?", options: ["Pastikan penampilan rapi, bawa alat tulis, dan tersenyum", "Membawa ponsel untuk berjaga-jaga", "Berbicara dengan rekan kerja di depan meja", "Terburu-buru agar cepat selesai"], answer: 0 },
        { q: "Cara paling profesional menangani pelanggan yang menolak membayar adalah?", options: ["Berdebat keras agar pelanggan mengalah", "Tetap tenang, panggil manajer, dan jangan berdebat", "Memanggil polisi langsung tanpa negosiasi", "Mengancam pelanggan dengan konsekuensi"], answer: 1 },
        { q: "Mengapa kontak mata sangat penting dalam pelayanan hospitality?", options: ["Menunjukkan perhatian dan kepercayaan diri", "Membuat pelanggan merasa takut", "Agar terlihat galak dan berwibawa", "Tidak penting dalam budaya Indonesia"], answer: 0 },
        { q: "Apa yang dimaksud dengan 'active listening'?", options: ["Mendengarkan dengan penuh perhatian dan merespon dengan tepat", "Mendengarkan sambil melakukan hal lain", "Tidak merespon pembicaraan pelanggan", "Hanya mendengar tanpa berusaha memahami"], answer: 0 },
        { q: "Sikap terbaik saat pelanggan mengeluh makanan tidak sesuai ekspektasi adalah?", options: ["Membantah pendapat pelanggan", "Minta maaf, tawarkan ganti menu lain, atau berikan kompensasi", "Mengabaikan keluhan", "Menyuruh pelanggan pergi"], answer: 1 },
        { q: "Aturan penampilan seragam yang ideal di F&B adalah?", options: ["Bersih, rapi, disetrika, dan name tag terpasang jelas", "Boleh sedikit kusut asal tidak kotor", "Tanpa name tag agar terlihat profesional", "Memakai jaket atau aksesori tambahan"], answer: 0 },
        { q: "Jika pelanggan meminta rekomendasi tetapi Anda tidak menyukai menu tersebut, cara menjawab yang benar adalah?", options: ["Mengatakan 'saya tidak suka menu ini'", "Menjawab objektif: 'Ini adalah best seller kami, Bapak/Ibu'", "Menolak memberi rekomendasi", "Menyuruh pelanggan memilih sendiri"], answer: 1 },
        { q: "Apa makna dari '30-second rule' dalam hospitality?", options: ["Pelanggan harus selesai makan dalam 30 detik", "30 detik pertama menentukan persepsi pelanggan terhadap layanan", "Server harus datang dalam 30 detik", "Pesanan harus siap dalam 30 detik"], answer: 1 },
        { q: "Cara profesional menangani pemesanan rombongan besar adalah?", options: ["Menolak rombongan besar karena merepotkan", "Koordinasikan dengan dapur dan siapkan area khusus jika diperlukan", "Melayani seperti biasa tanpa persiapan", "Meminta mereka memesan satu per satu"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'side work' dalam konteks F&B?", options: ["Tugas persiapan dan pembersihan di luar interaksi langsung dengan pelanggan", "Bekerja di samping meja pelanggan", "Melayani pelanggan di sisi ruangan", "Memasak makanan di dapur"], answer: 0 },
        { q: "Sikap terbaik saat melayani pelanggan yang membawa anak-anak adalah?", options: ["Mengabaikan anak-anak agar fokus pada orang tua", "Ramah, sabar, dan tawarkan kursi bayi jika tersedia", "Memarahi anak jika berisik", "Melarang anak-anak masuk ke area cafe"], answer: 1 },
        { q: "Langkah terbaik untuk menutup interaksi setelah pelanggan selesai makan adalah?", options: ["Langsung membersihkan meja tanpa ucapan", "Ucapkan 'Terima kasih, semoga datang kembali' dengan tulus", "Menagih pembayaran secara langsung", "Mengabaikan dan melanjutkan ke meja lain"], answer: 1 }
    ];

    // KUIS 3: FOOD SAFETY
    const foodSafetyQuestionsData = [
        { q: "Di mana posisi ibu jari yang benar saat membawa piring makanan?", options: ["Menyentuh permukaan makanan untuk stabilitas", "Tidak boleh menyentuh permukaan makanan atau bibir gelas", "Menempel di bagian bawah piring", "Bebas, tidak ada aturan khusus"], answer: 1 },
        { q: "Saat pelanggan menyatakan memiliki alergi, langkah pertama yang harus dilakukan server adalah?", options: ["Mengabaikan karena jarang terjadi", "Tanyakan ke dapur terlebih dahulu sebelum mengkonfirmasi pesanan", "Langsung memproses pesanan seperti biasa", "Mengatakan tidak ada alergen di semua menu"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'kontaminasi silang' (cross-contamination)?", options: ["Pindahnya alergen atau bakteri dari satu makanan ke makanan lain", "Memasak dua makanan dalam waktu bersamaan", "Menyajikan makanan di piring yang sama", "Mencuci piring di air yang sama"], answer: 0 },
        { q: "Teknik memegang gelas yang benar agar tetap higienis adalah?", options: ["Pegang bagian atas gelas (area bibir)", "Pegang bagian bawah atau sisi bawah", "Pegang di bagian tengah", "Pegang dengan dua tangan"], answer: 1 },
        { q: "Jika makanan terlihat tidak fresh atau plating-nya rusak, tindakan yang tepat adalah?", options: ["Tetap diantar dan berharap pelanggan tidak memperhatikan", "Kembalikan ke dapur dan minta ulang", "Memberi garnish tambahan sendiri", "Mengabaikan"], answer: 1 },
        { q: "Untuk meja dengan pelanggan alergi berat, prosedur khusus yang harus dilakukan adalah?", options: ["Layani seperti biasa", "Sanitasi meja terlebih dahulu sebelum menyajikan", "Tidak perlu sanitasi khusus", "Pindahkan pelanggan ke meja lain"], answer: 1 },
        { q: "Berapa lama makanan panas boleh dibiarkan di pass counter sebelum diantar?", options: ["5 menit", "Maksimal 2 menit", "10 menit", "15 menit"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'anafilaksis'?", options: ["Reaksi alergi berat yang bisa mengancam nyawa", "Sakit kepala ringan", "Demam biasa", "Batuk berdahak"], answer: 0 },
        { q: "Cara paling aman membawa banyak pesanan sekaligus adalah?", options: ["Membawa satu per satu agar tidak jatuh", "Gunakan service tray untuk stabilitas", "Meminta bantuan pelanggan", "Menunggu hingga beberapa pesanan selesai"], answer: 1 },
        { q: "Jika terjadi tumpahan minuman di lantai, apa yang harus segera dilakukan?", options: ["Biarkan hingga kering", "Segera lap dan pasang tanda peringatan", "Tidak peduli", "Panggil cleaning service saja"], answer: 1 },
        { q: "Apa definisi dari 'food safety'?", options: ["Upaya menjaga makanan agar aman dari kontaminasi dan bakteri", "Memasak dengan cepat", "Menyajikan makanan dengan hiasan menarik", "Menggunakan bahan-bahan mahal"], answer: 0 },
        { q: "Jika pelanggan alergi kacang memesan makanan yang mengandung kacang, tindakan yang benar adalah?", options: ["Diamkan agar pelanggan tidak khawatir", "Beri tahu pelanggan dan tawarkan alternatif", "Langsung buatkan tanpa memberitahu", "Mengabaikan pernyataan alergi"], answer: 1 },
        { q: "Apa kepanjangan dari HACCP?", options: ["Sistem keamanan pangan internasional", "Sistem kasir otomatis", "Sistem reservasi pelanggan", "Sistem pelatihan karyawan"], answer: 0 },
        { q: "Cara menjaga minuman dingin tetap dingin adalah?", options: ["Tidak usah pakai es", "Tambahkan es batu jika perlu", "Didiamkan di suhu ruang", "Dipanaskan sebelum disajikan"], answer: 1 },
        { q: "Jika melihat makanan jatuh ke lantai, tindakan yang paling profesional adalah?", options: ["Ambil dan tetap sajikan", "Buang dan minta ulang", "Diamkan", "Beri ke pelanggan"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'cross-contamination'?", options: ["Kontaminasi silang antara makanan mentah dan matang", "Memasak dua makanan bersama", "Mencuci piring", "Menyajikan makanan"], answer: 0 },
        { q: "Jika ada pelanggan yang batuk-batuk di area makanan, langkah terbaik adalah?", options: ["Mengabaikan", "Menjaga jarak dan memastikan makanan tetap tertutup", "Memarahi", "Mengusir"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'personal hygiene'?", options: ["Kebersihan diri server", "Kebersihan meja", "Kebersihan dapur", "Kebersihan lantai"], answer: 0 },
        { q: "Jika seragam kotor atau terkena noda saat bekerja, langkah yang tepat adalah?", options: ["Tetap dipakai hingga shift selesai", "Ganti dengan seragam bersih", "Tidak masalah", "Dicuci di tempat"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'sanitasi'?", options: ["Proses membersihkan dan mensterilkan permukaan", "Memasak", "Menyajikan makanan", "Menghias makanan"], answer: 0 },
        { q: "Jika pelanggan meminta makanan yang mengandung bahan mentah, langkah terbaik adalah?", options: ["Langsung berikan", "Tanyakan ke dapur dan beri informasi risiko", "Menolak dengan kasar", "Mengabaikan"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'allergen'?", options: ["Zat yang menyebabkan reaksi alergi", "Bumbu dapur", "Bahan makanan utama", "Minuman"], answer: 0 },
        { q: "Jika ada kecoa atau serangga di area dine-in, tindakan yang harus dilakukan adalah?", options: ["Biarkan", "Laporkan ke manajer dan segera bersihkan", "Tidak peduli", "Tangkap sendiri"], answer: 1 },
        { q: "Cara yang benar memberikan tambahan es kepada pelanggan adalah?", options: ["Berikan dengan tangan kosong", "Gunakan sendok es atau alat khusus", "Tidak perlu", "Berikan dengan gelas tanpa alat"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'food-borne illness'?", options: ["Penyakit akibat makanan terkontaminasi", "Flu biasa", "Demam", "Sakit kepala"], answer: 0 }
    ];

    // KUIS 4: CLEANING
    const cleaningQuestionsData = [
        { q: "Langkah pertama yang harus dilakukan setelah pelanggan pergi dari meja adalah?", options: ["Langsung lap meja", "Lakukan bussing (angkat piring & gelas)", "Bersihkan kursi", "Sapu lantai"], answer: 1 },
        { q: "Pembersih apa yang wajib digunakan untuk membersihkan meja makan?", options: ["Pembersih lantai biasa", "Food-grade sanitizer", "Pemutih pakaian", "Air biasa"], answer: 1 },
        { q: "Apa makna dari prinsip 'clean as you go'?", options: ["Membersihkan setelah shift selesai", "Membersihkan segera setelah terlihat kotor", "Membersihkan hanya di pagi hari", "Tidak membersihkan area selama jam sibuk"], answer: 1 },
        { q: "Berapa target waktu maksimal untuk reset meja (turnaround) setelah pelanggan pergi?", options: ["5 menit", "2 menit", "10 menit", "1 menit"], answer: 1 },
        { q: "Alat yang paling tepat untuk membersihkan kaca tanpa meninggalkan bekas adalah?", options: ["Kain lap biasa", "Microfiber + pembersih kaca", "Spon kasar", "Kertas tisu"], answer: 1 },
        { q: "Cara paling aman untuk membersihkan langit-langit atau sudut tinggi adalah?", options: ["Menggunakan tangga", "Gunakan duster dengan gagang panjang", "Melompat", "Tidak perlu dibersihkan"], answer: 1 },
        { q: "Jika terjadi tumpahan minuman di lantai, tindakan yang paling cepat dan tepat adalah?", options: ["Biarkan sampai kering", "Segera lap dengan kain pel", "Tutup dengan serbet", "Panggil manajer"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'bussing' dalam konteks kebersihan?", options: ["Mengantar pesanan", "Membersihkan meja setelah pelanggan pergi", "Menyiapkan makanan", "Menghitung uang"], answer: 1 },
        { q: "Apa yang harus dilakukan dengan sisa makanan di piring setelah proses bussing?", options: ["Dibuang ke wastafel", "Dibuang ke organic/trash bin", "Diberikan ke pelanggan lain", "Disimpan untuk nanti"], answer: 1 },
        { q: "Permukaan meja yang aman untuk kontak makanan harus dibersihkan dengan?", options: ["Pembersih lantai", "Food-grade sanitizer", "Sabun cuci piring", "Air panas"], answer: 1 },
        { q: "Area apa saja yang harus diperiksa saat melakukan floor patrol?", options: ["Meja dan kursi", "Lantai, kaca, dan langit-langit", "Toilet dan area komunal", "Semua jawaban benar"], answer: 3 },
        { q: "Jika ada noda membandel di meja yang tidak hilang dengan lap biasa, langkah yang tepat adalah?", options: ["Diamkan", "Gunakan cleaner khusus dan lap dengan kuat", "Tutup dengan taplak", "Pindahkan meja"], answer: 1 },
        { q: "Apa yang harus dilakukan dengan lap yang sudah kotor setelah digunakan?", options: ["Digunakan lagi", "Dicuci dan diganti dengan lap bersih", "Dibuang", "Diberikan ke orang lain"], answer: 1 },
        { q: "Cara membersihkan area outdoor (teras) yang paling efektif adalah?", options: ["Sapu dan siram dengan air", "Hanya sapu", "Hanya pel", "Tidak perlu dibersihkan"], answer: 0 },
        { q: "Jika ada sarang laba-laba di langit-langit, tindakan yang tepat adalah?", options: ["Biarkan", "Bersihkan dengan duster", "Semprot dengan air", "Panggil tukang"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'mise en place' dalam konteks cleaning?", options: ["Menata ulang peralatan makan dan pelengkap meja", "Menyimpan piring", "Mengecat ulang meja", "Memindahkan meja"], answer: 0 },
        { q: "Apa yang harus dilakukan dengan peralatan makan yang sudah dicuci?", options: ["Ditaruh sembarangan", "Dikeringkan dan disimpan di tempat yang sesuai", "Dibiarkan basah", "Diberikan ke pelanggan"], answer: 1 },
        { q: "Jika melihat serangga di area dine-in, tindakan yang paling profesional adalah?", options: ["Biarkan", "Segera laporkan dan bersihkan", "Tangkap sendiri", "Tutup mata"], answer: 1 },
        { q: "Saat membersihkan toilet, langkah yang benar adalah?", options: ["Bersihkan wastafel, kloset, dan lantai dengan disinfektan", "Hanya sapu", "Tidak perlu", "Siram air saja"], answer: 0 },
        { q: "Apa yang dimaksud dengan 'disinfektan'?", options: ["Pembersih yang membunuh kuman dan bakteri", "Pewangi ruangan", "Pembersih kaca", "Pembersih lantai"], answer: 0 },
        { q: "Jika ada tumpahan makanan di lantai, langkah terbaik adalah?", options: ["Biarkan", "Bersihkan segera dengan pel atau lap", "Tutup dengan karpet", "Pindahkan meja"], answer: 1 },
        { q: "Jika pelanggan meninggalkan barang berharga di meja, tindakan yang tepat adalah?", options: ["Ambil dan simpan di tempat aman", "Biarkan", "Buang", "Serahkan ke manajer"], answer: 0 },
        { q: "Apa yang dimaksud dengan 'floor patrol'?", options: ["Berjalan-jalan tanpa tujuan", "Inspeksi rutin untuk menjaga kebersihan dan kenyamanan", "Membersihkan lantai", "Menghitung pelanggan"], answer: 1 },
        { q: "Apa yang harus dilakukan dengan lap meja setelah digunakan?", options: ["Dibuang", "Dicuci dan dikeringkan", "Digunakan lagi", "Diberikan ke dapur"], answer: 1 },
        { q: "Jika pelanggan mengeluh area kotor, respons yang paling profesional adalah?", options: ["Mengabaikan", "Minta maaf dan segera bersihkan", "Menyalahkan tim lain", "Meminta pelanggan pindah"], answer: 1 }
    ];

    // KUIS 5: KOMPLAIN
    const complaintQuestionsData = [
        { q: "Apa singkatan dari LEARN dalam penanganan komplain?", options: ["Listen, Empathize, Apologize, Resolve, Notify", "Laugh, Eat, Ask, Run, Notice", "Look, Enter, Act, React, Note", "Learn, Earn, Ask, Reject, Nod"], answer: 0 },
        { q: "Langkah pertama yang paling krusial saat menangani komplain adalah?", options: ["Memberi diskon", "Mendengarkan dengan penuh perhatian", "Memanggil manager", "Membantah"], answer: 1 },
        { q: "Setelah pelanggan selesai mengeluh, langkah selanjutnya yang paling tepat adalah?", options: ["Mengabaikan", "Minta maaf dan tawarkan solusi", "Berkata kasar", "Meminta pelanggan pergi"], answer: 1 },
        { q: "Apa yang paling tidak boleh dilakukan saat menangani komplain?", options: ["Mendengarkan", "Membantah pelanggan", "Minta maaf", "Tawarkan solusi"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'service recovery'?", options: ["Memperbaiki pengalaman pelanggan setelah terjadi kesalahan", "Memberi diskon besar-besaran", "Menambah pesanan", "Mempercepat waktu"], answer: 0 },
        { q: "Cara paling efektif menunjukkan empati pada pelanggan adalah?", options: ["Dengan mengatakan 'Saya sangat memahami kekesalan Anda'", "Dengan diam", "Dengan tertawa", "Dengan mengabaikan"], answer: 0 },
        { q: "Jika pelanggan marah karena makanan tidak sesuai, respons terbaik adalah?", options: ["Membantah", "Minta maaf dan tawarkan ganti menu", "Mengusir", "Memanggil polisi"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'empathy' dalam hospitality?", options: ["Kemampuan merasakan apa yang dirasakan pelanggan", "Kemampuan memasak", "Kemampuan menghitung", "Kemampuan berbicara"], answer: 0 },
        { q: "Jika pelanggan mengeluh tentang sikap server lain, langkah yang tepat adalah?", options: ["Membela server lain", "Dengarkan dengan baik dan sampaikan ke manajer", "Mengabaikan", "Memarahi pelanggan"], answer: 1 },
        { q: "Jika solusi yang ditawarkan ditolak pelanggan, langkah terbaik adalah?", options: ["Menyerah", "Tanyakan solusi yang mereka inginkan dan koordinasikan dengan manajer", "Memaksa", "Mengusir"], answer: 1 },
        { q: "Mengapa setiap komplain penting untuk dicatat?", options: ["Untuk evaluasi dan perbaikan tim", "Untuk menghukum server", "Untuk laporan keuangan", "Tidak perlu dicatat"], answer: 0 },
        { q: "Jika komplain terjadi di meja saat jam sibuk, cara terbaik menanganinya adalah?", options: ["Minta pelanggan pindah ke tempat sepi", "Dengarkan dan tawarkan solusi dengan tetap tenang", "Mengabaikan", "Memanggil semua pelanggan"], answer: 1 },
        { q: "Jika pelanggan meminta kompensasi, langkah yang paling profesional adalah?", options: ["Langsung memberi uang", "Koordinasikan dengan manajer dan berikan sesuai kebijakan", "Menolak", "Memarahi"], answer: 1 },
        { q: "Apa yang dimaksud dengan sikap 'defensive' dalam komunikasi?", options: ["Bersikap membela diri dan tidak mau menerima kesalahan", "Bersikap terbuka", "Mendengarkan", "Minta maaf"], answer: 0 },
        { q: "Jika pelanggan mengeluh tentang kebersihan, respons yang paling tepat adalah?", options: ["Mengabaikan", "Minta maaf dan segera bersihkan area", "Menyalahkan tim cleaning", "Meminta pelanggan pergi"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'complain' dalam konteks F&B?", options: ["Kritik atau keluhan dari pelanggan", "Pujian", "Pesanan", "Pembayaran"], answer: 0 },
        { q: "Jika pelanggan marah dengan volume tinggi, cara terbaik menghadapinya adalah?", options: ["Membalas dengan volume tinggi", "Tetap tenang dan bicara dengan nada rendah", "Menghindar", "Memanggil polisi"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'Notify' dalam metode LEARN?", options: ["Memberitahu pelanggan tentang solusi dan memastikan kepuasan", "Menghubungi polisi", "Memberi notifikasi di sistem", "Menulis laporan"], answer: 0 },
        { q: "Jika pelanggan mengeluh tentang harga, cara terbaik menjawab adalah?", options: ["Memberi diskon langsung", "Jelaskan komposisi dan kualitas produk dengan sopan", "Mengabaikan", "Memarahi"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'gesture of goodwill'?", options: ["Tindakan kecil untuk menunjukkan itikad baik (misal: minuman gratis)", "Diskon besar", "Menambah pesanan", "Meminta maaf"], answer: 0 },
        { q: "Jika pelanggan tidak puas dengan solusi yang diberikan, langkah selanjutnya adalah?", options: ["Menyerah", "Libatkan manajer untuk solusi lebih lanjut", "Mengusir", "Mengabaikan"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'follow-up' dalam penanganan komplain?", options: ["Menindaklanjuti kepuasan pelanggan setelah solusi diberikan", "Mengikuti pelanggan", "Mengejar pelanggan", "Mengabaikan"], answer: 0 },
        { q: "Cara terbaik menutup interaksi komplain adalah?", options: ["Diam", "Ucapkan terima kasih atas masukannya dan sampaikan permintaan maaf", "Langsung pergi", "Memarahi"], answer: 1 },
        { q: "Jika komplain disebabkan oleh kesalahan server, sikap terbaik adalah?", options: ["Menutupi kesalahan", "Mengakui kesalahan dan minta maaf dengan tulus", "Menyalahkan orang lain", "Mengabaikan"], answer: 1 },
        { q: "Apa yang dimaksud dengan 'customer retention'?", options: ["Usaha membuat pelanggan kembali lagi", "Mengusir pelanggan", "Menolak pelanggan", "Mengabaikan pelanggan"], answer: 0 }
    ];
