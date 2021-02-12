/**
 * Kelime Oyunu
 * Talepler;
 *  - Oyun basladiginda Random olarak hecelerine ayrilmis bir kelime gelmesi. 
 *          >'Random' butonu tiklandiginda hecelerine karisik olarak ayrilmis bir kelime gelecek.
 *  - Hecelerin Drag & Drop yontemi ile anlamli olarak siralanabilmesi
 *  - Bitirildiginde kullaniciya "DOGRU"  veya ''YANLIS" mesaji bildirilmesi.
 *          >'Check' butonu tiklandiginda kelimenin dogru veya yanlisligi kontrol edilecek
 *   - Minimum 10 Kelimelik bir oyun uretilmesi. 
 * Akis;
 *  1-HTML ve Css dosyalari ile kelimelerin yer alacagi container ve butonlar olusturulacak.
 *  2-Javascript kullanilarak kelimeler hecelerine ayrilmis bir sekilde data "wordList" arrayi olusturulacak,
 *  3-Random butonuna tanimlanacak Eventlistener ile;
 *      >Arrayden bir kelime random olarak secilecek.
 *      >Secilen kelime daha sonra karsilastirilmak üzere farkli bir degiskenle kaydedilecek.
 *      >Secilen kelime random metodu ile karistirilacak ve DOM'a yazdirilacak.
 *      >Drag ve Drop api eklenerek kullanima hazir hale getirilecek.
 *  4-Kullanici ekrana yazdirilan heceleri sürükle birak yöntemi ile siralayacak.
 *  5-Check butonuna tanimlanacak Eventlistener ile;
 *       >kullanici tarafindan olusturulan siralanmis kelime daha önce tanimlanan dogru kelime 
 *       karsilatirilacak. 
 *       > dogru veya yanlis sonuc kullaniciya bildirilecek.
 * */

/**HTML deki butonlari parenti section elementine ekledigimiz eventlistenerlar ile fonksiyonunu cagriyoruz. */
document.querySelector("#btn").addEventListener("click", getClickedEvents);
