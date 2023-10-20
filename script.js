document.getElementById('submit-button').addEventListener('click', function () {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var dateOfBirth = document.getElementById('date-of-birth').value;
    var country = document.getElementById('country').value;
    var genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    var gender = Array.from(genderCheckboxes).map(function (checkbox) {
        return checkbox.value;
    }).join(', ');
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mobile-number').value;

    var popupContent = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
    `;

    document.getElementById('popup').innerHTML = popupContent;
    document.getElementById('popup').style.display = 'block';

 
    document.getElementById('survey-form').reset();
});

document.getElementById('reset-button').addEventListener('click', function () {
    document.getElementById('survey-form').reset();
});

document.getElementById('popup').addEventListener('click', function () {
    this.style.display = 'none';
});
