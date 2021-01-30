/**
 * Okul müdürü olan müsterimiz bizden ögrencilrin kaytilarini yapmak icin kayit takip sistemi istemektedir.
 * Kayit ekranin sol tarafinda olacak bir form araciligi ile yapilacaktir. Burada ogrenci adi, soyadi, yasi vs bilgiler girilebilecektir. Programda kayit olan ogrenci listesi ise sayfanın sag tarafında gösterilecektir. Gerektiginde kayit silinebilecektir. Listenin en altında ise toplam ogrenci sayisi gösterilecektir.
 * 
 * 1)Öncelikle HTML yapisi olusturulacak. (Bootstrap ve CSS ile gerekli style düzenlemeler yapilacak.)
 *      1.Sayfanin sol tarafinda form grubundan veriler input olarak alinacak.
 *      2.Sayfanin sag tarafina olusturulacak "table" da girilen veriler listelenecek.
 * 2) Daha sonra bu yapi javascript fonksiyonlar kullanilarak dinamik hale getirilecek.
 * 3) Tanimlanacak "eventlistener" ile;
 *  A) Add butonuna basildiginda;
 *      1.input alanina girilen bilgiler js icerisinde olusturulacak ara arraye gönderilecek.
 *      2.Arraydeki bilgiler tabloda ilgili alanlara eklenecek.
 *      3.Ögrenci eklendikce toplam ögrenci sayisi güncel tutulacak.
 *  B)  Sagdaki tabloya eklenecek "evenlistener" ile eklenen ögrenciler silinebilecek.
 */

const mainElement = document.querySelector("#main-container")

/**updateUI fonksiyonu sayfayi olusturuyor.*/
updateUI()

/**HTML deki main elemente ekledigimiz eventlistenerlar ile ekleme ve silme button fonksiyonlarini cagriyoruz. */
mainElement.addEventListener("click", addClickedEvent)
mainElement.addEventListener("click", removeClickedEvent)