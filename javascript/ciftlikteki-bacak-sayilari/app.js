/**
Ciftlikteki hayvanlar bir array icerisinde karisik sekilde tutulacak ve bu ciftlikte sadece su hayvanlar var:
- inek
- tavuk
- domuz
- koyun
Yapacaginiz program verilen array üzerinden kullanilabilir hayvan bacagi sayisini bulacak ve ekrana bastiracak.
*/

//Sabit Degerler Degiskenleri
const INEK_BACAGI_SAYISI = 4;
const KOYUN_BACAGI_SAYISI = 4;
const DOMUZ_BACAGI_SAYISI = 4;
const TAVUK_BACAGI_SAYISI = 2;
const hayvanlarinAyakSayilari = [INEK_BACAGI_SAYISI, KOYUN_BACAGI_SAYISI, DOMUZ_BACAGI_SAYISI, TAVUK_BACAGI_SAYISI];

//Bildirimler ve Girdiler Dizileri
let hayvanCinsleriSayisi = []; //Her hayvan cesidinin sayisi ayri ayri bu diziye gönderilecek.
let hayvanCesitleriListesi = ["inek", "koyun", "domuz", "tavuk"] // Bu sorular döngüde sirayla sorulacak.

//ilk döngüde ciftlikteki hayvan sayisi sorularla diziye aktariliyor
for (let index = 0; index < hayvanCesitleriListesi.length; index++) {

    sonrakiSoru = hayvanCesitleriListesi[index];

    girilenHayvanAdedi = prompt(`kac ${sonrakiSoru} var?`)

    hayvanCinsleriSayisi.push(girilenHayvanAdedi);
}

//ikinci döngüde ilk döngüden alinan bilgiler kullanilarak toplam ayak sayisi hesaplaniyor.
let toplamBacak = 0;

for (let index = 0; index < hayvanCinsleriSayisi.length; index++) {

    siradakiHayvaninAdedi = hayvanCinsleriSayisi[index];

    siradakiHayvaninAyakSayisi = hayvanlarinAyakSayilari[index]

    siradakiHayvaninBacakToplami = siradakiHayvaninAdedi * siradakiHayvaninAyakSayisi;

    toplamBacak += siradakiHayvaninBacakToplami;
}

alert(`toplamda ${toplamBacak} bacak var.`);