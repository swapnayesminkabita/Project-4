// time & date

document.getElementById('date').innerHTML = new Date().toLocaleDateString();
setInterval(() => document.getElementById('time').innerHTML = new Date().toLocaleTimeString());



// signup form validation


function signinformvalidation(){
    let a = document.getElementById('first_name').value.trim();
    let b = document.getElementById('last_name').value.trim();
    let c = document.getElementById('phone_number').value.trim();
    let d = document.getElementById('email').value.trim();
    let e = document.getElementById('user_name').value.trim();
    let f = document.getElementById('password').value.trim();

     if (a !== '' && b !== '' &&  c.length == 11 && d.includes('@') && d.includes('.') && e !== '' && f !== ''){
        window.alert('Sign Up Successful');
     }
     else{
        window.alert('Please fill out all field');
     }

}


// login form validation


function loginformvalidation(){
    let p = document.getElementById('u_name').value.trim();
    let q = document.getElementById('p_as').value.trim();
    
    if(p !== '' && q !== ''){
        window.alert('Log In Successful');
    }
    else{
        window.alert('Please fill out all field');
    }
}