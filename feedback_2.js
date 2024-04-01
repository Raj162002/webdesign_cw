function previewview() {
    if(validateForm()){
        let satisfactionLevel = document.querySelector('input[name="feedback_3"]:checked').value;
        let recommendation = document.querySelector('input[name="feedback_4"]:checked').value;
        let email = document.forms['feedback_form']['email'].value;
        let firstName = document.forms['feedback_form']['first_name'].value;
        let lastName= document.forms['feedback_form']['last_name'].value;
        let visting= document.querySelector('input[name="feedback_1"]:checked');
        let useful= document.querySelector('input[name="feedback_2"]:checked');

        let preview =   'First Name: ' + firstName + '<br>' +
                        'Last Name: ' + lastName + '<br>' +
                        'Email: ' + email + '<br>' +
                        'Satisfaction Level: ' + satisfactionLevel + '<br>' +
                        'Would recommend: ' + recommendation;
        if (visting!=null){
            preview += '<br>' + 'First time visiting our site? : ' + visting.value;
        }
        if (useful!=null){
            preview += '<br>' + 'Was the website informative and easy to navigate through? : ' + useful.value;
        }
        document.getElementById('previewSection').innerHTML = "<legend>Preview</legend>"+ preview;
        document.getElementById('previewSection').style.display = 'block';
        document.getElementById('submitButton').style.display = 'block';
        document.getElementById('previewButton').style.display = 'none';
    }
}
function previewreset(){
    document.getElementById('previewSection').style.display = 'none';
    document.getElementById('submitButton').style.display = 'none';
    document.getElementById('previewButton').style.display = 'block';

}

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('previewSection').style.display = 'none';
    document.getElementById('submitButton').style.display = 'none';
    document.getElementById('previewButton').style.display = 'block';
    document.getElementById('feedback_form').reset();
});

function validateForm() {
    let firstName = document.forms['feedback_form']['first_name'].value;
    let lastName = document.forms['feedback_form']['last_name'].value;
    let email = document.forms['feedback_form']['email'].value;
    let satisfactionLevel = document.querySelector('input[name="feedback_3"]:checked');
    let recommendation = document.querySelector('input[name="feedback_4"]:checked');

    document.getElementById('first_name_container').style.border = '';
    document.getElementById('last_name_container').style.border = '';
    document.getElementById('email_container').style.border = '';
    document.getElementById('satisfaction').style.border = '';
    document.getElementById('recommendation').style.border = '';

    if(firstName == "") {
        alert('Please enter your first name.');
        document.getElementById('first_name_container').style.border = '4px solid red';
        document.getElementById('first_name_container').scrollIntoView();
        return false;
    }
    if(lastName == "") {
        alert('Please enter your last name.');
        document.getElementById('last_name_container').style.border = '4px solid red';
        document.getElementById('last_name_container').scrollIntoView();
        return false;
    }

    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        document.getElementById('email_container').style.border = '4px solid red';
        document.getElementById('email_container').scrollIntoView();
        return false;
    }

    if (satisfactionLevel==null) {
        alert('Please select a satisfaction level.');
        document.getElementById('satisfaction').style.border = '4px solid red';
        document.getElementById('satisfaction').scrollIntoView();
        return false;
    }
    if (recommendation==null) {
        alert('Please select a recommendation.');
        document.getElementById('recommendation').style.border = '4px solid red';
        document.getElementById('recommendation').scrollIntoView();
        return false;
    }
    return true;
}
function suggestarea(){
    let feedback_2=document.querySelector('input[name="feedback_2"]:checked').value;
    if(feedback_2=="no"){
        document.getElementById('suggestion').style.display = 'block';
    }else{
        document.getElementById('suggestion').style.display = 'none';
    }
}
//Making this so that the comment is visible and form gets submitted without any issue
function makecommentvisible(){
    document.getElementById('suggestion').style.display = 'block';
    document.getElementById('suggestion').readOnly = true;


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