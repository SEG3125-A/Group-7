$(document).ready(function () {
    // Initialize the date picker with no restrictions
    $('#datetimePicker').datepicker();

    // Update available dates when a professional is selected
    $('#professionalSelect').change(disableUnavailableDates);
});

function validateForm() {
    let phoneNumber = $("#phoneInput").val();
    let creditCard = $("#ccnum").val();

    let phoneRegex = /^\+[1-9]\d{1,14}$/;
    let creditCardRegex = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;

    if (!phoneRegex.test(phoneNumber)) {
        alert("Invalid phone number!");
        return false;
    }

    if (!creditCardRegex.test(creditCard)) {
        alert("Invalid credit card number!");
        return false;
    }

    window.alert("Successful");

    return true; // Return true if both validations pass
}

function disableUnavailableDates() {
    let professionalSelect = $('#professionalSelect').val();
    let offDays = getProfessionalOffDays(professionalSelect); // Get off days for the selected professional

    $('#datetimePicker').datepicker('destroy'); // Destroy any existing datepicker instance
    $('#datetimePicker').datepicker({
        beforeShowDay: function (date) {
            let day = date.getDay();
            let dateString = $.datepicker.formatDate('yy-mm-dd', date);

            // Disable weekends and specific off days for the professional
            let isWeekend = (day === 0 || day === 6); // Sunday = 0, Saturday = 6
            let isOffDay = offDays.indexOf(dateString) !== -1;

            return [!isWeekend && !isOffDay];
        }
    });
}

function getProfessionalOffDays(professional) {
    // Return an array of date strings when the professional is off
    switch (professional) {
        case 'tom_cruise':
            return ['2024-02-20', '2024-02-21']; // Example off days
        case 'brad_pitt':
            return ['2024-02-22', '2024-02-23'];
        // Add cases for other professionals here
        default:
            return []; // No off days by default
    }
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