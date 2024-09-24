
document.getElementById('donateBtnNoakhali').addEventListener('click', function(event) {
    event.preventDefault();

    const amountNoakhali =  getValueFromInputField('donateAmountNoakhali');
    const succes =  donate(amountNoakhali, 'totalAmountNoakhali');
    document.getElementById('donateAmountNoakhali').value = '';

    if(succes) {
        updateHistory(amountNoakhali, 'heading-noakhali');
    }
})

document.getElementById('donateBtnFeni').addEventListener('click', function(event) {
    event.preventDefault();

    const amountFeni =  getValueFromInputField('donateAmountFeni'); 
    const succes =  donate(amountFeni, 'totalAmountFeni');
    document.getElementById('donateAmountFeni').value = '';

    if(succes) {
        updateHistory(amountFeni, 'heading-feni');
    }
})

document.getElementById('donateBtnQuota').addEventListener('click', function(event) {
    event.preventDefault();

    const amountQuota =  getValueFromInputField('donateAmountQuota');
    const succes =  donate(amountQuota, 'totalAmountQuota');
    document.getElementById('donateAmountQuota').value = '';

    if(succes) {
        updateHistory(amountQuota, 'heading-quota');
    }
})


document.getElementById('blogBtn').addEventListener('click', function() {
    window.location.href = 'blog.html';
})


document.getElementById('donationBtn').addEventListener('click', function() {
    toggleButtonColor('donationBtn', 'historyBtn');
    toggleState('donation-state', 'history-state');
})

document.getElementById('historyBtn').addEventListener('click', function() {
    toggleButtonColor('historyBtn', 'donationBtn');
    toggleState('history-state', 'donation-state');
})
