/**
 * AKIS;
 * Selami beyin, cocuklarinin carpim tablosunu ögrenebilecekleri bir programa ihtiyaci vardir. Su 
 * özelliklerde bir program talep etmektedir.
 * - Hergün basari sayisi her cocuk icin ayri bir sekilde tutulmali (kaybolmamali) ve cocuklarinin gelisimi *   sürekli izlenebilir olmalidir. 
 * - Dahasi cocuklarin konstantrasyonlarinin dagilmamasi icin applikasyon full screen modda 
 *   calismalidir.(opsiyonel). 
 * - Ayni zamanda cocuklarin fokuslanmasi icin arka planda bir müzik calmalidir.(opsiyonel).
 * - Cocuklar her soru oturumu acildiginda süreye karsi yarismaktadirlar. Fakat Selami bey bilgisayari acil *   bir sekilde kullandiginda (baska bir TAB actiginda) sayacin durdurulmasi gerekiyor. Tekrar oyuna 
 *   dönülünce, programin kaldigi yerden devam etmesi gerekiyor (opsiyonel).
 * TEKNIK ANALIZ;
 * - HTML, CSS ve BootStrap kullanilarak sayfanin genel yapisi olusturulacak.
 *      > Sayfada ögrenci bilgilerinin kaydedildigi formun, Ögrenci bilgilerinin listelendigi tablonun
 *            ve  sorunun görüntülendigi oyunun bulundugu üc bölüm statik olarak olusturulacak.
 * - Javascript ile;
 *      > Sayfa ilk yüklendiginde localstorage da kayitli ögrenciler ve bilgileri tabloda listelenecek.
 *      > Form inputlari, tablo yapisi ve sorunun görüntülendigi oyun ekrani dinamik olarak görüntülenecek.
 *      > Form bölümün de yer alan butona eklenen event listener ile;
 *          + Ögrenci ismi, puani ve tarih bilgileri olusturulacak id ile obje olarak kaydedilecek ve her 
 *            ögrenci ögrencilerinin datasinin tutuldugu arraya pushlanacak. Ayrica her ögrenci ayri ayri 
 *            localstorage gönderilerek kaydedilecek.
 *          + Forma girilen ögrenci bilgileri tabloya eklenecek.
 *      > Tabloda her ögencinin yaninda yer alan basla butonuna eklenecek event listener ile;
 *          + Oyun bölümü full screen olacak.
 *          + Arka planda müzik calacak.
 *          + Random olarak olusturulacak sayilar ekrana yazdirilacak. Dogru cevap ayri bir 
 *            arraya gönderilecek.
 *          + 10 saniyeden geri sayim baslatilacak.
 *          + Süre bittiginde sonraki soruya gececek.
 *          
 *      > Soru bölümünde yer alan "cevabi gönder" butonuna eklenecek event Listener ile;
 *          + ögrencinin cevabi dogru cevapla karsilastirilacak. Her dogru cevaba 10 puan
 *            tabloya eklenecek ve not toplami güncel tutulacak.
 *          + 10. cevap gönderildiginde ögrencinin son puani localstorage gönderilecek ve oyun oturumu
 *            bitecek.
 *      > Soru bölümünde yer alan "oyunu sonlandir" butonuna eklenecek event Listener ile;
 *          + Güncel puan yazdirilacak ve localstorage kaydedilecek.
 *          + Oturumdan cikilacak.(oyun ekrani Temizlenecek) 
 */

window.onload = () => {
    renderForm();
    renderFromLocalStorage();
};

userPart.addEventListener("click", clickEventHandler);
playerArea.addEventListener("click", playAreaEventHandler);

