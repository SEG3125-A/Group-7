const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON bodies

app.post('/submit-survey', (req, res) => {
    console.log('Received survey data:', req.body);
    // Here, you would process and store the survey data
    res.json({ message: 'Survey data received successfully!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
