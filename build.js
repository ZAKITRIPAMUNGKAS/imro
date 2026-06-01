const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const destDir = path.join(__dirname, 'www');

// Daftar file dan folder materi yang diperlukan untuk aplikasi
const assets = [
    'index.html',
    'logo.png',
    'Ruang Lingkup Ilmu Kalam',
    'Karakteristik Syiah dan Khawarij',
    'Karakteristik Qadariyah dan Jabariyah',
    'Karakteristik Murjiah dan Mutazilah',
    'Karakteristik Asyariyah dan Maturidiyah',
    'biodata Pengembang',
    'panduann e-modul',
    'responsiva',
    'lkpd syiah',
    'lkpd jabariyah',
    'lkpd murjiah',
    'lkpd asyariyah'
];

console.log('Membersihkan folder www...');
if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
}
fs.mkdirSync(destDir);

console.log('Menyalin aset e-modul ke folder www...');
assets.forEach(asset => {
    const srcPath = path.join(srcDir, asset);
    const destPath = path.join(destDir, asset);
    
    if (fs.existsSync(srcPath)) {
        console.log(`  Menyalin ${asset}...`);
        fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
        console.warn(`  Peringatan: ${asset} tidak ditemukan.`);
    }
});

console.log('Build web-assets selesai dengan sukses!');
