'use strict'
/* TYPY PROSTE */
/* typ liczbowy */

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;
console.log(calkowitaWyplata);

var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + ' "dodajemy"' + premiaStr;
console.log(calkowitaWyplataStr);

var imieStudenta = "    Michał ";
console.log(imieStudenta.indexOf('c'));
console.log(imieStudenta);
console.log(imieStudenta.trim());

/* typ logiczny */

var czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest SMOG");
} else {
    console.log("Nie ma SMOGa ;)");
}

/* typy specjalne  */
/* TYPY REFERENCYJNE */
