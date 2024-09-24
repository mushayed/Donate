
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
        return false;
    } 
    else {
        let existingAmount = document.getElementById(id).innerText;
        let existingAmountNumeric = Number(existingAmount);

        existingAmountNumeric += amountNumeric;
        myBalanceNumeric -= amountNumeric;

        document.getElementById(id).innerText = existingAmountNumeric;
        document.getElementById('my-balance').innerText = myBalanceNumeric;

        document.getElementById('confirmation-modal').showModal();
        return true;
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

    const footerStage = document.getElementById('footer-stage');
    if(clickedStageId === 'history-state') {
        footerStage.classList.add('hidden');
        clickedStage.classList.add('flex');
    }
    else {
        footerStage.classList.add('flex');
        unclickedStage.classList.remove('flex');
    }
}


function updateHistory(donationAmount, headingId) {
    const historyState = document.getElementById('history-state');
    const headingText = document.getElementById(headingId).innerText;

    const innerSection = document.createElement('section');
    innerSection.classList.add('border-2', 'rounded-lg', 'flex', 'flex-col', 'p-8', 'gap-2', 'justify-evenly');

    const heading = document.createElement('h3');
    heading.classList.add('text-xl', 'font-bold');
    heading.textContent = `${donationAmount} Taka is Donated for ${headingText}`;

    const dateParagraph = document.createElement('p');
    dateParagraph.classList.add('text-base', 'font-light');

    const currentDate = new Date();
    dateParagraph.textContent = `Date: ${currentDate}`;

    innerSection.appendChild(heading);
    innerSection.appendChild(dateParagraph);

    historyState.appendChild(innerSection);
}