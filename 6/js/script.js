var number = parseInt(prompt('Inserisci un numero'));

if (number > 10) {
  alert('Numero troppo elevato')
} else {
  for (var x = 0; x <= number; x++) {
    console.log(Math.pow(x, 3))
  }
}
