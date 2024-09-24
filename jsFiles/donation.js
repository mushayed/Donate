
document.getElementById('donateBtnNoakhali').addEventListener('click', function(event) {
    event.preventDefault();

    const amountNoakhali =  getValueFromInputField('donateAmountNoakhali');
    donate(amountNoakhali, 'totalAmountNoakhali');
    document.getElementById('donateAmountNoakhali').value = '';
})

document.getElementById('donateBtnFeni').addEventListener('click', function(event) {
    event.preventDefault();

    const amountFeni =  getValueFromInputField('donateAmountFeni'); 
    donate(amountFeni, 'totalAmountFeni');
    document.getElementById('donateAmountFeni').value = '';
})

document.getElementById('donateBtnQuota').addEventListener('click', function(event) {
    event.preventDefault();

    const amountQuota =  getValueFromInputField('donateAmountQuota');
    donate(amountQuota, 'totalAmountQuota');
    document.getElementById('donateAmountQuota').value = '';
})


document.getElementById('blogBtn').addEventListener('click', function() {
    window.location.href = 'blog.html';
})
