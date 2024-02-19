function validateForm() {
    var phoneNumber = document.getElementById("phoneInput").value;
    var creditCard = document.getElementById("ccnum").value;

    var phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    var creditCardRegex = /\b(?:\d[ -]*?){13,16}\b/;

    if (!phoneRegex.test(phoneNumber)) {
        alert("Invalid phone number!");
        return false;
    }

    if (!creditCardRegex.test(creditCard)) {
        alert("Invalid credit card number!");
        return false;
    }

    return true;
}

function showHairStyleInfo(style) {
    var hairStyleInfo = document.getElementById('hairStyleInfo');
    hairStyleInfo.innerText = style;
    hairStyleInfo.classList.add('active');
}

function hideHairStyleInfo() {
    var hairStyleInfo = document.getElementById('hairStyleInfo');
    hairStyleInfo.classList.remove('active');
}