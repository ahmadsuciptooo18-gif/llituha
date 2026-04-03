








 
  /* ── DATA ── */
  const products = [
 {
  cat: 'HOME LIFT', name: 'Home Elevator HL-300',
  img: '../images/homelift.jpg',
  desc: 'Lift rumah modern untuk hunian pribadi. Kabin compact dengan finishing kayu atau kaca, cocok untuk 2–4 orang. Dilengkapi sistem keamanan dan kenyamanan maksimal untuk penggunaan sehari-hari.',
  specs: [
    ['Kapasitas Beban','300 kg / 4 Orang'],['Kecepatan','0.6 m/s'],['Jumlah Lantai','Maks. 4 Lantai'],
    ['Dimensi Kabin','900 × 1100 × 2100 mm'],['Pintu','Automatic Swing / Sliding, 700mm'],
    ['Drive System','Hydraulic / Traction Gearless'],['Sertifikasi','SNI, ISO 9001:2015'],['Garansi','3 Tahun Penuh'],
  ],
  features: ['Kabin finishing kayu atau kaca','Lampu LED nyaman','Lantai vinyl / kayu pilihan','Sistem pengereman darurat otomatis','Backup listrik saat mati listrik','Panel tombol ramah anak & lansia','Sensor keamanan pintu dan kabin'],
},
    {
      cat: 'LIFT PENUMPANG', name: 'Hospital & Medical Elevator HM-1600',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85',
      desc: 'Lift medis berstandar internasional untuk rumah sakit, klinik, dan fasilitas kesehatan. Kabin extra lebar mendukung brankar, tandu, dan kursi roda. Material interior anti-bakteri dan mudah dibersihkan.',
      specs: [
        ['Kapasitas Beban','1600 kg / 21 Orang'],['Kecepatan','1.0 m/s'],['Jumlah Lantai','Maks. 15 Lantai'],
        ['Dimensi Kabin','1400 × 2400 × 2200 mm'],['Pintu','Center Opening, 1200mm'],
        ['Drive System','VVVF Gearless'],['Sertifikasi','SNI, EN 81-70 (Aksesibilitas)'],['Garansi','2 Tahun Penuh'],
      ],
      features: ['Kabin extra lebar untuk brankar penuh','Dinding anti-bakteri stainless steel','Lantai non-slip anti-bakteri','Pencahayaan medis 500 lux','Tombol tangan bebas (foot pedal)','Sistem prioritas panggilan darurat','ARD + UPS terintegrasi'],
    },
    {
      cat: 'LIFT PENUMPANG', name: 'Residential Home Lift HL-400',
      img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85',
      desc: 'Lift hunian mewah untuk rumah pribadi 2–6 lantai. Desain ultra-kompak dengan estetika modern yang dapat disesuaikan dengan interior rumah. Instalasi minim konstruksi tanpa ruang mesin terpisah.',
      specs: [
        ['Kapasitas Beban','400 kg / 5 Orang'],['Kecepatan','0.63 m/s'],['Jumlah Lantai','Maks. 6 Lantai'],
        ['Dimensi Kabin','900 × 1100 × 2100 mm'],['Pintu','Side Opening, 800mm'],
        ['Drive System','MRL (Machine Room-Less)'],['Konsumsi Daya','2.2 kW (hemat energi)'],['Garansi','2 Tahun Penuh'],
      ],
      features: ['Tanpa ruang mesin (MRL)','Desain kabin custom sesuai interior','Kaca panoramik opsional','Instalasi cepat 3–5 hari kerja','Suara operasi ultra-senyap < 55dB','Pintu manual atau otomatis','Remote monitoring via smartphone'],
    },
    {
      cat: 'LIFT BARANG', name: 'Heavy Duty Freight Elevator FE-3000',
      img: 'https://images.unsplash.com/photo-1553546895-531931aa1aa8?w=800&q=85',
      desc: 'Lift barang industri kapasitas ekstra untuk pabrik, gudang logistik, dan cold storage. Lantai baja galvanis tahan forklift dan palet. Dirancang untuk penggunaan intensif 24 jam.',
      specs: [
        ['Kapasitas Beban','3000 kg'],['Kecepatan','0.5 m/s'],['Jumlah Lantai','Maks. 10 Lantai'],
        ['Dimensi Kabin','2000 × 3000 × 2400 mm'],['Pintu','Bi-Parting, 2000mm'],
        ['Drive System','VVVF Traction'],['Lantai','Baja Galvanis 6mm'],['Garansi','1 Tahun + Kontrak Servis'],
      ],
      features: ['Lantai baja galvanis tahan forklift','Pintu manual / semi-otomatis tebal','Bumper karet anti-gores di kabin','Proteksi overload otomatis','Sistem pelumasan otomatis','Operasi 24 jam / 7 hari','Tersedia versi cold storage (suhu rendah)'],
    },
    {
      cat: 'LIFT BARANG', name: 'Service & Cargo Elevator SC-1500',
      img: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=85',
      desc: 'Lift servis dan kargo multifungsi untuk hotel, mal, apartemen, dan gedung perkantoran tinggi. Kabin stainless steel dengan kapasitas menengah dan kecepatan optimal untuk penggunaan komersial harian.',
      specs: [
        ['Kapasitas Beban','1500 kg'],['Kecepatan','1.0 m/s'],['Jumlah Lantai','Maks. 25 Lantai'],
        ['Dimensi Kabin','1500 × 2200 × 2300 mm'],['Pintu','Center Opening, 1100mm'],
        ['Drive System','VVVF Gearless'],['Material Kabin','Stainless Steel Anti Korosi'],['Garansi','2 Tahun Penuh'],
      ],
      features: ['Stainless steel anti-korosi dan anti-gores','Sistem pencahayaan tahan goncangan','Pintu tebal 2mm tahan benturan','Prioritas servis mode on/off','Kapasitas intensitas tinggi (duty cycle 100%)','Cocok untuk hotel bintang 5','Integrasi BMS gedung tersedia'],
    },
    {
      cat: 'ESKALATOR', name: 'Commercial Indoor Escalator ES-1000',
      img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=85',
      desc: 'Eskalator komersial standar internasional untuk pusat perbelanjaan, stasiun MRT, bandara, dan gedung publik berkapasitas tinggi. Sistem regenerative drive hemat energi hingga 40%.',
      specs: [
        ['Kapasitas','9.000 orang/jam'],['Kecepatan','0.5 m/s'],['Lebar Anak Tangga','1000 mm'],
        ['Sudut Inklinasi','30° / 35°'],['Tinggi Angkat','Maks. 6 meter'],
        ['Drive System','Regenerative Drive'],['Anak Tangga','Aluminum Die-Cast'],['Garansi','2 Tahun Penuh'],
      ],
      features: ['Regenerative drive hemat energi 40%','Sensor keamanan tepi kanan-kiri','Sistem pengereman darurat otomatis','Anak tangga aluminium anti-slip','Handrail karet food-grade','Panel kontrol diagnostik otomatis','Operasi intermittent / hemat daya'],
    },
    {
      cat: 'ESKALATOR', name: 'Moving Walkway MW-600F',
      img: 'https://images.unsplash.com/photo-1478827387698-1527781a4887?w=800&q=85',
      desc: 'Travelator / moving walkway untuk bandara internasional, rumah sakit besar, dan terminal. Desain flat atau inklinasi ringan hingga 12° dengan kecepatan tinggi.',
      specs: [
        ['Kapasitas','12.000 orang/jam'],['Kecepatan','0.5 – 0.75 m/s'],['Lebar Palet','600 / 800 / 1000 mm'],
        ['Inklinasi','0° – 12°'],['Panjang','Hingga 60 meter'],
        ['Drive System','VVVF Gearless'],['Palet','Aluminum Anti-Slip'],['Garansi','2 Tahun Penuh'],
      ],
      features: ['Tersedia lebar 600 / 800 / 1000 mm','Inklinasi fleksibel 0° hingga 12°','Kecepatan variabel VVVF','Sensor objek terjepit otomatis','Handrail speed synchronized','Desain modular pemasangan cepat','Cocok untuk jarak hingga 60 meter'],
    },
    {
      cat: 'DUMBWAITER', name: 'Restaurant Food Dumbwaiter DW-100',
      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85',
      desc: 'Lift makanan (dumbwaiter) berkapasitas hingga 100 kg untuk restoran, hotel, katering, dan dapur komersial. Pengiriman antar lantai yang cepat, higienis, dan sangat senyap.',
      specs: [
        ['Kapasitas Beban','50 – 100 kg'],['Kecepatan','0.4 m/s'],['Jumlah Lantai','Maks. 8 Lantai'],
        ['Dimensi Kabin','700 × 700 × 800 mm'],['Pintu','Manual Swing / Auto'],
        ['Drive System','Electric Worm Gear'],['Material Kabin','Stainless Steel Food Grade'],['Garansi','1 Tahun + Servis Berkala'],
      ],
      features: ['Material stainless steel food grade','Suara operasi sangat senyap < 45dB','Pintu manual atau semi-otomatis','Tidak memerlukan ruang mesin besar','Instalasi cepat 1–2 hari kerja','Kontrol tombol sederhana tiap lantai','Tersedia ukuran custom sesuai kebutuhan'],
    },
    {
      cat: 'LIFT PENUMPANG', name: 'Panoramic Glass Elevator PG-630',
      img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=85',
      desc: 'Lift kaca panoramik 270° untuk lobby mewah, atrium gedung ikonik, hotel butik, dan pusat konvensi. Menjadi elemen arsitektur sekaligus transportasi vertikal yang memukau.',
      specs: [
        ['Kapasitas Beban','630 kg / 8 Orang'],['Kecepatan','1.5 m/s'],['Jumlah Lantai','Maks. 30 Lantai'],
        ['Dimensi Kabin','1100 × 1400 × 2300 mm'],['Kaca','Tempered Laminated 12mm'],
        ['Drive System','VVVF Gearless (MRL)'],['Finishing','Custom (Bingkai Gold/Chrome/Black)'],['Garansi','2 Tahun Penuh'],
      ],
      features: ['Kaca tempered laminated 12mm 270°','Bingkai tersedia gold, chrome, hitam','Pencahayaan LED strip ambiance','Desain arsitektural custom','Tanpa ruang mesin (MRL)','Cocok untuk pemasangan indoor & semi-outdoor','Menjadi focal point lobby dan atrium'],
    },
  ];

  /* ── FILTER ── */
  function filterProducts(cat, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.product-card').forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) card.classList.remove('hidden');
      else card.classList.add('hidden');
    });
  }

  /* ── MODAL ── */
  function openModal(idx) {
    const p = products[idx];
    const imgHtml = p.img
      ? `<img src="${p.img}" alt="${p.name}" onerror="this.parentElement.innerHTML='<div class=\\'modal-img-placeholder\\'><svg width=\\'80\' height=\\'80\\' viewBox=\\'0 0 24 24\\' fill=\\'none\\' stroke=\\'#c9933a\\' stroke-width=\\'1\\'><rect x=\\'3\\' y=\\'3\\' width=\\'18\\' height=\\'18\\' rx=\\'2\\'/></svg></div>'">`
      : `<div class="modal-img-placeholder"><svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#c9933a" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/></svg></div>`;

    const specRows = p.specs.map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('');
    const featureItems = p.features.map(f => `<li>${f}</li>`).join('');

    document.getElementById('modalImg').innerHTML = imgHtml;
    document.getElementById('modalBody').innerHTML = `
      <div class="modal-cat">${p.cat}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-desc">${p.desc}</div>
      <div class="spec-table-title">SPESIFIKASI TEKNIS</div>
      <table class="spec-table">${specRows}</table>
      <div class="modal-features">
        <div class="modal-features-title">FITUR UNGGULAN</div>
        <ul class="feature-list">${featureItems}</ul>
      </div>
      <div class="modal-actions">
        <a href="hubungi-kami.html" class="modal-btn-primary">MINTA PENAWARAN</a>
        <button class="modal-btn-sec" onclick="closeModal()">TUTUP</button>
      </div>`;

    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  function closeModalOutside(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  }

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* ── MOBILE MENU ── */
  function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
  }

  /* ── SCROLL REVEAL ── */
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  reveals.forEach(el => io.observe(el));
