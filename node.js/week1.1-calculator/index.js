/**
 *  Bizden  4 islemi barindiran bir ek modul yazmamiz istenmektedir.
 *  1- 4 islem fonnksiyonlarinin yer aldigi bir js dosyasi yapilir.
 *      (functions).
 *  2- bu sayfada bulunan fonksiyonlar module.export yöntemiyle dosya
 *       disindan kullanilabilecek duruma getirilir.
 *  3- olusturulan index.js dosyasinda require("") yöntemi ile disardan
 *  kullanilacak fonksiyonlar getirilir ve cagrilan fonksiyonlar kulaniam 
 * hazir haler getirilir.
 */

const {toplama, cikarma, carpma, bolme} = require("./functions");

toplama(3,5)
cikarma(8,6)
carpma (3,7)
bolme (9,6)