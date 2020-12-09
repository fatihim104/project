/*En az 10 sayidan olusan bir array olusturunuz. Array icindeki sayilarin: 
-- kareköklerini 
-- karelerini 
-- tüm sayilarin toplamini
-- ortalamasini
-- en büyük ve en kücük sayiyi
bulan programi yaziniz.*/

// Sabit Degerler;
const numbers = [8, 25, 36, 4, 3, 9, 100, 169, 49, 121, 144];

//Degisken Data Degerleri;
let squareRootofNumbers = 0;
let squareOfNumbers = 0;
let additionOfNumbers = 0;
let averageOfNumbers = 0;
let minimumOfNumbers = numbers[0]; //Karsilasirmaya birinci siradaki sayi ile basladik.
let maximumOfNumbers = numbers[0];

for (let index = 0; index < numbers.length; index++) {

    squareRootofNumbers = console.log(`Square Root of ${numbers[index]} = ${Math.sqrt(numbers[index])}`);

    squareOfNumbers = console.log(`Square of ${numbers[index]} = ${Math.pow(numbers[index],2)}`);

    additionOfNumbers = additionOfNumbers + numbers[index];

    averageOfNumbers = additionOfNumbers / numbers.length;

    if (minimumOfNumbers > numbers[index]) {
        minimumOfNumbers = numbers[index];

    } else if (maximumOfNumbers < numbers[index]) {
        maximumOfNumbers = numbers[index];
    }
}

//squareRootofNumbers ve squareOfNumbers degiskenleri alt tarafa yazdiramadigimdan programin icerisine yazdirdim.

console.log(`addition of numbers = ${additionOfNumbers}`);
console.log(`average of numbers = ${averageOfNumbers}`);
console.log(`minimum of numbers = ${minimumOfNumbers}`);
console.log(`maximum of numbers = ${maximumOfNumbers}`);