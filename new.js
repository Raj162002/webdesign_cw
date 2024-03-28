function vali(event) {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const card = document.getElementById('card').value;
    const cvn = document.getElementById('cvn').value;
    const expDate = document.getElementById('expDate').value;
    

    if (!name || !contact || !email || !card || !cvn || !expDate) {
        alert("All Fields must be filled");
        
        

    }
    else if (!/^[0]{1}[7]{1}[01245678]{1}[0-9]{7}$/.test(contact)) {
        alert("Inavlid Contact");

    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Inavlid Email");

    }
    else if (!/^\d{3}$/.test(cvn)) {
        alert("Inavlid CVN");

    }
    else if (!/^(4|5|6)[0-9]{15,18}$/.test(card)) {
        alert("Inavlid Card Number");

    }
    
    else {

        modal.style.display = 'none';
        popup.style.display = 'flex';
    }
}