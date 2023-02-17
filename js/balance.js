const totalBalance = document.getElementById("total-balance");
const totalBalanceGet = totalBalance.innerText;
const totalBalanceGetNew = parseFloat(totalBalanceGet);
// first step add event listner in deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  // get the value from user deposit input
  const userDeposit = document.getElementById("user-deposit");
  const userDepositAmount = userDeposit.value;

  // set the value in user deposite display button
  const depositDisplay = document.getElementById("deposit-display");
  const depositDisplayAmount = depositDisplay.innerText;
  const totalDepositAmount =
    parseFloat(userDepositAmount) + parseFloat(depositDisplayAmount);
  depositDisplay.innerText = totalDepositAmount;

  const inTotalBalance = totalBalanceGetNew + totalDepositAmount;
  totalBalance.innerText = inTotalBalance;
  userDeposit.value = "";
});

// start working withdraw section
//first step add event listner in withdraw button
document
  .getElementById("btn-withdraw")
  .addEventListener("click", function () {
    const userWithdraw = document.getElementById('user-withdraw');
    const userWithdrawValue = parseFloat (userWithdraw.value);

    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountGet = parseFloat (withdrawAmount.innerText);
    
    const totalWithdrawBalance = userWithdrawValue + withdrawAmountGet;
    withdrawAmount.innerText = totalWithdrawBalance;

    const totalBalanceAfterWithdraw = totalBalanceGetNew - totalWithdrawBalance;
    totalBalance.innerText = totalBalanceAfterWithdraw;

    userWithdraw.value = '';
    
  });

//start adding total ammount in balance
