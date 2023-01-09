function getInputValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputAmount = parseFloat(inputFieldString);
    return inputAmount;
}
function getInputValue(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputAmount = parseFloat(inputFieldString);
    return inputAmount;
}

function getAndSetElementValue(elementId, setValue) {
    const inputElement = document.getElementById(elementId);
    inputElement.innerText = setValue;
}

function calculateAmount() {
    const incomeAmount = getInputValue('income-input');
    const foodAmount = getInputValue('food-input');
    const rentAmount = getInputValue('rent-input');
    const clothesAmount = getInputValue('clothes-input');

    const totalExpenses = foodAmount + rentAmount + clothesAmount;
    if (incomeAmount < totalExpenses) {
        alert('Your income amount less than total expneses...');
        return;
    }
    const balanceAmonut = incomeAmount - totalExpenses;

    getAndSetElementValue('total-expenses', totalExpenses);
    getAndSetElementValue('balance', balanceAmonut);

    return balanceAmonut;
}



document.getElementById('calculate-btn').addEventListener('click', function () {

    const incomeInputField = document.getElementById('income-input').value;
    const foodInputField = document.getElementById('food-input').value;
    const rentInputField = document.getElementById('rent-input').value;
    const clothesInputField = document.getElementById('clothes-input').value;

    if (incomeInputField == '' || foodInputField == '' || rentInputField == '' || clothesInputField == '') {
        alert('Please Enter Your Amount...');
        return;
    }
    else if (incomeInputField < 0 || foodInputField < 0 || rentInputField < 0 || clothesInputField < 0) {
        alert('Yout Amount Less Than Zero...');
        return;
    }
    else {
        calculateAmount()
    }
})


document.getElementById('save-btn').addEventListener('click', function () {
    const saveParsentInputField = document.getElementById('save-parsent').value;

    const incomeAmount = getInputValueById('income-input');
    const saveParsentInput = getInputValueById('save-parsent');

    if (saveParsentInputField == '') {
        alert('Please Enter Your Saving Amount...');
        return;
    }
    else if (saveParsentInput < 1) {
        alert('You can not save less than 1%...');
        return;
    }
    else if (saveParsentInput > 100) {
        alert('You can not save greater than 100%...');
        return;
    }
    else {
        const saveParsent = incomeAmount * (saveParsentInput / 100);
        const balanceAmonut = calculateAmount();
        if (saveParsent > balanceAmonut) {
            alert('You can not save greater than balance amount...');
            return;
        }
        const remainingBalance = balanceAmonut - saveParsent;
        getAndSetElementValue('saveing-amonut', saveParsent);
        getAndSetElementValue('remaining-balance', remainingBalance);
    }

})