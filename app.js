document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeField=document.getElementById("income-field");
    const incomeText=incomeField.value;
    const incomeAmount=parseFloat(incomeText);
    console.log(incomeAmount);
    
    //food
    const foodField=document.getElementById("food-field");
    const foodText=foodField.value;
    const foodAmount=parseFloat(foodText);
    

    //rent
    const rentField=document.getElementById("rent-field");
    const rentText=rentField.value;
    const rentAmount=parseFloat(rentText);
    

    //cloth
    const clothField=document.getElementById("cloth-field");
    const clothText=clothField.value;
    const clothAmount=parseFloat(clothText);

    //expenseTotal
    const expenseTotal=document.getElementById('expense-total');
    const expenseText=expenseTotal.innerText;
    const expenseAmount=parseFloat(expenseText);
    const totalExpense=expenseAmount+foodAmount+rentAmount+clothAmount;
    expenseTotal.innerText=totalExpense;
    // console.log(totalExpense);

    //balanceTotal
    const balanceTotal=document.getElementById('balance-total');
    const balanceText=balanceTotal.innerText;
    const previousBalance=parseFloat(balanceText);
    const totalBalance=previousBalance+incomeAmount-totalExpense;
    balanceTotal.innerText=totalBalance;


    //saving amount
    
    
})

document.getElementById('save-btn').addEventListener('click',function(){
    console.log('clicked');
    const saveField=document.getElementById('save-field');
    const saveFieldText=saveField.value;
    const saveTotal=parseFloat(saveFieldText);
    console.log(saveTotal);

    const saveTotalAmount=document.getElementById('save-amount');
    const saveTotalText=saveTotalAmount.innerText;
    const saveAmount=parseFloat(saveTotalText);
    const totalSavedAmount=saveAmount+(saveTotal*totalBalance)/100;
    saveTotalAmount.innertext=totalSavedAmount;
    console.log(totalSavedAmount);
})

