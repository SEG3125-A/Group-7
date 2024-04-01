$(document).ready(function () {
    // Initialize the date picker with no restrictions
    $('#datePicker').datepicker({
        dateFormat: 'yy-mm-dd' // Adjust date format to your preference
    });

    // Update available dates when a professional is selected
    $('#professionalSelect').change(disableUnavailableDates);
});

function validateForm() {
    let phoneNumber = $("#phoneInput").val();
    let creditCard = $("#ccnum").val();

    // Updated regex to match Canadian phone numbers in various formats
    // Matches formats like +1XXXXXXXXXX, (XXX) XXX-XXXX, XXX-XXX-XXXX
    let phoneRegex = /^\+1\d{10}$|^\(\d{3}\) \d{3}-\d{4}$|^\d{3}-\d{3}-\d{4}$/;
    let creditCardRegex = /^\d{4}-?\d{4}-?\d{4}-?\d{4}$/;

    if (!phoneRegex.test(phoneNumber)) {
        alert("Invalid phone number!");
        return false;
    }

    if (!creditCardRegex.test(creditCard)) {
        alert("Invalid credit card number!");
        return false;
    }

    alert("Form submission successful.");

    return true; // Return true if both validations pass
}


function disableUnavailableDates() {
    let professionalSelect = $('#professionalSelect').val();
    let offDays = getProfessionalOffDays(professionalSelect); // Get off days for the selected professional

    $('#datePicker').datepicker('destroy'); // Destroy any existing datepicker instance
    $('#datePicker').datepicker({
        dateFormat: 'yy-mm-dd',
        beforeShowDay: function(date) {
            let day = date.getDay();
            let dateString = jQuery.datepicker.formatDate('yy-mm-dd', date);

            // Disable weekends and check if the date is in the offDays array
            if (day === 0 || day === 6 || offDays.indexOf(dateString) >= 0) {
                return [false, 'offDay', 'Unavailable']; // Disable these dates
            } else {
                return [true, '', '']; // Enable all other dates
            }
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