const form = document.getElementById('form');
const emailname = document.getQuerySelector('email');
form.addEventListener('submit');


var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function validateEmail (email) {
    if (form.emailname.match(mailformat)) {
        
        return true;
    } else console.log('you have entered an invalid email address');
    return false;
}