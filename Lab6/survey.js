document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('simpleSurvey');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission.

        // Object to hold form data.
        const formData = {};

        // Text input.
        formData.textQuestion = document.getElementById('textQuestion').value;

        // Radio buttons for navigation ease.
        const navigationEase = document.querySelector('input[name="navigationEase"]:checked');
        formData.navigationEase = navigationEase ? navigationEase.value : '';

        // Dropdown for UI aspect.
        formData.uiAspect = document.getElementById('uiAspect').value;

        // Checkboxes for features.
        formData.features = [];
        document.querySelectorAll('input[name="feature"]:checked').forEach((checkbox) => {
            formData.features.push(checkbox.value);
        });

        // Textarea for additional comments.
        formData.comments = document.getElementById('comments').value;

        console.log(formData);

        // Here, you can add AJAX request to send formData to your server.
        alert('Survey submitted! Thank you for your feedback.');
    });
});
