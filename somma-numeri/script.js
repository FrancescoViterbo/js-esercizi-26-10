var numeri = [];
var totale = 0;

const sommaNumeri = document.getElementById("somma-numeri");

while (numeri.length < 5) {
    let num = prompt("Inserisci un numero");
    numeri.push(num);
}

// for (i = 0; i < 5; i++) {
//     let num = prompt("Inserisci un numero");
//     totale = totale + parseFloat(num);
// }


for (i = 0; i < numeri.length; i++) {
    totale = totale + parseFloat(numeri[i]);
}

// var i = 0; 
// while (i < numeri.length) {
//     totale = totale + parseFloat(numeri[i]);
//     i++;
// }

sommaNumeri.innerHTML = totale;