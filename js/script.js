let count = 0;
function selectButton(element) {
    count++

    // Alerts will show when players > 5
    if (count > 5) {
        alert("You can't select more then 5 player.")
        return
    }
    element.setAttribute('disabled', true)

    const playerName = element.parentNode.children[1].innerText

    // Get Selected area
    const selected = document.getElementById('selected')


    const div = document.createElement('div')
    div.innerHTML = `
        <ol class="flex mt-3">
            <li class="text-white pr-10 pl-5">${count}</li>
            <li class='text-white'>${playerName}</li>
        </ol>
    `

    // <li class="text-white">${count}</li>

    selected.appendChild(div)

    console.log(playerName)
}



