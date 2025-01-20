import { osszead, kivon, szoroz, eloszt } from './szamologep.js';
import isEven from 'is-even';

const num1 = 5;
const num2 = 10;

const logIsEven = (eredmeny) => {
	return isEven(eredmeny) ? 'Páros' : 'Páratlan';
};

const osszeg = osszead(num1, num2);
const kulonbseg = kivon(num1, num2);
const szorzat = szoroz(num1, num2);
const hanyados = eloszt(num1, num2);

console.log(`Összeg: ${osszeg} - ${logIsEven(osszeg)}`);
console.log(`Különbség: ${kulonbseg} - ${logIsEven(kulonbseg)}`);
console.log(`Szorzat: ${szorzat} - ${logIsEven(szorzat)}`);
console.log(`Hányados: ${hanyados} - ${logIsEven(hanyados)}`);
