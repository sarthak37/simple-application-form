var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_eror=document.getElementById('email_eror');
var pass_eror=document.getElementById('pass_eror');

email.addEventlistener('textinput', email_Verify);
password.addEventlistener('textinput', pass_Verify);

function validated(){
    if(email.value.length < 9){
        email.style.border = "1px solid red";
        email_eror.style.display = "block";
        email.focus();
        return false;
    }
    if(password.value.length < 9){
        password.style.border = "1px solid red";
        pass_eror.style.display ="block";
        password.focus()
        return false;
    }
}
function email_Verify(){
    if(email.value.length >=8){
        email.style.border = "1px solid silver";
        email_eror.style.display="none";
        return true;
    }
}
function pass_Verify(){
    if(password.value.length >= 8){
        password.style.border = "1px solid blue";
        pass_eror.style.display = "none";
        return true;
     }
}     
