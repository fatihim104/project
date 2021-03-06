/**
1)  string olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase a cevirin.
         ornek: “asik veysel“ ==> “Asik Veysel“
*/

let nameSurname = prompt("Adiniz ve soyadinizi giriniz.")

let wordsOfnameSurname = nameSurname.split(" "); // Girilen String bosluklarindan ayrilarak degerler Array a cevrilir.

let result = []; // Istegimiz sonuc burada tanimladigimiz result degiskeninde toplanacak.

for (index = 0; index < wordsOfnameSurname.length; index++) {
   let nextWord = wordsOfnameSurname[index];
   let upperLetter = nextWord[0].toUpperCase();
   let newWord = nextWord.replace(nextWord[0], upperLetter)
   result.push(newWord);
}
alert(result.join(" ")); // Döngüden gelen yeni kelimeler array datadan string degerlere cevrilir.


/**
2)  0 dan 100 e kadar olan sayilari, bir satirda 10 sayi ve her sayinin arasinda virgul olacak sekilde yazdiriniz (10x10 luk bir kare seklinde)
*/

let nextNumber = "";

// Sayilari önce 100 kadar döngü ile yazdirip. 10 un katlarina geldiginde alt satira gecmesi saglanir.

for (let sayac = 1; sayac < 100; sayac++) {
   nextNumber += sayac + ",";
   if (sayac % 10 === 0) {
      nextNumber += "\n"
   }
}
console.log(nextNumber + "100.");

/** 
3) 0 dan 100 e kadar olan prime(asal sayilari) yazdirin(Asal sayilar: sadece kendisine ve 1 e bolunebilen sayilar)
bulunmasi gereken sonuc: 1, 2, 3, 5, 7, 11....
*/

let result = []; // 100 den baslayarak geriye gelen sayilar sirayla divederNumber a bölünecek. Bölüm sifir   
//degilse ve diveder bölünen sayinin bir öncesine gelmisse sonuc yazdirilacak.

for (let index = 100; index > 0; index--) {

   for (let divederNumber = 2; divederNumber <= index; divederNumber++) {

      if (index % divederNumber === 0) {
         break; //sayi tam bölünüyorsa ic döngüden cikacak ve dis döngüdeki siradaki sayiya gececek.
      } else if (divederNumber === index - 1) {
         result.push(index);
      } else {
         continue;
      }
   }
}
console.log(result.join());


/** 
4) Kucuk, buyuk, ozel karakterler ve sayilardan olusan 8 ile 16(hane) uzunluklari arasinda guvenli 50 adet sifre olusturunuz.
*/

//Sabit degiskenler ve diziye cevrilmeleri
const sifreSayisi = 50;
const kucukHarfler = "abcdefghijklmnopqrstuvwxyz";
const diziKucukHarfler = kucukHarfler.split("")

const buyukHarfler = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const diziBuyukHarfler = buyukHarfler.split("")

const rakamlar = "0123456789";
const diziRakamlar = rakamlar.split("")

const karakterler = "&*()_+~`|!@#$%^}{[;?><,./-]\:=";
const diziKarakterler = karakterler.split("")

let sifre = "";

for (let index = 1; index <= sifreSayisi; index++) {

   sifreUzunlugu = 8 + Math.floor(Math.random() * 9)

   for (let sayac = 0; sayac < sifreUzunlugu; sayac++) {
      rastgeleKucukHarf = diziKucukHarfler[Math.floor(Math.random() * diziKucukHarfler.length)];
      rastgeleBuyukHarf = diziBuyukHarfler[Math.floor(Math.random() * diziBuyukHarfler.length)];
      rastgeleRakam = diziRakamlar[Math.floor(Math.random() * diziRakamlar.length)];
      rastgeleKarakter = diziKarakterler[Math.floor(Math.random() * diziKarakterler.length)];
      //yukarda olusturdugumuz rastgelekarakterler asagidaki diziye yerlestirilecek. Diziyi manuel olarak olusturabildim. Push methodunu denedim ancak olmadi.Bir yöntem bulamadim.
      veriArsivi = [
         rastgeleKarakter, rastgeleBuyukHarf, rastgeleKarakter, rastgeleKarakter, rastgeleKucukHarf, rastgeleRakam, rastgeleKarakter, rastgeleBuyukHarf, rastgeleBuyukHarf,
         rastgeleBuyukHarf, rastgeleKarakter, rastgeleKucukHarf, rastgeleRakam, rastgeleKarakter, rastgeleBuyukHarf, rastgeleBuyukHarf
      ]
      sifre += veriArsivi[sayac];
   }
   sifre += "\n"
}
console.log(sifre);

/** 
   5)  Asagidaki sekli programlama yapilarini kullanarak cizdiriniz.
​
   *
   **
   ***
   ****
   *****
   ******

*/

let totalRow = 6; //ücgen 6 satirdan olusuyor.

let nextRowValue = ""
//ilk satirda 1 yildiz 5 bosluk var. sonrakilerde yildiz sayisi artarken bosluk sayisi artiyor.
for (let index = 1; index <= totalRow; index++) {
   for (let secondIndex = 1; secondIndex <= index; secondIndex++) {
      nextRowValue += "*";
   }
   for (let thirdIndex = 1; thirdIndex <= totalRow - index; thirdIndex++) {
      nextRowValue += " ";
   }
   nextRowValue += "\n"
}
console.log(nextRowValue);