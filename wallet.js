const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Sample user data and wallet balances (this should be stored in a database in a real-world scenario)
const users = [
    { username: 'user1', password: 'password1', balance: 100.00 },
    { username: 'user2', password: 'password2', balance: 50.00 },
];

// Sign-In Endpoint
app.post('/api/signin', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

// Get Wallet Balance Endpoint
app.get('/api/wallet/:username', (req, res) => {
    const { username } = req.params;
    const user = users.find(u => u.username === username);

    if (user) {
        res.json({ balance: user.balance });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
