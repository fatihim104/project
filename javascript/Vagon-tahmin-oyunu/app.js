/*
Ödevde istenilen maddeler;
1.  1-10 arası rastgele vagon numarası uretılır ve supheli bu vagonda saklanir.
2.  Kullanici maximum 4 denemede suphelinin oldugu vagonu bulmasi gerekecektir.
3.  Kullanıcıya ön vagon veya arka vagonda ifadeleri ile yonlendirme yapılarak hangi vagonda oldugunu daha kolay bulması icin yardım edilecektir.
4.  Kullanıcının kac defada bildiği  ve puani (100 üzerinden) consola yazdırılacaktir. 
*/

/*
Ekstra eklenen özellikler;
1- Tahmin sayisinin yarismaci tarafindan belirlenebilmesi,
2- 1. tahminde bilirse "Ilk tahminde  bildiniz" yazisinin cikmasi,
3- Son tahmininde "Dikkat son hakkiniz" uyarisinin cikmasi,
*/

// Sabit Degerler;
let toplamTahminHakkı;

//Data degerleri;
let tahminSayaci, kalanHak, suphelininSaklandigiVagon;


suphelininSaklandigiVagon = Math.floor(Math.random() * 10) + 1;
console.log(suphelininSaklandigiVagon);

toplamTahminHakkı = prompt("Adami bulmak icin kendinize kac tahmin hakki veriyorsunuz?");

let tahminEdilenSayi = prompt(`Adam hangi vagonda saklaniyor? ${toplamTahminHakkı} tahmin hakkiniz var?`);

for (kalanHak = toplamTahminHakkı, tahminSayaci = 1; kalanHak >= 0; tahminSayaci++, kalanHak--) {

    if (tahminSayaci == toplamTahminHakkı) {
        alert(`Kaybettiniz, hakkiniz bitti. Dogru vagon numarasi = ${suphelininSaklandigiVagon}`);
        break;
    }

    if (tahminEdilenSayi == suphelininSaklandigiVagon) {
        if (tahminSayaci == 1) {
            alert(`Tebrikler!! Ilk tahminde bildiniz! Puaniniz = ${(100/toplamTahminHakkı)* kalanHak}`);
        } else {
            alert(`Tebrikler!! ${tahminSayaci}. tahminde buldunuz! Puaniniz = ${(100/toplamTahminHakkı)* kalanHak}`);
        }
        break;

    } else if (tahminEdilenSayi > suphelininSaklandigiVagon) {
        if (tahminSayaci == toplamTahminHakkı - 1) {
            tahminEdilenSayi = prompt(`Onceki vagonlara bakin, ${tahminSayaci}.  tahminde bulamadiniz, kalan hakkiniz =  ${kalanHak-1}. Dikkat son hakkiniz!!`);

        } else {
            tahminEdilenSayi = prompt(`${tahminSayaci}. tahminde bulamadiniz, Onceki vagonlara bakin,  kalan hakkiniz =  ${kalanHak-1}.`);
        }

    } else {
        if (tahminSayaci == toplamTahminHakkı - 1) {
            tahminEdilenSayi = prompt(`Sonraki vagonlara bakin, ${tahminSayaci} .  tahminde bulamadiniz, kalan hakkiniz =  ${kalanHak-1}. Dikkat son hakkiniz!! `);

        } else {
            tahminEdilenSayi = prompt(`Sonraki vagonlara bakin, ${tahminSayaci} . tahminde bulamadiniz, kalan hakkiniz =  ${kalanHak-1}.`);
        }
    }
}