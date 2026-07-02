    // =============================================
    // DATA SOP (15 steps) - untuk modal
    // =============================================
    const stepData = {
        1: { title: 'Greeting & Sambutan', role: '👤 Kasir · Barista · Server', 
            sop: `<p><strong>Tujuan :</strong> Memberikan kesan pertama yang hangat, tulus, dan profesional — karena 10 detik pertama menentukan persepsi pelanggan terhadap keseluruhan pengalaman di Nara.</p>
                <ul>
                    <li><strong>Standar waktu :</strong> Sapa pelanggan <strong>maksimal 5 detik</strong> setelah pintu terbuka/pelanggan terlihat memasuki area. Siapa pun yang posisinya paling dekat pintu WAJIB menyapa terlebih dahulu, tidak perlu menunggu kasir.</li>
                    <li>Gunakan <strong>senyum tulus, kontak mata, dan sedikit anggukan/badan condong ke arah tamu</strong> — bukan sekadar mengucap salam sambil menunduk ke layar kasir.</li>
                    <li>Sesuaikan sapaan dengan waktu (pagi/siang/sore/malam) dan intonasi yang hangat, bukan datar atau terburu-buru.</li>
                    <li>Jika sedang melayani tamu lain, tetap berikan <strong>eye contact singkat + senyum</strong> ke tamu yang baru datang sebagai tanda "saya lihat Anda, mohon tunggu sebentar".</li>
                    <li>Untuk tamu regular/dikenal, tambahkan sentuhan personal (sebut nama bila tahu) agar mereka merasa diingat.</li>
                </ul>
                <p><strong>Kesalahan umum yang harus dihindari :</strong></p>
                <ul><li>Menyapa sambil sibuk dengan HP atau mengobrol dengan rekan kerja.</li><li>Menyapa dengan nada datar/monoton tanpa senyum.</li><li>Membiarkan tamu berdiri lebih dari 5 detik tanpa sapaan apa pun.</li></ul>`, 
            script: `<div class="script-box">
                <p><span class="speaker">Kasir/Server/Barista :</span> "Selamat pagi/siang/sore/malam, welcome to NARA! 😊"</p>
                <p><span class="speaker">Variasi saat ramai :</span> "Selamat datang di Nara! Sebentar ya, kami bantu segera." <em>(sambil senyum &amp; kontak mata, meski sedang melayani tamu lain)</em></p>
                <p><span class="speaker">Untuk tamu regular :</span> "Selamat siang, Pak/Bu! Senang lihat Bapak/Ibu lagi di sini."</p>
            </div>` },
        2: { title: 'Edukasi Menu', role: '👤 Kasir', 
            sop: `<p><strong>Tujuan :</strong> Membantu pelanggan memahami pilihan menu secara akurat dan meyakinkan, sehingga pelanggan merasa yakin dengan pilihannya — bukan menebak-nebak.</p>
                <ul>
                    <li>Kuasai deskripsi setiap kategori menu — signature drink, makanan utama, dan menu pendamping (pastry/roti) — termasuk bahan utama, rasa, tekstur, dan varian topping yang tersedia.</li>
                    <li>Jelaskan tingkat manis dan pilihan blend/upgrade yang bisa disesuaikan dengan selera pelanggan.</li>
                    <li>Gunakan kata sifat yang menggugah selera namun tetap jujur (mis. "creamy", "ringan", "bold") — <strong>jangan pernah melebih-lebihkan</strong> deskripsi produk yang bisa mengecewakan ekspektasi tamu.</li>
                    <li>Jika pelanggan terlihat ragu atau baru pertama kali datang, tawarkan <strong>rekomendasi berdasarkan preferensi</strong> mereka (mis. suka manis, suka pahit, ingin yang ringan).</li>
                    <li>Jika ada pertanyaan yang tidak bisa dijawab (alergen spesifik, stok bahan), <strong>jangan menebak</strong> — konfirmasi ke dapur/barista terlebih dahulu.</li>
                </ul>`, 
            script: `<div class="script-box">
                <p><span class="speaker">Kasir :</span> "Untuk signature drink kami, teksturnya lembut dengan foam yang creamy. Untuk menu makanan utama, kami ada pilihan kuah dan kering, dengan beberapa varian topping favorit."</p>
                <p><span class="speaker">Saat pelanggan ragu :</span> "Kalau Bapak/Ibu suka rasa yang tidak terlalu manis, saya rekomendasikan varian original ya. Kalau suka yang lebih creamy dan manis, bisa coba varian favorit kami."</p>
            </div>` },
        3: { title: 'Upselling', role: '👤 Kasir', 
            sop: `<p><strong>Tujuan :</strong> Meningkatkan nilai transaksi secara natural, tanpa terkesan memaksa — dengan menempatkan diri sebagai konsultan menu, bukan sales.</p>
                <ul>
                    <li>Tawarkan extra shot atau upgrade blend kopi premium dengan biaya tambahan, <strong>sebutkan nominal tambahan biaya secara jelas dan transparan sejak awal</strong> agar tidak ada kesan "biaya tersembunyi".</li>
                    <li>Rekomendasikan menu pendamping (pastry/roti) yang cocok dipadukan dengan pesanan pelanggan.</li>
                    <li>Lakukan upselling <strong>maksimal 1 kali penawaran per kategori</strong> (minuman & makanan) — jika pelanggan menolak, hormati keputusannya dan lanjutkan tanpa memaksa lagi.</li>
                    <li>Perhatikan waktu yang tepat: sesaat setelah pelanggan menyebutkan pesanan utama, sebelum readback final.</li>
                </ul>
                <p><strong>Kesalahan umum :</strong> menawarkan upsell berkali-kali setelah ditolak, atau tidak menyebutkan biaya tambahan sampai saat pembayaran (berpotensi memicu komplain).</p>`, 
            script: `<div class="script-box">
                <p><span class="speaker">Kasir :</span> "Untuk minumannya, Bapak/Ibu bisa tambahkan extra shot atau upgrade ke blend premium untuk rasa yang lebih kompleks. Ada biaya tambahan Rp X untuk extra shot, mau dicoba?"</p>
                <p><span class="speaker">Jika ditolak :</span> "Baik, tidak masalah, Pak/Bu. Untuk pesanannya saya lanjutkan sesuai standar ya." <em>(langsung lanjut ke konfirmasi, tanpa menawarkan ulang)</em></p>
            </div>` },
        4: { title: 'Konfirmasi Pemesanan', role: '👤 Kasir', 
            sop: `<p><strong>Tujuan :</strong> Menghindari kesalahan pesanan yang berpotensi menjadi komplain dan memakan waktu produksi ulang.</p>
                <ul>
                    <li><strong>Wajib</strong> mengulang (readback) seluruh pesanan sebelum diproses ke sistem kasir — tanpa terkecuali, termasuk pesanan sederhana sekalipun.</li>
                    <li>Konfirmasi secara spesifik: varian, tingkat manis, blend, extra shot, dan topping.</li>
                    <li>Bicara dengan <strong>jelas dan cukup pelan</strong> agar pelanggan bisa mengoreksi jika ada yang salah dengar.</li>
                    <li>Tunggu konfirmasi verbal ("iya, benar") dari pelanggan sebelum menekan tombol proses di kasir.</li>
                </ul>`, 
            script: `<div class="script-box">
                <p><span class="speaker">Kasir :</span> "Baik, saya ulangi ya: satu signature drink dengan tingkat manis regular dan extra shot, satu menu makanan utama kuah dengan topping pilihan. Apakah sudah benar, Bapak/Ibu?"</p>
                <p><span class="speaker">Jika ada koreksi :</span> "Baik, saya perbaiki ya. Jadi jadinya [ulangi versi yang benar]. Sudah sesuai sekarang?"</p>
            </div>` },
        5: { title: 'Pembayaran di Awal', role: '👤 Kasir', 
            sop: `<p><strong>Tujuan :</strong> Memproses transaksi dengan akurat, cepat, dan transparan sesuai sistem prepaid (bayar di awal) Nara.</p>
                <ul>
                    <li>Terima pembayaran melalui Cash, QRIS, atau EDC sesuai preferensi pelanggan.</li>
                    <li>Sebutkan <strong>total tagihan secara jelas</strong> sebelum menerima pembayaran.</li>
                    <li>Untuk pembayaran cash, hitung kembalian <strong>di depan pelanggan</strong> agar transparan, hindari kesalahan hitung.</li>
                    <li>Cetak struk dan siapkan nomor meja segera setelah transaksi berhasil.</li>
                    <li>Jika transaksi EDC/QRIS gagal, tetap tenang dan informasikan dengan sopan, tawarkan metode pembayaran alternatif.</li>
                </ul>`, 
            script: `<div class="script-box">
                <p><span class="speaker">Kasir :</span> "Totalnya Rp 85.000, Bapak/Ibu. Ini struk dan nomor mejanya #07. Nanti pesanan akan kami antar ke meja."</p>
                <p><span class="speaker">Saat pembayaran cash :</span> "Uangnya Rp 100.000 ya, Pak. Kembaliannya Rp 15.000, saya hitung ulang di depan Bapak ya."</p>
            </div>` },
        6: { title: 'Penyerahan Bill & Nomor Meja', role: '👤 Kasir', 
            sop: `<p><strong>Tujuan :</strong> Memberikan instruksi yang jelas agar pelanggan tidak bingung mengenai proses selanjutnya.</p>
                <ul>
                    <li>Berikan struk dan nomor meja secara bersamaan, sebutkan nomor meja dengan jelas (verbal + tunjukkan fisik nomor meja).</li>
                    <li>Informasikan apakah pesanan akan diantar ke meja (dine-in) atau dibungkus di kasir (take away).</li>
                    <li>Arahkan pelanggan ke area duduk yang tersedia bila mereka terlihat ragu memilih tempat (Indoor/Outdoor/Komunal).</li>
                    <li>Ucapkan kalimat penutup yang ramah untuk menutup interaksi di kasir dengan kesan positif.</li>
                </ul>`, 
            script: `<div class="script-box">
                <p><span class="speaker">Kasir :</span> "Silakan duduk di mana saja, nanti pesanan akan kami antar langsung. Selamat menikmati di Nara!"</p>
                <p><span class="speaker">Untuk take away :</span> "Baik, pesanan take away ini akan kami siapkan sekitar 10 menit ya, Bapak/Ibu bisa menunggu di sini atau saya panggilkan nomornya."</p>
            </div>` },
        7: { title: 'Pelanggan Duduk & Display Nomor Meja', role: '👤 Customer Journey', 
            sop: `<p><strong>Tujuan :</strong> Memastikan nomor meja terlihat jelas oleh tim produksi agar pesanan sampai ke meja yang tepat.</p>
                <ul>
                    <li>Pelanggan memilih meja sesuai preferensi (Indoor/Outdoor/Komunal).</li>
                    <li>Nomor meja WAJIB diletakkan tegak dan menghadap ke arah lalu lalang server/bar, di posisi yang mudah terlihat — bukan tersembunyi di balik gelas atau tas.</li>
                    <li>Jika pelanggan pindah meja setelah pembayaran, WAJIB informasikan ke kasir/server terdekat agar nomor meja tercatat ulang.</li>
                </ul>`, 
            script: `<div class="script-box"><p><em>Jika pelanggan bingung, server membantu :</em><br><span class="speaker">Server :</span> "Silakan duduk di sini, nomor mejanya bisa ditaruh di sisi meja ini."</p><p><em>Jika pelanggan pindah meja :</em><br><span class="speaker">Server :</span> "Baik, saya update nomor mejanya ya supaya pesanan Bapak/Ibu tetap sampai dengan benar."</p></div>` },
        8: { title: 'Produksi', role: '👤 Production', 
            sop: `<p><strong>Tujuan :</strong> Menghasilkan produk sesuai standar rasa, tampilan, dan waktu — konsistensi adalah kunci kepercayaan pelanggan terhadap kualitas Nara.</p>
                <ul>
                    <li>Barista membuat signature drink sesuai resep standar (foam rapi, layering jelas, garnish sesuai SOP) — <strong>tidak boleh berimprovisasi</strong> tanpa persetujuan Shift Leader/Manager.</li>
                    <li>Kitchen menyiapkan menu makanan utama sesuai standar penyajian, termasuk porsi dan plating yang konsisten.</li>
                    <li><strong>Standar waktu produksi minuman : 1 - 5 menit</strong> sejak order diterima oleh barista.</li>
                    <li><strong>Minuman signature wajib diantar maksimal 3 menit setelah selesai dibuat</strong> agar kualitas foam dan tampilan tetap optimal — koordinasikan dengan server agar tidak menumpuk di pass counter.</li>
                    <li>Jika terjadi keterlambatan bahan/stok, barista/kitchen WAJIB melaporkan ke kasir agar pelanggan bisa diinformasikan lebih awal.</li>
                </ul>`, 
            script: `<div class="script-box"><p><em>Proses internal, tidak ada interaksi langsung dengan pelanggan.</em></p><p><em>Jika ada kendala stok/waktu produksi memanjang, informasikan segera ke kasir/server :</em><br><span class="speaker">Barista/Kitchen :</span> "Untuk meja 07, mohon informasikan tambahan waktu sekitar 5 menit karena [alasan singkat]."</p></div>` },
        9: { title: 'Quality Check', role: '👤 Server', 
            sop: `<p><strong>Tujuan :</strong> Menjadi filter terakhir sebelum produk sampai ke tangan pelanggan — mencegah komplain akibat kesalahan yang sebenarnya bisa dicegah.</p>
                <ul>
                    <li>Periksa tampilan setiap minuman signature (foam, layering, garnish sesuai standar).</li>
                    <li>Periksa minuman lainnya (foam, garnish, taburan sesuai resep).</li>
                    <li>Periksa menu makanan utama (kuah/kering, topping, porsi sesuai pesanan pada struk).</li>
                    <li>Cocokkan jumlah dan jenis item dengan nomor meja &amp; struk sebelum diangkat dari pass counter.</li>
                    <li><strong>Jangan pernah mengantar produk yang terlihat tidak sesuai standar</strong> — lebih baik minta ulang ke dapur/bar daripada berisiko komplain di meja.</li>
                </ul>`, 
            script: `<div class="script-box"><p><em>Pengecekan internal. Jika ada yang kurang, minta ulang ke dapur.</em></p><p><span class="speaker">Contoh ke barista :</span> "Maaf, foam-nya kurang rapi, boleh dibuat ulang sebentar?"</p></div>` },
        10: { title: 'Persiapan Cutleries', role: '👤 Server', 
            sop: `<p><strong>Tujuan :</strong> Memastikan pelanggan bisa langsung menikmati pesanan tanpa harus meminta peralatan tambahan.</p>
                <ul>
                    <li>Siapkan peralatan makan sesuai jenis menu yang dipesan (sendok, garpu, sumpit, dsb), lengkap dengan serbet dan tisu.</li>
                    <li>Sesuaikan jumlah peralatan dengan jumlah item pesanan (bukan jumlah orang) untuk mengantisipasi jika ingin berbagi.</li>
                    <li>Pastikan peralatan makan dalam kondisi bersih dan kering — periksa sekilas sebelum diletakkan di tray.</li>
                    <li>Letakkan seluruh perlengkapan rapi di service tray sebelum berjalan ke meja.</li>
                </ul>`, 
            script: `<div class="script-box"><p><em>Tahap persiapan internal, tidak ada interaksi dengan pelanggan.</em></p></div>` },
        11: { title: 'Pengantaran Pesanan', role: '👤 Server', 
            sop: `<p><strong>Tujuan :</strong> Mengantarkan pesanan dengan cepat, aman, dan disertai informasi yang membantu pelanggan menikmati produk dalam kondisi terbaik.</p>
                <ul>
                    <li>Antar sesuai nomor meja — konfirmasi ulang nomor meja sebelum meletakkan pesanan jika ada keraguan.</li>
                    <li>Gunakan kata "Permisi" sebelum meletakkan pesanan di meja, agar tidak mengejutkan pelanggan.</li>
                    <li>Untuk minuman signature : "Ini minumannya, mohon segera dinikmati agar foam tetap sempurna."</li>
                    <li>Untuk makanan panas : "Ini pesanannya, masih panas, hati-hati ya" — sebutkan piring/mangkuk mana yang panas secara spesifik.</li>
                    <li>Letakkan pesanan dengan hati-hati, hindari suara berisik saat meletakkan piring/gelas.</li>
                    <li>Sebutkan nama menu saat meletakkan, agar pelanggan tahu pesanan mana yang mana (penting untuk meja dengan banyak pesanan berbeda).</li>
                </ul>`, 
            script: `<div class="script-box"><p><span class="speaker">Server :</span> "Permisi, ini minumannya, Bapak/Ibu. Mohon segera dinikmati agar foam-nya tetap sempurna ya!"</p><p><span class="speaker">Untuk makanan panas :</span> "Permisi, ini pesanan ramennya, masih panas, mohon hati-hati saat menikmati ya."</p></div>` },
        12: { title: 'Floor Patrol', role: '👤 Server', 
            sop: `<p><strong>Tujuan :</strong> Menjaga kenyamanan dan kebersihan area secara proaktif, serta mendeteksi kebutuhan pelanggan sebelum mereka harus memanggil staf.</p>
                <ul>
                    <li>Lakukan inspeksi rutin ke area Indoor, Outdoor, dan Komunal <strong>setiap 3-5 menit</strong> selama shift.</li>
                    <li>Cek meja kotor, tumpahan, sampah berserakan, dan kondisi toilet.</li>
                    <li>Perhatikan tanda-tanda pelanggan butuh bantuan: gelas kosong, tisu habis, tangan melambai, atau kontak mata mencari staf.</li>
                    <li>Sapa/tawarkan bantuan secara proaktif tanpa menunggu diminta — ini bagian dari prinsip "Antisipasi" dalam hospitality Nara.</li>
                </ul>`, 
            script: `<div class="script-box"><p><span class="speaker">Server :</span> "Ada yang bisa saya bantu, Bapak/Ibu?" <em>(jika pelanggan terlihat butuh bantuan)</em></p><p><span class="speaker">Proaktif :</span> "Permisi, apakah minumannya perlu ditambah es, Pak/Bu?"</p></div>` },
        13: { title: 'Bussing (Clearance) Meja', role: '👤 Server', 
            sop: `<p><strong>Tujuan :</strong> Menjaga area dine-in tetap bersih dan siap digunakan kembali, menerapkan prinsip "clear-as-you-go".</p>
                <ul>
                    <li>Buang sisa makanan ke trash bin/organic bin, jangan dibuang ke wastafel.</li>
                    <li>Bawa piring/gelas kotor ke scullery segera, jangan dibiarkan menumpuk di meja lain.</li>
                    <li>Lakukan clear-as-you-go — jika melihat gelas/piring kosong saat floor patrol, langsung angkat tanpa menunggu pelanggan selesai seluruhnya (dengan izin/perhatikan konteks).</li>
                    <li>Pastikan tidak ada barang pribadi pelanggan yang ikut terangkat.</li>
                </ul>`, 
            script: `<div class="script-box"><p><em>Dilakukan setelah pelanggan pergi, atau saat clear-as-you-go bila gelas/piring sudah kosong.</em></p><p><span class="speaker">Sebelum mengangkat piring kosong saat pelanggan masih di meja :</span> "Permisi, piringnya boleh saya angkat, Pak/Bu?"</p></div>` },
        14: { title: 'Deteksi Kepergian Pelanggan', role: '👤 Server / FOH', 
            sop: `<p><strong>Tujuan :</strong> Menutup pengalaman pelanggan dengan kesan positif, sekaligus mempercepat proses reset meja untuk pelanggan berikutnya.</p>
                <ul>
                    <li>Scan area setiap 3-5 menit untuk mendeteksi tanda-tanda kepergian.</li>
                    <li>Indikator : pelanggan berdiri, merapikan barang, mengambil tas, atau struk yang mulai dirapikan di meja.</li>
                    <li>Segera dekati dan ucapkan terima kasih sebelum pelanggan benar-benar keluar pintu, bukan setelahnya.</li>
                    <li>Jika memungkinkan, tanyakan singkat kepuasan mereka sebagai bentuk checkback terakhir.</li>
                </ul>`, 
            script: `<div class="script-box"><p><span class="speaker">Server :</span> "Terima kasih, Bapak/Ibu! Sampai jumpa kembali di Nara."</p><p><span class="speaker">Dengan checkback :</span> "Terima kasih sudah mampir, Bu. Semoga menu tadi sesuai dengan selera ya. Sampai jumpa lagi di Nara!"</p></div>` },
        15: { title: 'Reset Meja (Turnaround)', role: '👤 Server', 
            sop: `<p><strong>Tujuan :</strong> Mempercepat ketersediaan meja untuk pelanggan berikutnya tanpa mengorbankan standar kebersihan.</p>
                <ul>
                    <li>Sanitasi meja &amp; kursi dengan food-grade sanitizer — semprot ke permukaan meja (bukan ke lap), lap merata ke seluruh sisi.</li>
                    <li>Reset peralatan makan (mise en place) sesuai standar tata letak Nara.</li>
                    <li>Periksa lantai sekitar meja dari remahan/tumpahan sebelum menganggap meja selesai di-reset.</li>
                    <li><strong>Target waktu : maksimal 2 menit per meja</strong> sejak pelanggan pergi hingga meja siap digunakan kembali.</li>
                </ul>`, 
            script: `<div class="script-box"><p><em>Proses reset meja. Pastikan meja terlihat rapi, bersih, dan siap untuk pelanggan berikutnya sebelum ditinggalkan.</em></p></div>` }
    };

    // =============================================
    // DATA MATERI LENGKAP (untuk tab 2-5)
    // =============================================
    const materialData = {
        // ----- HOSPITALITY -----
        'hospitality_golden': {
            title: 'Golden Rule',
            role: '🌟 Prinsip Dasar',
            tujuan: 'Memahami prinsip dasar hospitality bahwa setiap tamu Nara harus dihormati dan dilayani dengan tulus, sebagai fondasi dari seluruh interaksi di lapangan.',
            content: `<ul>
                <li><strong>Golden Rule :</strong> "Perlakukan orang lain sebagaimana Anda ingin diperlakukan." Bayangkan diri Anda sebagai tamu — bagaimana Anda ingin disambut, dilayani, dan diperlakukan saat ada masalah?</li>
                <li>Pelanggan datang untuk merasakan <strong>pengalaman (experience)</strong>, bukan hanya makan dan minum. Suasana, keramahan, dan perhatian detail adalah bagian dari produk yang mereka bayar.</li>
                <li>Keramahan yang tulus akan membuat pelanggan merasa <strong>dihargai</strong> — dan pelanggan yang merasa dihargai akan kembali lagi (repeat customer) serta merekomendasikan Nara ke orang lain.</li>
                <li>Hospitality bukan tentang mengikuti skrip secara kaku, melainkan tentang <strong>ketulusan</strong> — skrip hanyalah panduan, sikap tulus yang membuatnya terasa nyata.</li>
                <li>Setiap crew adalah representasi brand Nara — bagaimana Anda bersikap pada satu tamu bisa membentuk keseluruhan persepsi mereka terhadap Nara.</li>
            </ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh :</span> "Selamat datang di Nara, Bapak/Ibu! Kami sangat senang bisa melayani Anda hari ini."</p></div>`
        },
        'hospitality_components': {
            title: 'Komponen Utama',
            role: '📌 6 Kunci',
            tujuan: 'Mengidentifikasi dan menerapkan 6 komponen utama hospitality yang membedakan pelayanan biasa dengan pelayanan berkelas.',
            content: `<ul>
                <li><strong>Senyum & Kontak Mata</strong> : Keramahan tulus yang terlihat sejak pandangan pertama — senyum yang mencapai mata, bukan senyum formalitas.</li>
                <li><strong>Komunikasi Baik</strong> : Mendengarkan aktif dan bahasa tubuh positif (menghadap ke tamu, tidak menyilangkan tangan).</li>
                <li><strong>Inisiatif</strong> : Antisipasi kebutuhan sebelum diminta — misalnya menawarkan tisu tambahan tanpa diminta saat melihat tamu makan makanan berkuah.</li>
                <li><strong>Konsistensi</strong> : Pelayanan sama baiknya untuk semua tamu, tanpa memandang penampilan, jumlah pesanan, atau lama mereka duduk.</li>
                <li><strong>Personalisasi</strong> : Ingat nama/preferensi pelanggan regular — sentuhan kecil ini menciptakan kesan "diperlakukan istimewa".</li>
                <li><strong>Perhatian Detail</strong> : Hal kecil yang membuat istimewa — meja rapi, air minum terisi, suhu ruangan nyaman, hingga posisi kursi yang pas.</li>
            </ul>
            <p style="margin-top:10px;"><em>Keenam komponen ini saling melengkapi — kekuatan di satu area tidak bisa menutupi kelemahan di area lain. Konsistensi menerapkan keenamnya secara bersamaan adalah kunci pelayanan berkelas.</em></p>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh Personalisasi :</span> "Selamat sore, Pak Budi! Menu seperti biasa?"</p><p><span class="speaker">Contoh Inisiatif :</span> "Permisi, saya bawakan tisu tambahan ya, Bu, siapa tahu perlu."</p></div>`
        },
        'hospitality_recovery': {
            title: 'Service Recovery',
            role: '🔄 Pemulihan',
            tujuan: 'Memulihkan pengalaman pelanggan setelah terjadi kesalahan, mengubah momen negatif menjadi kesempatan menunjukkan profesionalisme Nara.',
            content: `<ul>
                <li><strong>Dengarkan</strong> keluhan tanpa menyela — biarkan pelanggan menyelesaikan ceritanya sepenuhnya sebelum merespons.</li>
                <li><strong>Empati</strong> : Tunjukkan bahwa Anda memahami perasaan mereka, bukan hanya faktanya — "Saya memahami kekesalan Anda."</li>
                <li><strong>Minta Maaf</strong> dengan tulus, tanpa embel-embel pembelaan diri (hindari kata "tapi" setelah minta maaf).</li>
                <li><strong>Resolve</strong> : Tawarkan solusi konkret dan realistis — jangan berjanji sesuatu yang tidak bisa dipenuhi.</li>
                <li><strong>Notify</strong> : Informasikan solusi dan progresnya, lalu pastikan pelanggan puas sebelum meninggalkan meja.</li>
                <li>Prinsip penting : <strong>service recovery yang baik seringkali membuat pelanggan lebih loyal</strong> dibanding jika tidak pernah terjadi kesalahan sama sekali — karena mereka melihat bagaimana Nara menangani masalah dengan profesional.</li>
            </ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh :</span> "Saya minta maaf, Bu. Saya akan buatkan gantinya yang baru. Kami usahakan dalam 5 menit ya."</p><p><span class="speaker">Setelah solusi diberikan :</span> "Bagaimana, Bu, apakah sudah sesuai sekarang? Sekali lagi mohon maaf atas ketidaknyamanannya."</p></div>`
        },
        'hospitality_listening': {
            title: 'Active Listening',
            role: '👂 Komunikasi',
            tujuan: 'Melatih kemampuan mendengarkan dengan penuh perhatian agar kebutuhan dan keluhan pelanggan tertangkap secara akurat.',
            content: `<ul>
                <li>Berikan perhatian penuh — hentikan aktivitas lain saat pelanggan berbicara kepada Anda.</li>
                <li>Hindari menyela, bahkan saat Anda merasa sudah tahu apa yang akan mereka katakan.</li>
                <li>Tunjukkan bahwa Anda mendengar melalui anggukan, kontak mata, dan respon verbal singkat ("baik, Bu", "saya mengerti").</li>
                <li>Paraphrase (ulangi dengan kata sendiri) untuk memastikan pemahaman sebelum bertindak — ini mencegah kesalahan yang berujung komplain.</li>
                <li>Gunakan bahasa tubuh positif : badan sedikit condong ke arah tamu, tangan tidak disilangkan, ekspresi wajah terbuka.</li>
                <li>Active listening bukan hanya untuk komplain — gunakan juga saat menerima pesanan atau permintaan khusus, agar tidak terjadi kesalahan.</li>
            </ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh Paraphrase :</span> "Jadi, Bapak/Ibu ingin minumannya tanpa gula dan pakai susu almond. Benar?"</p></div>`
        },
        'hospitality_hygiene': {
            title: 'Penampilan & Hygiene',
            role: '🧼 Kebersihan Diri',
            tujuan: 'Menjaga kebersihan dan kerapian diri sebagai cerminan kualitas dan standar profesionalisme Nara di mata pelanggan.',
            content: `<ul>
                <li>Seragam <strong>bersih, rapi, disetrika</strong> — tidak kusut, tidak ada noda, dan dikenakan sesuai standar (lengkap dengan apron/name tag bila berlaku).</li>
                <li>Rambut rapi, tidak menutupi wajah — bila panjang, wajib diikat rapi selama shift.</li>
                <li>Kuku pendek dan bersih, tanpa cat kuku mencolok untuk yang bertugas menangani makanan/minuman langsung.</li>
                <li>Hindari parfum menyengat yang dapat mengganggu aroma makanan/minuman atau kenyamanan tamu di ruang tertutup.</li>
                <li>Name tag jelas terlihat, terpasang rapi di posisi standar.</li>
                <li>Sepatu tertutup, bersih, dan sesuai standar keselamatan kerja area F&B.</li>
            </ul>`,
            script: `<div class="script-box"><p>Cek penampilan di cermin sebelum shift dimulai — gunakan checklist: seragam, rambut, kuku, name tag, sepatu.</p></div>`
        },
        'hospitality_etika': {
            title: 'Etika Komunikasi',
            role: '🗣️ Sopan Santun',
            tujuan: 'Menggunakan bahasa dan sikap yang sopan dan profesional dalam setiap interaksi dengan pelanggan maupun rekan kerja.',
            content: `<ul>
                <li>Gunakan bahasa <strong>sopan dan profesional</strong> — hindari bahasa gaul/informal yang berlebihan saat berbicara dengan tamu.</li>
                <li>Panggil pelanggan dengan sebutan <strong>Bapak/Ibu</strong>, kecuali diminta memanggil dengan cara lain oleh tamu tersebut.</li>
                <li>Hindari slang, singkatan chat (mis. "gpp", "oke sist"), atau nada bicara yang terlalu santai kepada tamu.</li>
                <li>Jika pelanggan marah atau berbicara dengan nada tinggi, tetap <strong>tenang</strong> dan jawab dengan nada rendah dan terkontrol — jangan pernah membalas dengan nada yang sama.</li>
                <li>Jangan berdebat/membantah pendapat pelanggan secara langsung, meski Anda merasa benar — sampaikan penjelasan dengan cara yang tidak defensif.</li>
                <li>Hindari berbicara/bercanda dengan rekan kerja dalam jarak dengar tamu, terutama membahas hal yang tidak berkaitan dengan pekerjaan.</li>
            </ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh :</span> "Mohon maaf, Pak. Untuk pesanannya, kami membutuhkan waktu sekitar 7 menit. Apakah Bapak bersedia menunggu?"</p></div>`
        },
        'hospitality_tips': {
            title: 'Tips Praktis Nara',
            role: '💡 Penerapan',
            tujuan: 'Memberikan tips praktis berbasis standar industri hospitality yang bisa langsung diterapkan setiap shift.',
            content: `<ul>
                <li><strong>10-5 Rule</strong> : Berikan kontak mata/senyum saat tamu berjarak 10 langkah, dan ucapkan salam verbal saat berjarak 5 langkah.</li>
                <li><strong>Checkback</strong> : Tanyakan kepuasan tamu 2-3 menit setelah pesanan diantar — cukup waktu bagi mereka untuk mencicipi, namun tidak terlambat untuk memperbaiki bila ada masalah.</li>
                <li><strong>Antisipasi</strong> : Perhatikan gelas kosong, tisu habis, atau tanda-tanda tamu butuh sesuatu — tawarkan sebelum diminta.</li>
                <li><strong>Ucapan Terima Kasih</strong> : Selalu ucapkan saat pelanggan pergi, apa pun kondisi transaksinya (bahkan bila mereka tidak jadi memesan).</li>
                <li><strong>Ingat nama tamu regular</strong> : Catat mental preferensi tamu yang sering datang untuk personalisasi layanan berikutnya.</li>
                <li><strong>Jaga energi positif</strong> sepanjang shift — kelelahan atau mood buruk tidak boleh terlihat oleh tamu.</li>
            </ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh Checkback :</span> "Bagaimana minumannya, Pak? Sudah sesuai dengan selera?"</p></div>`
        },

        // ----- FOOD SAFETY -----
        'food_carry': {
            title: 'Cara Membawa Piring & Gelas',
            role: '🍽️ Teknik',
            tujuan: 'Menghindari kontaminasi silang saat membawa pesanan dari pass counter ke meja pelanggan.',
            content: `<ul>
                <li>Ibu jari <strong>tidak boleh</strong> menyentuh permukaan makanan, bagian dalam mangkuk/piring, atau bibir gelas (rim) — area ini kontak langsung dengan mulut/makanan tamu.</li>
                <li>Pegang piring dari <strong>bawah atau sisi luar (rim luar)</strong>, bukan menjangkau ke bagian dalam.</li>
                <li>Gelas dipegang di bagian <strong>bawah atau sisi bawah</strong>, jauh dari bibir gelas.</li>
                <li>Gunakan <strong>service tray</strong> untuk membawa lebih dari 2 item sekaligus, agar lebih stabil dan mengurangi risiko tumpah/jatuh.</li>
                <li>Jangan menumpuk piring kotor bersamaan dengan pesanan yang akan diantar — pisahkan area/tray-nya.</li>
                <li>Berjalan dengan langkah stabil, hindari tergesa-gesa terutama di area yang licin atau ramai.</li>
            </ul>`,
            script: `<div class="script-box"><p>Pengingat: Periksa kebersihan tangan sebelum membawa pesanan, dan pastikan tray dalam kondisi bersih setiap kali digunakan.</p></div>`
        },
        'food_allergen': {
            title: 'Penanganan Alergen',
            role: '⚠️ Keamanan',
            tujuan: 'Menangani pelanggan dengan alergi makanan secara hati-hati — kesalahan dalam hal ini dapat berakibat serius pada kesehatan tamu.',
            content: `<ul>
                <li>Setiap ada pelanggan menyebut alergi (kacang, susu, gluten, seafood, dll), <strong>WAJIB</strong> konfirmasi ke dapur/barista sebelum menjawab — jangan menjawab berdasarkan asumsi atau ingatan pribadi.</li>
                <li>Beri tahu pelanggan secara jujur jika suatu menu mengandung/berisiko kontak dengan alergen yang mereka sebutkan, lalu tawarkan alternatif menu yang lebih aman.</li>
                <li>Untuk alergi berat (severe allergy), informasikan ke dapur agar <strong>alat masak dan alat saji terpisah</strong> digunakan untuk menghindari kontaminasi silang (cross-contact).</li>
                <li>Sanitasi meja terlebih dahulu sebelum menyajikan, terutama jika meja sebelumnya digunakan untuk menu yang mengandung alergen terkait.</li>
                <li><strong>Jangan pernah menjamin "100% aman"</strong> jika dapur tidak memiliki area produksi yang benar-benar terpisah — sampaikan risiko dengan jujur dan biarkan tamu memutuskan.</li>
                <li>Catat informasi alergi tamu (bila regular) agar staf shift berikutnya juga aware.</li>
            </ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh :</span> "Baik, Bu. Saya cek ke dapur dulu ya apakah menu ini mengandung kacang."</p><p><span class="speaker">Jika terkonfirmasi mengandung alergen :</span> "Mohon maaf, Bu, menu ini mengandung kacang. Saya rekomendasikan menu [alternatif] yang lebih aman untuk Ibu."</p></div>`
        },
        'food_temperature': {
            title: 'Suhu & Ketepatan Waktu',
            role: '🌡️ Kualitas',
            tujuan: 'Memastikan makanan dan minuman disajikan pada suhu dan waktu yang tepat, karena keduanya sangat memengaruhi kualitas rasa dan keamanan pangan.',
            content: `<ul>
                <li>Minuman signature wajib diantar <strong>maksimal 3 menit</strong> setelah selesai dibuat, agar kualitas foam, layering, dan suhu penyajian tetap terjaga optimal.</li>
                <li>Makanan panas harus segera diantar, <strong>tidak boleh menunggu di pass counter lebih dari 2 menit</strong> — makanan yang terlalu lama menunggu berisiko turun suhu dan kualitas.</li>
                <li>Minuman dingin harus tetap dalam kondisi dingin saat disajikan (es tidak boleh mencair berlebihan sebelum sampai ke tamu).</li>
                <li>Bila ada penundaan pengantaran karena antrean/jarak meja, prioritaskan item yang paling sensitif terhadap suhu (mis. minuman signature dengan foam, makanan panas) untuk diantar lebih dulu.</li>
                <li>Suhu penyimpanan bahan baku (chiller/freezer) adalah tanggung jawab tim produksi, namun FOH tetap wajib melaporkan jika melihat display bahan yang terlihat tidak layak (basi/berubah warna) ke Shift Leader.</li>
            </ul>`,
            script: `<div class="script-box"><p>Jika minuman signature sudah terlalu lama menunggu di pass counter (lebih dari 3 menit), minta ulang ke barista daripada tetap diantar dalam kondisi tidak optimal.</p></div>`
        },
        'food_hygiene': {
            title: 'Personal Hygiene',
            role: '🧼 Standar',
            tujuan: 'Menjaga kebersihan diri untuk mencegah kontaminasi pada makanan dan minuman yang disajikan kepada pelanggan.',
            content: `<ul>
                <li>Cuci tangan dengan <strong>sabun, minimal 20 detik</strong>, sebelum mulai shift, sebelum dan sesudah menangani makanan, setelah dari toilet, dan setelah memegang uang/permukaan kotor.</li>
                <li>Gunakan <strong>hand sanitizer</strong> secara rutin di sela-sela aktivitas, terutama setelah menyentuh permukaan bersama (gagang pintu, meja kasir, HP).</li>
                <li>Jangan menyentuh hidung, mulut, telinga, atau rambut saat sedang menangani makanan atau minuman — jika tersentuh tanpa sengaja, cuci tangan ulang sebelum melanjutkan.</li>
                <li>Jika batuk/bersin, arahkan ke lipatan siku (bukan ke tangan), lalu cuci tangan segera setelahnya.</li>
                <li>Jangan bekerja menangani makanan/minuman dalam kondisi sakit menular (flu berat, diare, dll) — laporkan ke Shift Leader untuk penyesuaian tugas.</li>
                <li>Gunakan sarung tangan sekali pakai saat menangani makanan siap saji/topping yang tidak melalui proses pemasakan lanjutan.</li>
            </ul>`,
            script: `<div class="script-box"><p>Pengingat: Cuci tangan minimal 20 detik dengan sabun — nyanyikan "Happy Birthday" dua kali sebagai patokan durasi bila perlu.</p></div>`
        },
        'food_sanitasi': {
            title: 'Sanitasi & Kontaminasi Silang',
            role: '🧹 Mencegah',
            tujuan: 'Memahami pentingnya sanitasi dan mencegah kontaminasi silang (cross-contamination) antar area dan jenis makanan.',
            content: `<ul>
                <li>Sanitasi meja dengan <strong>food-grade sanitizer</strong> — bukan sembarang cairan pembersih, karena permukaan meja akan kontak langsung dengan makanan/tangan tamu.</li>
                <li>Gunakan <strong>alat saji terpisah</strong> untuk jenis makanan berbeda (misalnya, alat untuk daging tidak dicampur dengan alat untuk sayur/buah siap santap).</li>
                <li>Pisahkan <strong>lap meja</strong> dengan lap lantai/lap serbaguna — gunakan kode warna lap jika memungkinkan untuk menghindari tertukar.</li>
                <li>Jangan letakkan makanan mentah/setengah matang di area/permukaan yang sama dengan makanan siap saji tanpa alas pemisah.</li>
                <li>Kontaminasi silang bisa terjadi melalui tangan, alat, maupun permukaan — selalu berpikir "apa yang terakhir disentuh alat/tangan ini?" sebelum digunakan untuk item lain.</li>
            </ul>`,
            script: `<div class="script-box"><p>Jangan gunakan pembersih lantai untuk meja makan — dan jangan gunakan lap meja untuk mengelap lantai yang tumpah!</p></div>`
        },

        // ----- CLEANING -----
        'clean_meja': {
            title: 'Pembersihan Meja & Kursi',
            role: '🪑 Prosedur',
            tujuan: 'Membersihkan meja dan kursi dengan cepat, efektif, dan sesuai standar sanitasi agar siap digunakan pelanggan berikutnya.',
            content: `<ul>
                        <li><strong>Langkah 1 :</strong> Bussing — angkat piring, gelas, peralatan kotor terlebih dahulu dari meja.</li>
                        <li><strong>Langkah 2 :</strong> Buang sisa makanan ke trash bin/organic bin, bukan ke wastafel.</li>
                        <li><strong>Langkah 3 :</strong> Semprot meja dengan <strong>food-grade sanitizer</strong> secara merata ke seluruh permukaan.</li>
                        <li><strong>Langkah 4 :</strong> Lap meja dengan gerakan <strong>S-Pattern (zig-zag) searah</strong> dari sisi terjauh ke arah Anda. <strong>Dilarang gerakan memutar (circular)</strong> karena dapat meninggalkan noda dan tidak efektif.</li>
                        <li><strong>Langkah 5 :</strong> Lap kursi (dudukan dan sandaran), perhatikan sela-sela yang sering terlewat.</li>
                        <li><strong>Langkah 6 :</strong> Reset peralatan makan (mise en place) sesuai standar tata letak Nara.</li>
                        <li><strong>Langkah 7 :</strong> Periksa lantai sekitar meja dari remahan/tumpahan sebelum meninggalkan area.</li>
                        <li><strong>Target waktu :</strong> Maksimal 2 menit per meja.</li>
                    </ul>
                    <p style="margin-top:10px;"><em>Catatan : gunakan lap khusus meja (bukan lap lantai/toilet) untuk mencegah kontaminasi silang.</em></p>`,
            script: `<div class="script-box"><p>"Clean as you go" — jangan menunda pembersihan. Meja bersih adalah cerminan kualitas Nara dan berdampak langsung pada kecepatan turnover meja.</p></div>`
        },
        'clean_kaca': {
            title: 'Pembersihan Kaca',
            role: '🪟 Jendela & Partisi',
            tujuan: 'Membersihkan kaca hingga bening tanpa bekas usap, karena kaca yang bersih memberi kesan pertama yang kuat terhadap kerapian sebuah kafe.',
            content: `<ul>
                        <li>Gunakan <strong>pembersih kaca</strong> khusus dan <strong>lap microfiber</strong> (atau squeegee untuk area kaca besar).</li>
                        <li>Semprotkan cleaner ke <strong>permukaan kaca</strong> secara langsung, bukan ke lap, agar cairan tersebar merata.</li>
                        <li>Lap dengan gerakan <strong>zig-zag atau S-Pattern</strong> dari atas ke bawah untuk menghindari bekas usap dan tetesan.</li>
                        <li>Periksa hasil dari berbagai sudut/pencahayaan berbeda — noda sering baru terlihat dari sudut tertentu.</li>
                        <li>Bersihkan juga bingkai/kusen kaca dari debu yang menempel.</li>
                        <li>Jadwalkan pembersihan kaca area depan (etalase) lebih sering karena paling sering tersentuh tangan pelanggan.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Kaca bersih memberi kesan cafe yang terawat sejak pandangan pertama dari luar.</p></div>`
        },
        'clean_langit': {
            title: 'Langit-Langit, Dinding & Sudut',
            role: '🏗️ Area Tinggi',
            tujuan: 'Membersihkan area yang sering terlewat namun tetap terlihat oleh pelanggan, terutama saat mereka duduk cukup lama.',
            content: `<ul>
                        <li>Periksa langit-langit dan sudut ruangan untuk sarang laba-laba, debu, atau noda secara berkala.</li>
                        <li>Gunakan <strong>duster gagang panjang</strong> agar tidak perlu naik ke kursi/meja (risiko keselamatan kerja).</li>
                        <li>Bersihkan dinding yang terkena cipratan (area dekat dapur/bar) dengan lap basah dan cleaner sesuai jenis permukaan dinding.</li>
                        <li>Perhatikan ventilasi/AC — bersihkan filter dan kisi-kisi secara berkala agar sirkulasi udara tetap baik dan tidak berdebu.</li>
                        <li>Lampu dan fixture di langit-langit juga perlu dilap dari debu secara berkala agar pencahayaan tetap optimal.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Lakukan pembersihan area tinggi minimal seminggu sekali, atau lebih sering bila terlihat kotor saat floor patrol.</p></div>`
        },
        'clean_lantai': {
            title: 'Pembersihan Lantai',
            role: '🧹 Lantai',
            tujuan: 'Membersihkan lantai indoor dan outdoor agar tetap bersih, tidak licin, dan aman bagi pelanggan maupun staf.',
            content: `<ul>
                        <li>Sapu atau gunakan <strong>vacuum</strong> untuk mengangkat debu dan remahan sebelum proses pel/basah.</li>
                        <li>Indoor : gunakan <strong>mop basah</strong> dengan disinfektan, ganti air secara teratur (air kotor justru menyebarkan kotoran, bukan membersihkan).</li>
                        <li>Outdoor : sapu terlebih dahulu, lalu <strong>siram dengan air</strong> atau pel basah sesuai kondisi permukaan.</li>
                        <li>Perhatikan area di bawah meja dan kursi yang sering terlewat saat menyapu cepat.</li>
                        <li>Segera bersihkan tumpahan begitu terlihat — jangan menunggu jadwal pel rutin, karena berisiko membuat pelanggan/staf terpeleset.</li>
                        <li>Gunakan tanda peringatan "lantai licin" (wet floor sign) bila tersedia, saat proses pel di area yang masih dilalui pelanggan.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Lantai bersih dan tidak licin adalah prioritas keselamatan, bukan hanya estetika.</p></div>`
        },
        'clean_toilet': {
            title: 'Pembersihan Toilet (2 Toilet)',
            role: '🚽 Kebersihan Total',
            tujuan: 'Menjaga kebersihan toilet sebagai bagian penting dari pengalaman pelanggan — toilet yang kotor dapat merusak keseluruhan persepsi terhadap kualitas Nara, meski makanan dan pelayanannya baik.',
            content: `<ul>
                        <li>Periksa kondisi toilet secara rutin, <strong>setiap 30-60 menit</strong> selama jam operasional.</li>
                        <li>Pastikan <strong>sabun cuci tangan, tisu toilet, tisu tangan, dan pengharum ruangan</strong> selalu tersedia dan tidak habis.</li>
                        <li>Bersihkan <strong>wastafel, kloset, dan lantai</strong> dengan <strong>disinfektan</strong> khusus toilet, bukan sanitizer meja makan.</li>
                        <li>Bersihkan cermin dengan pembersih kaca hingga tidak berbekas.</li>
                        <li>Periksa ketersediaan air dan fungsi flush/keran secara berkala; laporkan segera ke Shift Leader jika ada kerusakan.</li>
                        <li>Gunakan checklist/paraf waktu pembersihan yang ditempel di toilet (bila tersedia) sebagai bukti kontrol kualitas.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Toilet bersih menunjukkan Nara peduli dengan detail — sekecil apa pun area itu.</p></div>`
        },
        'clean_komunal': {
            title: 'Pembersihan Area Komunal',
            role: '🛋️ Meja Bersama, Rak, Sofa',
            tujuan: 'Menjaga kebersihan area komunal yang digunakan bersama oleh banyak pelanggan berbeda, sehingga tetap nyaman dan higienis.',
            content: `<ul>
                        <li>Lap <strong>meja panjang bersama</strong> dengan food-grade sanitizer setiap kali ada pelanggan yang selesai menggunakannya.</li>
                        <li>Rapikan dan lap <strong>rak majalah / display</strong> dari debu secara berkala.</li>
                        <li>Lap <strong>sofa tunggu</strong> dan <strong>meja tinggi</strong> dengan lap bersih, perhatikan noda pada bahan kain/kulit sofa.</li>
                        <li>Periksa area sekitar komunal dari sampah, remah makanan, atau tumpahan minuman.</li>
                        <li>Area komunal sering digunakan lebih lama (nongkrong/kerja) — lakukan pengecekan lebih sering dibanding meja reguler.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Area komunal yang rapi membuat pelanggan nyaman untuk bersantai lebih lama, yang berdampak positif pada pengalaman mereka di Nara.</p></div>`
        },
        'clean_peralatan': {
            title: 'Peralatan & Bahan Pembersih',
            role: '🧺 Perlengkapan',
            tujuan: 'Mengetahui dan menggunakan peralatan pembersih yang tepat untuk setiap area, guna mencegah kontaminasi silang sekaligus menjaga hasil kebersihan yang optimal.',
            content: `<ul>
                        <li><strong>Lap microfiber</strong> — pisahkan berdasarkan area/warna: meja makan, kaca, lantai, dan toilet <strong>tidak boleh menggunakan lap yang sama</strong>.</li>
                        <li><strong>Food-grade sanitizer</strong> khusus untuk permukaan yang kontak dengan makanan (meja, meja komunal).</li>
                        <li><strong>Pembersih kaca</strong> dan squeegee untuk jendela, partisi, dan cermin.</li>
                        <li><strong>Pel dan ember</strong> — ganti air secara rutin (idealnya setiap beberapa meja/area agar tidak menyebar kotoran).</li>
                        <li><strong>Disinfektan</strong> khusus untuk toilet dan lantai, terpisah dari sanitizer meja makan.</li>
                        <li><strong>Sarung tangan sekali pakai</strong> wajib digunakan untuk pembersihan area kotor (toilet, sampah) dan tidak boleh dipakai bersamaan saat menangani makanan.</li>
                        <li><strong>Duster</strong> gagang panjang untuk area tinggi (langit-langit, ventilasi, lampu).</li>
                        <li>Simpan seluruh bahan kimia pembersih di tempat yang aman, berlabel jelas, dan terpisah dari area penyimpanan bahan makanan.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Gunakan alat yang tepat untuk area yang tepat — menyamakan alat berisiko menyebarkan kontaminasi antar area.</p></div>`
        },

        // ----- KOMPLAIN -----
        'complaint_learn': {
            title: 'Metode LEARN',
            role: '📖 Lima Langkah',
            tujuan: 'Menguasai lima langkah profesional dan berurutan dalam menangani komplain, sehingga penanganan konsisten meski dilakukan oleh staf yang berbeda-beda.',
            content: `<ul>
                        <li><strong>L - Listen (Dengarkan)</strong> : Dengarkan dengan penuh perhatian tanpa menyela, biarkan pelanggan menyampaikan keluhan sepenuhnya sebelum merespons.</li>
                        <li><strong>E - Empathize (Empati)</strong> : Tunjukkan bahwa Anda memahami perasaan mereka — "Saya sangat memahami kekesalan Bapak/Ibu."</li>
                        <li><strong>A - Apologize (Minta Maaf)</strong> : Minta maaf dengan tulus, tanpa kata "tapi" atau pembelaan diri yang terkesan mengelak tanggung jawab.</li>
                        <li><strong>R - Resolve (Selesaikan)</strong> : Tawarkan solusi konkret dan segera — bila di luar kewenangan Anda, koordinasikan dengan Shift Leader tanpa membuat pelanggan menunggu lama.</li>
                        <li><strong>N - Notify (Informasikan)</strong> : Beri tahu solusi yang akan dilakukan beserta estimasi waktunya, dan pastikan pelanggan puas sebelum meninggalkan meja.</li>
                    </ul>
                    <p style="margin-top:10px;"><em>Ikuti kelima langkah ini secara berurutan — melompati langkah "Listen" atau "Empathize" langsung ke "Resolve" seringkali membuat pelanggan merasa tidak benar-benar didengar, meski solusinya sudah tepat.</em></p>`,
            script: `<div class="script-box">
                        <p><span class="speaker">Contoh Penerapan :</span></p>
                        <p>1. <strong>Listen :</strong> "Silakan ceritakan apa yang terjadi, Bu."</p>
                        <p>2. <strong>Empathize :</strong> "Saya sangat memahami kekesalan Anda."</p>
                        <p>3. <strong>Apologize :</strong> "Saya mohon maaf yang sebesar-besarnya."</p>
                        <p>4. <strong>Resolve :</strong> "Saya akan buatkan gantinya yang baru untuk Bapak/Ibu."</p>
                        <p>5. <strong>Notify :</strong> "Sudah saya koordinasikan, pesanan baru akan siap dalam 5 menit."</p>
                    </div>`
        },
        'complaint_kasus': {
            title: 'Contoh Kasus & Solusi',
            role: '📌 Skenario',
            tujuan: 'Memberikan contoh konkret penanganan komplain.',
            content: `<ul>
                        <li><strong>Kasus 1 : Rasa minuman terlalu manis/tawar.</strong><br>
                        <em>Solusi :</em> "Saya minta maaf, Bu. Kami akan buatkan ulang dengan tingkat manis yang sesuai."</li>
                        <li><strong>Kasus 2 : Pesanan lama.</strong><br>
                        <em>Solusi :</em> "Mohon maaf atas keterlambatannya. Pesanan Bapak/Ibu sudah hampir selesai. Sebagai kompensasi, kami berikan menu pendamping kecil."</li>
                        <li><strong>Kasus 3 : Salah pesanan.</strong><br>
                        <em>Solusi :</em> "Saya minta maaf, Pak. Saya akan ganti dengan pesanan yang benar segera. Kami usahakan dalam 5-7 menit."</li>
                    </ul>`,
            script: `<div class="script-box"><p>Selalu sampaikan solusi dengan tenang dan percaya diri.</p></div>`
        },
        'complaint_larangan': {
            title: 'Hal yang Tidak Boleh Dilakukan',
            role: '🚫 Hindari!',
            tujuan: 'Mengetahui perilaku yang harus dihindari saat menangani komplain, karena kesalahan sikap seringkali memperbesar masalah lebih dari kesalahan produk itu sendiri.',
            content: `<ul>
                        <li><strong>Jangan membantah</strong> pendapat pelanggan secara langsung, meski Anda merasa benar — dengarkan dulu, klarifikasi belakangan dengan cara yang sopan.</li>
                        <li><strong>Jangan menyalahkan dapur</strong>, tim lain, atau sistem di depan pelanggan — ini terkesan tidak profesional dan tidak menyelesaikan masalah.</li>
                        <li><strong>Jangan mengatakan "Saya cuma ikut perintah"</strong> atau "bukan bagian saya" — itu menunjukkan tidak bertanggung jawab dan membuat pelanggan makin frustrasi.</li>
                        <li><strong>Jangan mengabaikan</strong> keluhan sekecil apa pun — apa yang terlihat sepele bagi staf bisa jadi sangat penting bagi pelanggan.</li>
                        <li><strong>Jangan menjadi defensif</strong> — hindari nada membela diri, bahasa tubuh tertutup (menyilangkan tangan), atau ekspresi kesal.</li>
                        <li><strong>Jangan menunda</strong> solusi — semakin lama pelanggan menunggu respons, semakin besar potensi eskalasi.</li>
                        <li><strong>Jangan berjanji hal yang tidak bisa dipenuhi</strong> hanya untuk meredakan situasi sesaat — ini akan menimbulkan masalah baru bila janji tidak ditepati.</li>
                        <li><strong>Jangan membahas komplain di depan pelanggan lain</strong> — bila memungkinkan, ajak bicara di area yang lebih privat.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Ingat: Pelanggan yang marah, marah pada situasi/masalahnya, bukan pada Anda secara pribadi. Jangan menganggapnya sebagai serangan personal.</p></div>`
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
                                    <td>Cek posisi antrian, sampaikan permohonan maaf atas keterlambatan. Jika sangat lama, berikan complimentary (snack kecil) sebagai permohonan maaf.</td>
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
            tujuan: 'Memberikan tips tambahan berbasis pengalaman lapangan untuk menangani komplain secara lebih efektif dan menjaga profesionalisme di bawah tekanan.',
            content: `<ul>
                        <li><strong>Tetap tenang</strong> — tarik napas dalam sebelum merespons, dan bicara dengan nada rendah serta ritme yang tidak terburu-buru.</li>
                        <li><strong>Gunakan bahasa tubuh terbuka</strong> — jangan menyilangkan tangan, jaga kontak mata yang wajar, dan hadapkan tubuh ke arah pelanggan.</li>
                        <li><strong>Libatkan Shift Leader/manajer</strong> jika komplain di luar kewenangan Anda atau pelanggan meminta kompensasi khusus — jangan memutuskan sendiri hal yang berdampak finansial besar.</li>
                        <li><strong>Catat setiap komplain</strong> (jenis, penyebab, solusi yang diberikan) untuk bahan evaluasi tim dan pencegahan kejadian serupa.</li>
                        <li><strong>Follow-up</strong> setelah solusi diberikan — pastikan pelanggan benar-benar puas sebelum meninggalkan meja, jangan berasumsi solusi otomatis menyelesaikan masalah.</li>
                        <li><strong>Jadikan komplain sebagai pelajaran</strong>, bukan sebagai hal yang harus ditakuti atau disembunyikan — komplain yang tercatat dan dievaluasi adalah sumber perbaikan kualitas layanan.</li>
                        <li><strong>Jaga konsistensi tim</strong> — pastikan seluruh crew menangani jenis komplain yang sama dengan pendekatan yang serupa, mengacu pada tabel komplain umum Nara.</li>
                    </ul>`,
            script: `<div class="script-box"><p><span class="speaker">Contoh Follow-up :</span> "Bagaimana dengan pesanan penggantinya, Bu? Apakah sudah sesuai?"</p></div>`
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
                        <li><strong>Menutup kas (closing)</strong> di akhir shift : rekonsiliasi kas fisik dengan sistem, laporkan selisih (jika ada) ke Shift Leader sebelum meninggalkan area kasir.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Kasir adalah <em>first &amp; last impression</em> pelanggan — kecepatan, akurasi, dan keramahan di kasir sangat menentukan kesan pertama terhadap Nara.</p></div>`,
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
                        <li><strong>Closing bar area</strong> : Bersihkan dan sanitasi seluruh peralatan, matikan mesin sesuai SOP, dan siapkan bar untuk shift berikutnya.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Konsistensi rasa adalah janji Nara ke pelanggan — minuman yang sama harus terasa sama, baik dibuat pagi maupun malam, oleh barista mana pun.</p></div>`,
        },
        'operational_server': {
            title: 'Tugas & Tanggung Jawab Server',
            role: '🛎️ Posisi : Server',
            tujuan: 'Memahami seluruh tugas dan tanggung jawab posisi Server dalam operasional harian Nara Curated Compound.',
            content: `<ul>
                        <li><strong>Quality check sebelum pengantaran</strong> : Pastikan pesanan sesuai — tampilan, topping, dan varian sudah benar.</li>
                        <li><strong>Persiapan cutleries</strong> : Siapkan peralatan makan sesuai jenis menu (sendok, garpu, sumpit, dsb), lengkap dengan serbet dan tisu di service tray sebelum mengantarkan.</li>
                        <li><strong>Mengantarkan pesanan ke meja</strong> yang benar sesuai nomor meja, cepat dan tanpa tumpah.</li>
                        <li><strong>Menyampaikan informasi saat antar</strong> : "Ini minumannya, mohon segera dinikmati agar foam-nya tetap sempurna."</li>
                        <li><strong>Floor patrol</strong> : Inspeksi rutin ke area Indoor, Outdoor, dan Komunal setiap 3–5 menit selama shift.</li>
                        <li><strong>Mendeteksi kebutuhan pelanggan</strong> secara proaktif — tawarkan bantuan sebelum diminta.</li>
                        <li><strong>Bussing (table clearance)</strong> : Bawa peralatan kotor ke scullery segera setelah pelanggan pergi, terapkan clear-as-you-go.</li>
                        <li><strong>Deteksi kepergian pelanggan</strong> : Scan area setiap 3–5 menit, ucapkan "Terima kasih, sampai jumpa kembali di Nara!"</li>
                        <li><strong>Reset meja (turnaround)</strong> : Sanitasi meja dan kursi dengan food-grade sanitizer, mise en place, target maksimal 2 menit.</li>
                        <li><strong>Pemeriksaan toilet</strong> : Cek kebersihan, sabun, tisu, dan pengharum setiap 30–60 menit.</li>
                        <li><strong>Melaporkan kendala</strong> atau komplain pelanggan ke Shift Leader segera, jangan ditangani sendiri jika di luar kewenangan.</li>
                        <li><strong>Menjaga stok perlengkapan meja</strong> : tisu, tusuk gigi, dan kondimen selalu tersedia di area komunal/self-service.</li>
                    </ul>`,
            script: `<div class="script-box"><p>Server adalah "mata dan telinga" di lapangan — posisi yang paling sering berinteraksi langsung dan paling cepat mendeteksi kebutuhan maupun ketidakpuasan pelanggan.</p></div>`,
        },
        'operational_kitchen': {
            title: 'Tugas & Tanggung Jawab Kitchen',
            role: '🍳 Posisi : Kitchen',
            tujuan: 'Memahami seluruh tugas dan tanggung jawab posisi Kitchen dalam operasional harian Nara Curated Compound.',
            content: `<ul>
                        <li><strong>Menyiapkan menu makanan utama</strong> (Ramen kuah/dry dengan topping Chasu/Beef/Katsu, serta menu pendamping) sesuai resep dan porsi standar — <strong>tidak boleh berimprovisasi</strong> tanpa persetujuan Shift Leader/Manager.</li>
                        <li><strong>Konsistensi plating</strong> : Penataan topping, jumlah kuah, dan kerapian penyajian harus sama di setiap pesanan, kapan pun waktunya dan siapa pun yang memasak.</li>
                        <li><strong>Kecepatan produksi</strong> : Menu makanan utama wajib selesai dalam <strong>5 - 8 menit</strong> sejak order diterima, disesuaikan dengan kompleksitas menu.</li>
                        <li><strong>Manajemen bahan baku (FIFO)</strong> : Terapkan First In, First Out dan periksa tanggal kadaluarsa bahan secara rutin agar tidak ada bahan yang terbuang atau terpakai melewati batas aman.</li>
                        <li><strong>Menjaga kebersihan area dapur</strong> : Permukaan kerja, talenan, dan peralatan masak disanitasi setelah digunakan untuk mencegah kontaminasi silang antar jenis bahan.</li>
                        <li><strong>Koordinasi dengan Quality Check (Server)</strong> : Pastikan porsi dan topping sesuai struk sebelum pesanan diangkat dari pass counter.</li>
                        <li><strong>Melaporkan kendala stok</strong> ke kasir segera jika ada bahan yang habis/menipis, agar pelanggan dapat diinformasikan lebih awal sebelum memesan.</li>
                        <li><strong>Penerapan personal hygiene</strong> : Cuci tangan rutin, sarung tangan sekali pakai untuk makanan siap saji, dan tidak bekerja saat sakit menular.</li>
                        <li><strong>Manajemen suhu penyimpanan</strong> : Memantau suhu chiller/freezer dan segera melaporkan ke Shift Leader jika ditemukan bahan yang terlihat tidak layak (basi/berubah warna).</li>
                        <li><strong>Closing dapur</strong> : Bersihkan dan sanitasi seluruh peralatan masak, simpan bahan sisa sesuai SOP penyimpanan, dan siapkan dapur untuk shift berikutnya.</li>
                    </ul>`,
            script: `<div class="script-box"><p><em>Proses internal, tidak ada interaksi langsung dengan pelanggan.</em></p><p><em>Jika ada kendala stok/waktu produksi memanjang, informasikan segera ke kasir :</em><br><span class="speaker">Kitchen :</span> "Untuk meja 07, mohon informasikan tambahan waktu sekitar 5 menit karena [alasan singkat]."</p></div>`,
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
