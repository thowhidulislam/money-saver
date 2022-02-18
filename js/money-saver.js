/*------------------
expense calculation
-------------------*/
function getAmount(purpose) {
    const failMessage = document.getElementById('notify-fail');
    const amount = document.getElementById(purpose);
    const amountText = amount.value;
    const amountEntry = parseFloat(amountText);
    if (isNaN(amountEntry) || amountEntry < 0) {
        failMessage.style.display = 'block';
        return 0;
    }
    else {

        failMessage.style.display = 'none';
        return amountEntry;
    }

    // amount.value = '';
}
function getBalance() {

    //total expenses
    const totalExpenseAmount = document.getElementById('total-expense-amount');
    const totalExpenseAmountText = totalExpenseAmount.innerText;
    const totalExpenseAmountNumber = parseFloat(totalExpenseAmountText);
    let newTotalExpenseAmount = getAmount('food-expense-amount') + getAmount('rent-expense-amount') + getAmount('cloth-expense-amount');
    const failMessage = document.getElementById('notify-fail');
    if (isNaN(getAmount('food-expense-amount')) || isNaN(getAmount('rent-expense-amount')) || isNaN(getAmount('cloth-expense-amount')) || getAmount('food-expense-amount') == 0 || getAmount('rent-expense-amount') == 0 || getAmount('cloth-expense-amount') == 0 || getAmount('income-amount') == 0 || isNaN(getAmount('income-amount'))) {
        failMessage.style.display = 'block';
        totalExpenseAmount.innerText = 0;
    }
    else {
        totalExpenseAmount.innerText = newTotalExpenseAmount;
        console.log(totalExpenseAmount.innerText)
    }

    //balance total
    const balanceTotalAmount = document.getElementById('balance-total-amount');
    const balanceTotalAmountText = balanceTotalAmount.innerText;
    const balanceTotalAmountNumber = parseFloat(balanceTotalAmountText);
    let newBalanceTotalAmount = getAmount('income-amount') - newTotalExpenseAmount;
    if (isNaN(getAmount('food-expense-amount')) || isNaN(getAmount('rent-expense-amount')) || isNaN(getAmount('cloth-expense-amount')) || getAmount('food-expense-amount') == 0 || getAmount('rent-expense-amount') == 0 || getAmount('cloth-expense-amount') == 0 || getAmount('income-amount') == 0 || isNaN(getAmount('income-amount'))) {
        failMessage.style.display = 'block';
        balanceTotalAmount.innerText = 0;
    }
    else {
        balanceTotalAmount.innerText = newBalanceTotalAmount;
        console.log(newBalanceTotalAmount);
    }
}

//calculate event handler
document.getElementById('calculate-button').addEventListener('click', function () {
    getBalance();
})


/* -----------------------------
    save calculation    
 ------------------------------- */

//save event handler
document.getElementById('button-save').addEventListener('click', function () {
    //save input field
    const saveAmount = document.getElementById('save-amount');
    const saveAmountText = saveAmount.value;
    const savingPercentage = parseFloat(saveAmountText);

    // get income input field
    const incomeAmount = document.getElementById('income-amount');
    const incomeAmountText = incomeAmount.value;
    const incomeAmountNumber = parseFloat(incomeAmountText);

    //percentage calculation
    const savePercentageAmount = (incomeAmountNumber * savingPercentage) / 100;
    console.log(savePercentageAmount);

    //showing saving amount
    const savingAmountDisplay = document.getElementById('saving-amount-total');
    const savingAmountDisplayText = savingAmountDisplay.innerText;
    const savingAmountDisplayNumber = parseFloat(savingAmountDisplayText);
    savingAmountDisplay.innerText = savePercentageAmount;

    //remaining balance calculation
    const remainingBalance = document.getElementById('remaining-balance-total');
    const remainingBalanceTotal = parseFloat(remainingBalance.innerText)
    const balanceTotalAmount = document.getElementById('balance-total-amount');
    const balanceTotalAmountText = balanceTotalAmount.innerText;
    const balanceTotalAmountNumber = parseFloat(balanceTotalAmountText);
    remainingBalance.innerText = balanceTotalAmountNumber - savePercentageAmount;
    console.log(remainingBalanceTotal);
})