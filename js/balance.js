// first step add event listner in deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // get the value from user deposit input
    const userDeposit = document.getElementById('user-deposit');
    const userDepositAmount = userDeposit.value;
    
    // set the value in user deposite display button
    const depositDisplay = document.getElementById('deposit-display');
    const depositDisplayAmount = depositDisplay.innerText;
    const totalDepositAmount = parseFloat(userDepositAmount) + parseFloat(depositDisplayAmount);
    depositDisplay.innerText = totalDepositAmount;
    
    userDeposit.value = '';

})


