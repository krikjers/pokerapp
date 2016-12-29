document.getElementById("calculate").onclick = calculate;
document.getElementById("reset").onclick = resetForm;

/**
 * Calculate result
 */
function calculate() {
    console.log('calculate')

    const outs = getOuts().value
    const pot = getPot().value
    const bet = getBet().value
    const round = getRound().value

}

function getRound() {
    return document.querySelector('input[name = "round"]:checked');
}

function getOuts() {
    return document.getElementById('outs')
}

function getPot() {
    return document.getElementById('pot')
}

function getBet() {
    return document.getElementById('bet')
}

function setResult(result) {
    document.getElementById('result').innerHTML = result
}

/**
 * Reset form
 */
function resetForm() {
    console.log('reset')
}