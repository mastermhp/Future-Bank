function getInputValue(inputId) {
    const InputField = document.getElementById(inputId);
    const inputAmountText = InputField.value;
    const inputAmount = parseFloat(inputAmountText);
    //clear input field
    InputField.value = '';
    return inputAmount;
}

function updateTotalField
(totalFieldId, amount) {
    const totalElment = document.getElementById(totalFieldId);
    const totalText = totalElment.innerText;
    const previousTotalAmount = parseFloat(totalText);
    const newTotalAmount = previousTotalAmount + amount;
    totalElment.innerText = newTotalAmount;
}

function getCurrentBalance() {
    const balancetotal = document.getElementById('balance-total');
    const previousBalancetotaltext = balancetotal.innerText;
    const previousBalancetotalAmount  = parseFloat(previousBalancetotaltext);
    return previousBalancetotalAmount;
}


function updateBalance(balanceAmount, isAdd) {
    const balancetotal = document.getElementById('balance-total');
    const previousBalancetotalAmount = getCurrentBalance();
    if (isAdd == true) {
        balancetotal.innerText = previousBalancetotalAmount + balanceAmount;  
    }
    else{
        balancetotal.innerText = previousBalancetotalAmount - balanceAmount;
    }
}


//handle Deposit button event
    document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposited
    const newDepositAmount = getInputValue('deposit-input');
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
       //update account balance 
        updateBalance(newDepositAmount, true);
    }
})


//handle Withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get the withdraw amount 
    const newWithdrawAmount = getInputValue('withdraw-input');
    const curerntBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount < curerntBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        //update account balance
        updateBalance(newWithdrawAmount, false);  
    }
    if (newWithdrawAmount > curerntBalance) {
        alert('you can not withdraw more than you have in your account')
    }
});