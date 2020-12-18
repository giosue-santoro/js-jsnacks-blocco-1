var userName = prompt('Qual è il tuo nome?');
var nameList = ['pinco','pallino','pino'];

var nameFound;

for (var i = 0; i < nameList.length; i++) {
  if (nameList[i] === userName) {
    nameFound = true;
  }
}

if (nameFound) {
  console.log('Sei ammesso alla festa');
} else {
  console.log('Non sei ammesso')
}
