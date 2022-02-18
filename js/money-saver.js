/* ------------------------------
expense and balance calculation
-------------------------------- */
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

}

function condition() {
    isNaN(getAmount('food-expense-amount')) || isNaN(getAmount('rent-expense-amount')) || isNaN(getAmount('cloth-expense-amount')) || getAmount('food-expense-amount') == 0 || getAmount('rent-expense-amount') == 0 || getAmount('cloth-expense-amount') == 0 || getAmount('income-amount') == 0 || isNaN(getAmount('income-amount'))
}

function calculateExpenseBalance() {
    //total expenses
    const totalExpenseAmount = document.getElementById('total-expense-amount');
    const totalExpenseAmountText = totalExpenseAmount.innerText;
    const totalExpenseAmountNumber = parseFloat(totalExpenseAmountText);
    let newTotalExpenseAmount = getAmount('food-expense-amount') + getAmount('rent-expense-amount') + getAmount('cloth-expense-amount');
    const failMessage = document.getElementById('notify-fail');
    const failMessageExpense = document.getElementById('notify-fail-expense');
    if (newTotalExpenseAmount > getAmount('income-amount')) {
        failMessageExpense.style.display = 'block';
    }
    else {
        failMessageExpense.style.display = 'none';
    }
    if (condition()) {
        failMessage.style.display = 'block';
        totalExpenseAmount.innerText = 0;
    }
    else {
        totalExpenseAmount.innerText = newTotalExpenseAmount;
    }

    //balance total
    const balanceTotalAmount = document.getElementById('balance-total-amount');
    const balanceTotalAmountText = balanceTotalAmount.innerText;
    const balanceTotalAmountNumber = parseFloat(balanceTotalAmountText);
    let newBalanceTotalAmount = getAmount('income-amount') - newTotalExpenseAmount;
    if (condition()) {
        failMessage.style.display = 'block';
        balanceTotalAmount.innerText = 0;
    }
    else {
        balanceTotalAmount.innerText = newBalanceTotalAmount;
    }
}

//calculate event handler
document.getElementById('calculate-button').addEventListener('click', function () {
    calculateExpenseBalance();
})

/* -----------------------------
    save calculation    
 ------------------------------- */

//save event handler
document.getElementById('button-save').addEventListener('click', function () {

    //percentage calculation
    const savePercentageAmount = (getAmount('income-amount') * getAmount('save-amount')) / 100;

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
    const failMessageSave = document.getElementById('notify-fail-save');
    if (savePercentageAmount > balanceTotalAmountNumber) {
        failMessageSave.style.display = 'block';
    }
    else {
        failMessageSave.style.display = 'none';
    }
    remainingBalance.innerText = balanceTotalAmountNumber - savePercentageAmount;
})