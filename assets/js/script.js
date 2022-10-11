// Prima traccia
var nome = 'Aldo';
let cliente = 'cliente';
const numero = 3.14;
document.getElementById('concatena').innerHTML = `${nome}, ${cliente}, ${numero}`;
// document.getElementById('concatena').innerHTML = nome + ', ' + cliente + ', ' + numero;

//concatenazione2
var concatenazione = `${nome}, ${cliente}, ${numero}`;
document.getElementById('concatena2').innerHTML = concatenazione;

// Seconda traccia
var nome2 = 'Mario';
document.getElementById('var').innerHTML = `${nome2} `;
{
    let nome2= 'Carla';
    document.getElementById('let').innerHTML = `${nome2} `;
}
document.getElementById('final').innerHTML = `${nome2} `;

// 
document.getElementById('let2').innerHTML = `${nome2} `;
{
    let nome2= 'Carla';
    document.getElementById('let3').innerHTML = `${nome2} `;
    document.getElementById('final2').innerHTML = `${nome2} `;
}

//Terza traccia 
var valore = 15;
document.getElementById('iniziale').innerHTML += valore ;
document.getElementById('valore1').innerHTML += `${valore + 15}, ${(++valore) + 15}`;
document.getElementById('valore2').innerHTML += `${valore - 11}, ${(--valore) - 11}`;
document.getElementById('valore3').innerHTML += valore * 3;
document.getElementById('valore4').innerHTML += valore / 3;
document.getElementById('valore5').innerHTML += `${valore} è un numero`;









