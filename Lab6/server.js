const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Serve index.html at the root URL
// This is automatically handled by express.static for the 'public' directory

// Handle form submission
app.post('/submit', (req, res) => {
    console.log('Received data:', req.body);
    // Render result.ejs with the submitted data
    res.render('result', { data: req.body });
});

// Start the server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
