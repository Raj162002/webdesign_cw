function previewview() {
    var satisfactionLevel = document.querySelector('input[name="feedback_3"]:checked').value;
    var recommendation = document.querySelector('input[name="feedback_4"]:checked').value;
    var email = document.forms['feedback_form']['email'].value;
    var firstName = document.forms['feedback_form']['first_name'].value;
    var lastName= document.forms['feedback_form']['last_name'].value;

    var preview =   'First Name: ' + firstName + '<br>' +
                    'Last Name: ' + lastName + '<br>' +
                    'Email: ' + email + '<br>' +
                    'Satisfaction Level: ' + satisfactionLevel + '<br>' +
                    'Would recommend: ' + recommendation;

    document.getElementById('previewSection').innerHTML = "<legend>Preview</legend>"+ preview;
    // document.getElementById('previewSection').innerHTML = preview;
    document.getElementById('previewSection').style.display = 'block';
    document.getElementById('submitButton').style.display = 'block';
    document.getElementById('previewButton').style.display = 'none';
}

function validateForm() {
    var satisfactionLevel = document.querySelector('input[name="feedback_3"]:checked');
    var recommendation = document.querySelector('input[name="feedback_4"]:checked');
    var email = document.forms['feedback_form']['email'].value;
    var firstName = document.forms['feedback_form']['first_name'].value;
    var lastName = document.forms['feedback_form']['last_name'].value;

    if (!satisfactionLevel) {
        alert('Please select a satisfaction level.');
        document.getElementById('satisfaction').style.border = '2px solid red';
        document.getElementById('satisfaction').scrollIntoView();
        return false;
    }
    if (!recommendation) {
        alert('Please select a recommendation.');
        document.getElementById('recommendation').style.border = '2px solid red';
        document.getElementById('recommendation').scrollIntoView();
        return false;
    }
    if(firstName == "") {
        alert('Please enter your first name.');
        document.getElementById('first_name').style.border = '2px solid red';
        document.getElementById('first_name').scrollIntoView();
        return false;
    }
    if(lastName == "") {
        alert('Please enter your last name.');
        document.getElementById('last_name').style.border = '2px solid red';
        document.getElementById('last_name').scrollIntoView();
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}




//Auto generated stuff don't touch



// document.getElementById('previewButton').addEventListener('click', function(event) {
//     event.preventDefault();

//     var satisfactionLevel = document.querySelector('input[name="feedback_3"]:checked');
//     var recommendation = document.querySelector('input[name="feedback_4"]:checked');
//     var email = document.forms['feedback_form']['email'].value;
//     var firstName = document.forms['feedback_form']['first_name'].value;

//     if (!satisfactionLevel || !recommendation || !email || !firstName) {
//         alert('All fields must be filled out');
//         return false;
//     }

//     var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailRegex.test(email)) {
//         alert('Please enter a valid email address.');
//         return false;
//     }
//     return true;
//     });
// }

// function validateForm(frm,val) {
//     let x = document.forms[frm][val].value;
//     if (x == "") {
//       alert("This field must be filled out");
//       return false;
//     }
//   }