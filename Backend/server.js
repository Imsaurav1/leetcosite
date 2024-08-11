const express = require('express');
const leetcode = require('./leetcode');
const path = require('path');
const app = express();

app.use(express.json());

// API Route
app.get('/api/leetcode/:id', leetcode.leetcode);

// Serve React frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
