/**
 * Bizden Digital Dunya Saati uygulamasi isteniyor. Dunya genelinden listeden sececegimiz 3 sehrin saatleri gösterilecek.
 * 
 * 1)Önce HTML yapisi olusturulacak. (css ve bootstap kullanilarak sayfa düzeni saglanacak)
 * 2)Sehre tiklanildiginda Javascript kullanilarak;
 *      1-secilen sehrin saatinin ekrana yazdirilmasi saglanacak.
 *      2-bunun icin setinterval fonksiyonu kullanilacak.
 *      3-diger sehre tiklanildiginda clearinterval ile önceki calisan sehrin saatinin 
 * ekrana bastirilmasi durdurulacak. 
 */

const clockText = document.querySelector("#clock");

/**HTML deki ul elementine ekledigimiz eventlistenerlar ile sehir degistirme fonksiyonunu cagriyoruz. */
document.querySelector("ul").addEventListener("click", changeCityTime);