const listaNomi = document.getElementById("lista-nomi");

var parola1 = prompt("Inserisci una parola");
var parola2 = prompt("Inserisci un'altra parola");

if (parola1.length > parola2.length) {
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    li1.innerHTML = parola1;
    li2.innerHTML = parola2;
    listaNomi.appendChild(li2);
    listaNomi.appendChild(li1);
} else if (parola1.length < parola2.length) {
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    li1.innerHTML = parola1;
    li2.innerHTML = parola2;
    listaNomi.appendChild(li1);
    listaNomi.appendChild(li2);
} else {
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    li1.innerHTML = parola1;
    li2.innerHTML = parola2;
    listaNomi.appendChild(li1);
    listaNomi.appendChild(li2);
}