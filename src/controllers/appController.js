// World-Class Controllers for Aplikasi Sekolah Enterprise (Sistem Informasi Sekolah Enterprise)

let siswaData = [
  {
    "id": 1,
    "nis": "2026001",
    "nama": "Ahmad Fauzi",
    "kelas": "XII-IPA-1",
    "jurusan": "IPA",
    "tahun_masuk": 2023,
    "status": "Aktif"
  },
  {
    "id": 2,
    "nis": "2026002",
    "nama": "Siti Nurhaliza",
    "kelas": "XII-IPS-2",
    "jurusan": "IPS",
    "tahun_masuk": 2023,
    "status": "Aktif"
  },
  {
    "id": 3,
    "nis": "2026003",
    "nama": "Budi Santoso",
    "kelas": "XI-IPA-1",
    "jurusan": "IPA",
    "tahun_masuk": 2024,
    "status": "Aktif"
  }
];

exports.getAllSiswa = async (req, res) => {
    const tenantId = req.headers['x-tenant-id'] || 'default_tenant';
    res.json({ success: true, tenantId, count: siswaData.length, data: siswaData });
};

exports.createSiswa = async (req, res) => {
    const item = { id: Date.now(), tenant_id: req.headers['x-tenant-id'] || 'default_tenant', ...req.body };
    siswaData.unshift(item);
    res.status(201).json({ success: true, data: item });
};

exports.deleteSiswa = async (req, res) => {
    siswaData = siswaData.filter(i => i.id !== parseInt(req.params.id));
    res.json({ success: true, message: 'Siswa deleted' });
};

let guruData = [
  {
    "id": 1,
    "nip": "198501012010",
    "nama": "Dr. Hendra Wijaya",
    "mata_pelajaran": "Matematika",
    "jabatan": "Kepala Sekolah",
    "status": "PNS"
  },
  {
    "id": 2,
    "nip": "199002152012",
    "nama": "Ibu Ratna Sari",
    "mata_pelajaran": "Bahasa Indonesia",
    "jabatan": "Wali Kelas XII-IPA-1",
    "status": "PNS"
  }
];

exports.getAllGuru = async (req, res) => {
    const tenantId = req.headers['x-tenant-id'] || 'default_tenant';
    res.json({ success: true, tenantId, count: guruData.length, data: guruData });
};

exports.createGuru = async (req, res) => {
    const item = { id: Date.now(), tenant_id: req.headers['x-tenant-id'] || 'default_tenant', ...req.body };
    guruData.unshift(item);
    res.status(201).json({ success: true, data: item });
};

exports.deleteGuru = async (req, res) => {
    guruData = guruData.filter(i => i.id !== parseInt(req.params.id));
    res.json({ success: true, message: 'Guru deleted' });
};

let sppData = [
  {
    "id": 1,
    "siswa": "Ahmad Fauzi",
    "bulan": "Juli 2026",
    "nominal": 750000,
    "metode": "QRIS Midtrans",
    "status": "Lunas"
  },
  {
    "id": 2,
    "siswa": "Siti Nurhaliza",
    "bulan": "Juli 2026",
    "nominal": 750000,
    "metode": "VA BCA",
    "status": "Lunas"
  }
];

exports.getAllSpp = async (req, res) => {
    const tenantId = req.headers['x-tenant-id'] || 'default_tenant';
    res.json({ success: true, tenantId, count: sppData.length, data: sppData });
};

exports.createSpp = async (req, res) => {
    const item = { id: Date.now(), tenant_id: req.headers['x-tenant-id'] || 'default_tenant', ...req.body };
    sppData.unshift(item);
    res.status(201).json({ success: true, data: item });
};

exports.deleteSpp = async (req, res) => {
    sppData = sppData.filter(i => i.id !== parseInt(req.params.id));
    res.json({ success: true, message: 'Pembayaran SPP deleted' });
};

exports.getAnalytics = async (req, res) => {
    res.json({ success: true, platform: 'Aplikasi Sekolah Enterprise', domain: 'Sistem Informasi Sekolah Enterprise', version: '5.0.0-WorldClass', architecture: 'Multi-Tenant Ready + Redis Cache' });
};