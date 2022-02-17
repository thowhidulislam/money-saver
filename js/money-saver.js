/*------------------
expense calculation
-------------------*/

document.getElementById('calculate-button').addEventListener('click', function () {
    // food input
    const foodExpenseInput = document.getElementById('food-expense-input');
    const foodExpenseInputText = foodExpenseInput.value;
    const foodExpenseInputEntry = parseFloat(foodExpenseInputText);
    console.log(foodExpenseInputEntry);

    //rent input
    const rentExpenseInput = document.getElementById('rent-expense-input');
    const rentExpenseInputText = rentExpenseInput.value;
    const rentExpenseInputEntry = parseFloat(rentExpenseInputText);
    console.log(rentExpenseInputEntry);

    //clothes input
    const clothExpenseInput = document.getElementById('cloth-expense-input');
    const clothExpenseInputText = clothExpenseInput.value;
    const clothExpenseInputEntry = parseFloat(clothExpenseInputText);
    console.log(clothExpenseInputEntry);

    //total expenses
    const totalExpense = document.getElementById('total-expense');
    const totalExpenseText = totalExpense.innerText;
    const finalTotalExpense = foodExpenseInputEntry + rentExpenseInputEntry + clothExpenseInputEntry;
    parseFloat(finalTotalExpense);
    totalExpense.innerText = finalTotalExpense;
    console.log(totalExpense.innerText)

    //income input
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const incomeInputNumber = parseFloat(incomeInputText);

    //balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const finalBalanceTotal = incomeInputNumber - finalTotalExpense;
    // const balanceTotalNumber = parseFloat(finalBalanceTotal);
    balanceTotal.innerText = finalBalanceTotal;
    console.log(finalBalanceTotal);




    // clear the food expense input field
    foodExpenseInput.value = '';
    rentExpenseInput.value = '';
    clothExpenseInput.value = '';
    // incomeInput.value = '';
})

//save event handler
document.getElementById('button-save').addEventListener('click', function () {
    //save input field
    const saveAmount = document.getElementById('save-input');
    const saveAmountText = saveAmount.value;
    const savingPercentage = parseFloat(saveAmountText);

    // get income input field
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const incomeInputNumber = parseFloat(incomeInputText);

    //percentage calculation
    const savePercentageAmount = (incomeInputNumber * savingPercentage) / 100;
    console.log(savePercentageAmount);

    //showing saving amount
    const savingAmountDisplay = document.getElementById('saving-amount-total');
    const savingAmountDisplayText = savingAmountDisplay.innerText;
    const savingAmountDisplayNumber = parseFloat(savingAmountDisplayText);
    savingAmountDisplay.innerText = savePercentageAmount;

    //remaining balance calculation
    const remainingBalance = document.getElementById('remaining-balance-total');
    const remainingBalanceTotal = parseFloat(remainingBalance.innerText)
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    remainingBalance.innerText = balanceTotalAmount - savePercentageAmount;
    console.log(remainingBalanceTotal);
})