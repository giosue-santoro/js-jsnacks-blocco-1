var oddN = [];

var n1 = prompt('Inserisci un numero');
var n2 = prompt('Inserisci un numero');
var n3 = prompt('Inserisci un numero');
var n4 = prompt('Inserisci un numero');
var n5 = prompt('Inserisci un numero');
var n6 = prompt('Inserisci un numero');

if (n1 % 2 !== 0) {
  oddN.push(n1)
}
if (n2 % 2 !== 0) {
  oddN.push(n2)
}
if (n3 % 2 !== 0) {
  oddN.push(n3)
}
if (n4 % 2 !== 0) {
  oddN.push(n4)
}
if (n5 % 2 !== 0) {
  oddN.push(n5)
}
if (n6 % 2 !== 0) {
  oddN.push(n6)
}

console.log(oddN);
