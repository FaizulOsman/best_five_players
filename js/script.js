let count = 0;

// Function for players selectButton
function selectButton(element) {
    count++

    // Alerts will show when players > 5
    if (count > 5) {
        alert("You can't select more then 5 player.")
        return
    }

    // After click select Button it will be desable 
    element.setAttribute('disabled', true)
    element.style.backgroundColor = 'tomato'

    // Get player name By using parentNode
    const playerName = element.parentNode.children[1].innerText


    // Get Selected area
    const selected = document.getElementById('selected')

    // Create div and list to get selected player
    const div = document.createElement('div')
    div.innerHTML = `
        <ol class="flex mt-3">
            <li class="text-white pr-10 pl-5">${count}.</li>
            <li class='text-white'>${playerName}</li>
        </ol>
    `

    // Append div in selected area
    selected.appendChild(div)
}






// Calculate Button Onclick
document.getElementById('calculate').addEventListener('click', function () {
    // count value cannot be more then five
    if (count > 5) {
        count = 5
    } else if (count == 0) {
        alert('Please select at least one player')
    }

    // Get per-player and player-expenses id
    const perPlayer = document.getElementById('per-player').value
    const playerExpenses = document.getElementById('player-expenses')


    const countPlayerExpenses = Number(perPlayer) * count

    // Alert for invalid value
    if (perPlayer == '') {
        alert('Please provide a number')
        return
    } else if (Number(perPlayer) < 0) {
        alert('Please provide a positive number')
    } else if (isNaN(countPlayerExpenses)) {
        alert('Please make sure that your input is a number')
        return
    }


    // Calculate Player Expenses
    playerExpenses.innerText = countPlayerExpenses
})




// Calculate button click
document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpenses = document.getElementById('player-expenses').innerText
    const managerCost = document.getElementById('manager-cost').value
    const coachCost = document.getElementById('coach-cost').value
    const total = document.getElementById('total')

    if (managerCost == '' || coachCost == '') {
        alert('Please type a number')
        return
    } else if (Number(managerCost) < 0 || Number(coachCost < 0)) {
        alert("Please provide a positive number")
        return
    }

    total.innerText = Number(playerExpenses) + Number(managerCost) + Number(coachCost)
})