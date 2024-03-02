const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/submit-survey', (req, res) => {
    const surveyData = req.body;
    const jsonData = JSON.stringify(surveyData, null, 2);
    
    fs.writeFile('survey_data.json', jsonData, (error) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error on saving data');
        } else {
            console.log('Survey data saved successfully');
            res.status(500).send('Survey data saved successfully');
        }
    });
});

app.listen(PORT, ()=>{
    console.log('Server is running on port ${PORT}');
});