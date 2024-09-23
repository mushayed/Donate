
document.getElementById('donateBtnNoakhali').addEventListener('click', function(event) {
    event.preventDefault();

    const amountNoakhali =  getValueFromInputField('donateAmountNoakhali');
    donate(amountNoakhali, 'totalAmountNoakhali');
})

document.getElementById('donateBtnFeni').addEventListener('click', function(event) {
    event.preventDefault();

    const amountFeni =  getValueFromInputField('donateAmountFeni'); 
    donate(amountFeni, 'totalAmountFeni');
})

document.getElementById('donateBtnQuota').addEventListener('click', function(event) {
    event.preventDefault();

    const amountQuota =  getValueFromInputField('donateAmountQuota');
    donate(amountQuota, 'totalAmountQuota');
})
