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
    }

    // Get per-player and player-expenses id
    const perPlayer = document.getElementById('per-player').value
    const playerExpenses = document.getElementById('player-expenses')


    const countPlayerExpenses = Number(perPlayer) * count





    // Calculate Player Expenses
    playerExpenses.innerText = countPlayerExpenses
})





document.getElementById('calculate-total').addEventListener('click', function () {
    const playerExpenses = document.getElementById('player-expenses').innerText
    const managerCost = document.getElementById('manager-cost').value
    const coachCost = document.getElementById('coach-cost').value
    const total = document.getElementById('total')

    total.innerText = Number(playerExpenses) + Number(managerCost) + Number(coachCost)
})