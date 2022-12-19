let inp = document.getElementsByTagName('input');
let emaiL = document.getElementById('email');
let password = document.getElementById('pass');
let repeatPass = document.getElementById('repeat');
const registerBtn = document.getElementsByTagName('button')[0]
console.log(registerBtn);

const validateform = () =>{
    let email =emaiL.value
    console.log(email);
    if(email.indexof('@') && email.indexof('.')){
        alert ('amjilttai burtggdlee')
    } else  {
        alert('Email oruulna uu')
    }
}

 const passCheck = () =>{
    let check=''
    let pass = password.value;
    let repeatpass = repeatPass.value;
    console.log(pass);
    console.log(repeatpass);
    if( pass.length>=8 && pass === repeatpass  ){
        check = true;
        password.style.border = '1px solid green'
        repeatPass.style.border = '1px solid green'
        // alert('Zuw bna')
    }else {
        check = false;
        password.style.border = '1px solid red'
        repeatPass.style.border = '1px solid red'
        // alert('Error: Password must be at least 8 characters')
    }
    return check;
  }
 registerBtn.addEventListener('click', passCheck)
 registerBtn.addEventListener('click', validateform)
