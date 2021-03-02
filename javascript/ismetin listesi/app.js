/**
 * KULLANICI ETKILESIMI,
 *  Kullancici bizden; 
 *      > müsterilerinin listesini,
 *      > Her müsterinin hedeflerinin listesini ve 
 *      > Her hedefin adreslerinin listesini görüntüleyebilmeyi talep etmektedir.
 *  Programa geldiginde müsteri listesi görüntülenecek ve müsterilere tiklandiginda müsterilerin hedefleri  *  görüntülenebilecek, hedeflere tiklandiginda ise her hedefe ait adresler görüntülenebilecek.* 
 * 
 *  TEKNIK DETAYLAR;
 *  1- Data yapisi olusturulacak. 
 *      > Icerisinde her müsteri icin bir obje datasinin oldugu, müsterilerin müsteri    
 *      listesi arrayi olusturulacak.
 *      > müsteri objelerinin icersinde isim ve adres keyleri olacak.
 *      > adres bilgileri array icersinde olusturulacak.
 *  2- HTML yapisi olusturulacak. Main container tanimlanacak icerisine bilgiler dynamic olarak js 
 *      ile yazdirilacak.
 *  3- Javascript ile;
 *      > Sayfa yüklendiginde müsteri listesi data yapisindan yazdirilacak.
 *      > Müsteri satirina eklenecek event ile tiklanan müsterinin hedefleri yazdirilacak.
 *      > Müsteri satiridaki resime eklenecek event ile o müsteri ismi silik gösterilecek ve local storage
 *        kaydededilecek.
 *      > Hedeflere eklenecek  event ile secilen hedefe ait adresler yazdirilacak.*      
*/

document.querySelector("#main-container").addEventListener("click", getEnemyList);