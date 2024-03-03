document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('simpleSurvey');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {data[key] = value;});
        fetch('http://localhost:3000/submit', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => alert('Survey submitted! Thank you for your feedback.'))
        .catch((error) => console.error('Error:', error));
    });
});
