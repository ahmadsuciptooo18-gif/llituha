








 
  /* ── DATA ── */
  const products = [
{
    cat: 'HOME LIFT',
    name: 'Home Lift Modern',
    img: '../images/homelift.jpg',
    desc: 'Solusi lift elegan untuk hunian pribadi dengan desain compact, memberikan akses antar lantai yang halus, senyap, dan aman untuk seluruh keluarga.',
    
    specs: [
      ['Kapasitas','2 – 6 orang'],
      ['Beban Maksimal','±250 – 400 kg'],
      ['Jumlah Lantai','2 – 5 lantai'],
      ['Kecepatan','Halus & stabil (nyaman untuk rumah)'],
      ['Desain Kabin','Custom (stainless, kaca, atau sesuai interior)'],
      ['Sistem Pintu','Otomatis & aman'],
      ['Konsumsi Listrik','Hemat energi'],
      ['Tingkat Kebisingan','Sangat rendah (tidak berisik)'],
      ['Keamanan','Emergency stop, alarm, door safety'],
      ['Instalasi','Fleksibel, tidak membutuhkan ruang besar'],
    ],

    features: [
      'Desain compact & fleksibel untuk rumah',
      'Pergerakan halus dan senyap',
      'Hemat listrik & minim perawatan',
      'Sistem keamanan lengkap untuk keluarga',
      'Interior dapat disesuaikan dengan desain rumah',
    ],
  },
  
{
  cat: 'LIFT PENUMPANG',
  name: 'Passenger Elevator Premium',
  img: '../images/passenger2.jpg',
  desc: 'Lift penumpang yang dirancang untuk menunjang mobilitas gedung secara cepat, aman, dan nyaman. Cocok untuk perkantoran, hotel, apartemen, hingga pusat perbelanjaan dengan tampilan elegan dan performa tinggi.',

  specs: [
    ['Kapasitas','8 – 20 orang'],
    ['Beban Maksimal','±630 – 1600 kg'],
    ['Jumlah Lantai','Hingga 20+ lantai'],
    ['Kecepatan','Cepat & stabil untuk mobilitas tinggi'],
    ['Desain Kabin','Premium & dapat disesuaikan'],
    ['Sistem Pintu','Otomatis & responsif'],
    ['Konsumsi Listrik','Efisien & optimal'],
    ['Tingkat Kebisingan','Halus & minim getaran'],
    ['Keamanan','Standar keselamatan lengkap'],
    ['Instalasi','Disesuaikan dengan kebutuhan gedung'],
  ],

  features: [
    'Pergerakan cepat, halus, dan stabil',
    'Dirancang untuk penggunaan intensitas tinggi',
    'Tampilan kabin elegan & profesional',
    'Sistem keamanan berstandar tinggi',
    'Meningkatkan kenyamanan dan efisiensi gedung',
  ],
},
{
  cat: 'LIFT BARANG',
  name: 'Freight / Cargo Lift',
  img: '../images/liftcargo.jpg',
  desc: 'Lift barang yang dirancang untuk mengangkut beban berat secara aman, stabil, dan efisien. Cocok untuk kebutuhan gudang, pabrik, restoran, dan distribusi dengan konstruksi kuat untuk penggunaan intensif.',

  specs: [
    ['Kapasitas','500 – 3000 kg'],
    ['Beban Maksimal','Disesuaikan kebutuhan proyek'],
    ['Jumlah Lantai','2 – 10+ lantai'],
    ['Ukuran Kabin','Besar & fleksibel sesuai barang'],
    ['Kecepatan','Stabil untuk angkut barang'],
    ['Desain Kabin','Kuat & tahan benturan'],
    ['Sistem Pintu','Manual / otomatis (heavy duty)'],
    ['Konsumsi Listrik','Efisien untuk operasional'],
    ['Keamanan','Sistem pengaman standar industri'],
    ['Instalasi','Disesuaikan dengan area & kebutuhan'],
  ],

  features: [
    'Konstruksi kuat untuk beban berat',
    'Pergerakan stabil & aman',
    'Cocok untuk operasional intensif',
    'Ukuran kabin fleksibel',
    'Meningkatkan efisiensi distribusi barang',
  ],
},
{
  cat: 'LIFT MEDIS',
  name: 'Hospital & Medical Elevator',
  img: '../images/liftrumahsakit.jpg',
  desc: 'Lift khusus fasilitas kesehatan yang dirancang untuk mendukung mobilitas pasien dan tenaga medis secara aman, stabil, dan higienis. Kabin luas memudahkan penggunaan brankar, kursi roda, serta peralatan medis dengan standar operasional rumah sakit.',

  specs: [
    ['Kapasitas','15 – 21 orang'],
    ['Beban Maksimal','±1000 – 1600 kg'],
    ['Jumlah Lantai','Hingga 15 lantai'],
    ['Ukuran Kabin','Extra luas untuk brankar & kursi roda'],
    ['Kecepatan','Halus & stabil untuk kenyamanan pasien'],
    ['Desain Interior','Higienis & mudah dibersihkan'],
    ['Sistem Pintu','Lebar & otomatis (akses mudah)'],
    ['Konsumsi Listrik','Efisien & stabil'],
    ['Keamanan','Fitur lengkap + sistem darurat prioritas'],
    ['Standar','Mendukung kebutuhan aksesibilitas medis'],
  ],

  features: [
    'Kabin luas untuk brankar dan kursi roda',
    'Material anti-bakteri & higienis',
    'Pergerakan halus dan stabil',
    'Sistem prioritas untuk kondisi darurat',
    'Dirancang untuk operasional 24 jam',
  ],
},
{
  cat: 'DUMBWAITER',
  name: 'Dumbwaiter Lift',
  img: '../images/dumbwaiter.jpg',
  desc: 'Lift kecil yang dirancang untuk memindahkan barang ringan seperti makanan, minuman, dokumen, atau perlengkapan lainnya secara cepat dan praktis antar lantai. Solusi efisien untuk restoran, hotel, kantor, maupun hunian pribadi.',

  specs: [
    ['Kapasitas','50 – 300 kg'],
    ['Jumlah Lantai','2 – 5 lantai'],
    ['Ukuran Kabin','Compact & hemat ruang'],
    ['Kecepatan','Cepat & efisien'],
    ['Desain Kabin','Stainless steel & mudah dibersihkan'],
    ['Sistem Pintu','Manual / otomatis'],
    ['Konsumsi Listrik','Rendah & hemat energi'],
    ['Keamanan','Sistem pengaman standar'],
    ['Instalasi','Mudah & fleksibel'],
  ],

  features: [
    'Ukuran kecil & hemat tempat',
    'Mempercepat distribusi barang ringan',
    'Cocok untuk restoran & hotel',
    'Operasional mudah dan praktis',
    'Perawatan minim & tahan lama',
  ],
},
{
  cat: 'ESCALATOR',
  name: 'Escalator System',
  img: '../images/escalator.jpg',
  desc: 'Eskalator yang dirancang untuk mendukung perpindahan orang secara terus-menerus dengan aman, nyaman, dan efisien. Cocok untuk area publik dengan mobilitas tinggi seperti mall, bandara, stasiun, dan gedung komersial.',

  specs: [
    ['Kapasitas','Tinggi (kontinu untuk banyak orang)'],
    ['Ketinggian Lantai','Disesuaikan kebutuhan bangunan'],
    ['Lebar Step','600 / 800 / 1000 mm'],
    ['Kecepatan','Stabil & nyaman untuk pengguna'],
    ['Desain','Modern & dapat disesuaikan'],
    ['Konsumsi Listrik','Efisien & optimal'],
    ['Sistem Operasi','Otomatis & hemat energi'],
    ['Keamanan','Sensor keselamatan lengkap'],
    ['Instalasi','Disesuaikan dengan area proyek'],
  ],

  features: [
    'Pergerakan kontinu tanpa henti',
    'Cocok untuk area dengan lalu lintas tinggi',
    'Desain elegan & modern',
    'Operasional stabil & tahan lama',
    'Meningkatkan kenyamanan dan efisiensi pengunjung',
  ],
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
      <div class="spec-table-title">SPESIFIKASI </div>
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
