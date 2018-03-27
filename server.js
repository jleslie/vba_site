'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
const path = require('path');

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '/app/', 'index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);