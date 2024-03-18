// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = `SELECT * FROM UserProfile WHERE email = ? AND password = ?`;
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (results.length === 0) {
      res.status(401).send('Unauthorized');
    } else {
      res.status(200).send('Login successful');
    }
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
