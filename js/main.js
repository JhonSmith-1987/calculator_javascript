function reset() {
    document.getElementById('my_form').reset();
}

function sumar() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    document.getElementById('result').innerHTML = value1 + value2
}

function restar() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    document.getElementById('result').innerHTML = value1 - value2
}

function multiplicar() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    document.getElementById('result').innerHTML = value1 * value2
}

function dividir() {
    var value1 = parseFloat(document.getElementById('value1').value);
    var value2 = parseFloat(document.getElementById('value2').value);
    document.getElementById('result').innerHTML = value1 / value2
}