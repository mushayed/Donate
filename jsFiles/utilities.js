
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");   
    const secondNav = document.getElementById("second-nav");

    if (window.scrollY > 0) {
      header.classList.add('blur-bg');
      header.classList.remove('bg-[#F9F7F3]')
      secondNav.classList.add('blur-bg');
    } 
    else {
      header.classList.remove('blur-bg');
      header.classList.add('bg-[#F9F7F3]');
      secondNav.classList.remove('blur-bg');
    }
});


function getValueFromInputField(id) {
    const value = document.getElementById(id).value;
    return value;
}

function donate(amount, id) {
    let myBalance = document.getElementById('my-balance').innerText;
    let myBalanceNumeric = Number(myBalance);

    const amountNumeric = Number(amount);

    if (isNaN(amount) || amount.trim() === '' || amountNumeric > myBalanceNumeric || amountNumeric < 1) {
        alert("Invalid Donation Amount!");
    } 
    else {
        let existingAmount = document.getElementById(id).innerText;
        let existingAmountNumeric = Number(existingAmount);

        existingAmountNumeric += amountNumeric;
        myBalanceNumeric -= amountNumeric;

        document.getElementById(id).innerText = existingAmountNumeric;
        document.getElementById('my-balance').innerText = myBalanceNumeric;

        document.getElementById('confirmation-modal').showModal();
    }
}



function toggleButtonColor(clickedButtonId, unclickedButtonId) {
    const clickedButton = document.getElementById(clickedButtonId);
    const unclickedButton = document.getElementById(unclickedButtonId);

    unclickedButton.classList.remove('bg-my-green');
    clickedButton.classList.add('bg-my-green');
}

function toggleState(clickedStageId, unclickedStageId) {
    const clickedStage = document.getElementById(clickedStageId);
    const unclickedStage = document.getElementById(unclickedStageId);

    clickedStage.classList.remove('hidden');
    unclickedStage.classList.add('hidden');
}