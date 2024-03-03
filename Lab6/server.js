const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/submit', (req, res) => {
    console.log('Received data:', req.body);
    res.json({ message: 'Data received successfully' });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
