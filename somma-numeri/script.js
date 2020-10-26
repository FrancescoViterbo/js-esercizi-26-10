var numeri = [];

const sommaNumeri = document.getElementById("somma-numeri");

while (numeri.length < 5) {
    let num = prompt("Inserisci un numero");
    numeri.push(num);
}

var totale = 0;

for (i = 0; i < numeri.length; i++) {
    totale = totale + parseInt(numeri[i]);
}

// var i = 0; 
// while (i < numeri.length) {
//     totale = totale + parseInt(numeri[i]);
//     i++;
// }

sommaNumeri.innerHTML = totale;