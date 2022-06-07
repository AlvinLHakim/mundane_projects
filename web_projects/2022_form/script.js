const username = document.getElementById('username');
const email = document.getElementById('email-address');
const  submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
    e.preventDefault();

    // If username input is left empty, the form will be invalid
    if(username.value ===""){
        document.getElementById('user-error').innerHTML = "Please insert your username.";
        username.focus();
        return false;
    } 
    
    // If email input is left empty, the form will be invalid
    // if(email.value===""){
    //     document.getElementById('email-address').innerHTML = "Please insert your email address.";
    //     email.focus();
    //     return false;
    // }
    return true; //Can submit form to the server
}

// const emailIsValid = email => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

submitBtn.addEventListener('click', validate);