var wordOne = prompt('inserisci la prima parola');
var wordTwo = prompt('inserisci la seconda parola');

if (wordOne.length > wordTwo.length) {
  console.log(wordOne + ' ' + wordTwo)
} else {
  console.log(wordTwo + ' ' + wordOne)
}
