const numeroDisplay = document.getElementById("numero-display");

var num1 = prompt("Inserisci un numero");
var num2 = prompt("Inserisci un altro numero");

console.log(num1);
console.log(num2);

if(num1 > num2) {
    numeroDisplay.innerHTML = num1;
} else if (num2 > num1) {
    numeroDisplay.innerHTML = num2;
} else {
    numeroDisplay.innerHTML = "I due numeri sono uguali";
}