function validateForm(frm,val) {
    let x = document.forms[frm][val].value;
    if (x == "") {
      alert("This field must be filled out");
      return false;
    } 
}




function validsubmit(){

}

