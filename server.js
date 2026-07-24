const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Database Turso Cloud Client Mock/Connect
const TURSO_DB_URL = process.env.TURSO_DATABASE_URL || "libsql://edgartech-db-edgarizkys.aws-ap-northeast-1.turso.io";

// API Endpoints for Aplikasi Sekolah Enterprise
app.get('/api/health', (req, res) => {
    res.json({ status: 'online', app: 'Aplikasi Sekolah Enterprise', database: TURSO_DB_URL });
});

app.get('/api/data', (req, res) => {
    res.json({
        success: true,
        app: 'Aplikasi Sekolah Enterprise',
        items: [
            { id: 1, title: 'Modul Utama Aplikasi Sekolah Enterprise', status: 'Active', updated: new Date() },
            { id: 2, title: 'Database Turso Cloud Sync', status: 'Connected', updated: new Date() }
        ]
    });
});

// Catch all fallback to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Aplikasi Sekolah Enterprise Server running on port ${PORT}`);
});
module.exports = app;
