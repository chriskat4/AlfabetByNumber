const Alfabet = require('./Alfabet.js');

const alfabeto = new Alfabet();

let TEST = alfabeto.especNumberAlfabet(4);
console.log(TEST);

TEST = alfabeto.especNumberAlfabet(7);
console.log(TEST);

TEST = alfabeto.especNumberAlfabet(8);
console.log(TEST);

TEST = alfabeto.especNumberAlfabet(0);
console.log(TEST);

TEST = alfabeto.especNumberAlfabet(27);
console.log(TEST);

TEST = alfabeto.especNumberAlfabet(4);
console.log(TEST);