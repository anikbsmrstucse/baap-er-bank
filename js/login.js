// step-1 add event listner in login button
document.getElementById('btn-login').addEventListener('click',function(){
    // step-2 get value from email imput feild
    // get input feild value use .value function
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;
    //step-3 get password from password feild
    const passwordFeild = document.getElementById('user-password');
    const userPassword = passwordFeild.value;
    // step-4 check username and password
    if(email === 'anik@gmail.com' && userPassword === 'anikapy1'){
        window.location.href = "/balancePage.html";
    }
    else{
        const invalidWarning = 'Give Valid Information';
        const formContainer = document.getElementById('form-container');
        const p = document.createElement('p');
        p.innerText = invalidWarning;
        formContainer.appendChild(p);
        p.style.marginTop = '8px';
        p.style.fontSize = '.8rem';
        p.style.fontWeight = 'bold';
        p.style.color = '#FF5F9E';

        
    }
})