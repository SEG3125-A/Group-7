function buttonSubmit() {
    
    var textQuestion = document.getElementById('textQuestion').value;
    var navQuestion = document.querySelectorAll('input[name="navigationEase"]:cheched').value;
    var uiQuestion = document.getElementById('uiAspect').value;
    var featuresQuestion = [];
    var checkbox = document.querySelectorAll('input[name="feature"]:checked');
    checkbox.forEach(function(checkbox) {
        featuresQuestion.push(checkbox.value);
    });
    var comments = document.getElementById('comments'),value;
    
    var surveyData = {
        "textQuestion": textQuestion,
        "navgationEase": navQuestion,
        "uiAspect": uiQuestion,
        "features":featuresQuestion,
        "comments": comments
    };

    fetch('/submit-survey', {
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(surveyData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('FAIL TO SAVE DATA');
        }
        console.log('Survey data saved successfully');
    })
    .catch(error => {
        console.log('Error saving data:', error);
    });

}