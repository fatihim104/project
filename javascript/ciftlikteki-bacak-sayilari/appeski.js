
/**
Ciftlikteki hayvanlar bir array icerisinde karisik sekilde tutulacak ve bu ciftlikte sadece su hayvanlar var:
- inek
- tavuk
- domuz
- koyun
Yapacaginiz program verilen array üzerinden kullanilabilir hayvan bacagi sayisini bulacak ve ekrana bastiracak.
 */
const INEK_BACAGI = 4;
const KOYUN_BACAGI = 4;
const DOMUZ_BACAGI = 4;
const TAVUK_BACAGI = 2;

const inek = INEK_BACAGI;
const koyun = KOYUN_BACAGI;
const domuz = DOMUZ_BACAGI;
const tavuk = TAVUK_BACAGI;

// let hayvan = prompt("Ciftlikteki hayvanlari yaz?");
// hayvanListesi.push(hayvan);
let hayvanListesi = [inek,domuz,tavuk,inek,koyun,koyun];
let toplamBacak=0;

for (let sayac = 0; sayac < hayvanListesi.length; sayac++) {
    sonrakiHayvan = parseInt(hayvanListesi[sayac]);
    
    toplamBacak +=  sonrakiHayvan; 
}
alert(`Toplam Bacak Sayisi :${toplamBacak}`);

