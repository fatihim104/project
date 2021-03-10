/**
 *  Kullanici Etkilesimleri;
 *      Bizden hicri takvim ve miladi takvime göre verilen  
 *      tarihin cevrilmesi isteniyor. 
 *
 *  Teknik Analiz;
 * 1)   Hicri-converter.js dosyasinda olusturulacak fonksiyonlar ile miladi
 *      girilen tarih hicri tarihe cevrilecel ve burdaki 
 *      fonksiyonlar export edilerek app.js dosyasinda require("") edilerek kullanilmasi saglanacak.
 * 2)   Miladi-converter.js dosyasinda olusturulacak fonksiyonlar ile hicri
 *      girilen tarih miladi tarihe cevrilecek ve burdaki 
 *      fonksiyonlar export edilerek app.js dosyasinda require("") edilerek kullanilmasi saglanacak.
 */

const hicriYiliHesapla = require("./src/hicri-converter")
const miladiYiliHesapla = require("./src/miladi-converter")

 console.log(hicriYiliHesapla(2021))
 console.log(miladiYiliHesapla(1442))