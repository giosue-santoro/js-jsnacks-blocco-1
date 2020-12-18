var number= prompt('Inserisci un numero di 4 cifre');
var sum = 0;

if (number.length !== 4) {
  alert('Inserisci un numero di quattro cifre')
} else {
  for (var x = 0; x < 4; x++) {
    sum += parseInt(number[x])
  }
  console.log('la tua somma è: '+ sum)
}
