var numberOne = prompt('inserisci il primo numero');
var numberTwo = prompt('inserisci il secondo numero');
var numberThree = prompt('inserisci il terzo numero');
var numberFour = prompt('inserisci il quarto numero');
var numberFive = prompt('inserisci il quinto numero');

var numberList = [];
numberList.push(numberOne, numberTwo, numberThree, numberFour, numberFive);

var result = 0;

for (var i = 0; i < numberList.length; i++) {
  result += parseInt(numberList[i])
}

console.log(result)
