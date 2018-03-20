 function validateForm(){

 var user = document.getElementById("userId").value;
 var pass = document.getElementById("userPss").value;

 if((user=="sanjay") && (pass=="1234")){
 return true;
 }else{
 alert("please enter valid user and password")
 return false;
 }
 }

function validate() {

    var name = document.getElementById('name').value;

    var email = document.getElementById('email').value;

    var password = document.getElementById('psw').value;

    var message = document.getElementById('msg').value;

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;



    if (name == '') {
        alert("please enter your name");
        return false;
    }
    else if (email == '') {
        alert('please enter your email address');
        return false;
    }
    else if (reg.test(email) == false)
    {
        alert('Invalid Email Address');
        return false;
    }
    else if (password == '') {
        alert('please enter your password');
        return false;
    }
    else if (message == '') {
        alert('please enter your message');
        return false;
    }
    else {
        return true;
    }
    /*   alert(name);
     alert(email);
     alert(password);
     alert(message);
    return false;*/
}