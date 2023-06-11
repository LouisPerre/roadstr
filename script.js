const selectPickup = document.getElementById('pickupInput')
const selectAssurance = document.getElementById('assuranceInput')
const priceElement = document.getElementById('buttonToPay')
const buttonRegex = /Payer (\d+) €/g
const matchesButton = priceElement.innerHTML.match(buttonRegex)
const nombres = matchesButton.map(match => match.replace(/Payer | €/g, ''))
const basePrice = parseInt(nombres[0])

selectPickup.addEventListener('change', updatePrice)
selectAssurance.addEventListener('change', updatePrice)

function updatePrice() {
    const price1 = parseInt(selectPickup.value)
    const price2 = parseInt(selectAssurance.value)
    selectTotal = price1 + price2 + basePrice
    priceElement.textContent = `Payer ${selectTotal} €`
}