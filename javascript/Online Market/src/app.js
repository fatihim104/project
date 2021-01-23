/**
 * Bu uygulamada bizden liste halinde(array icerisinde objek datasi) verilen ürün bilgilerinin online satisa hazir halde listelenmesi, satin al tusuna basildiginda ilgili ürünün sepete aktarilmasi, sepete atilan ürünlerin toplam fiyatlarinin hesaplanmasi ve istenildiginde bu sepetten ürünlerin silme tusu ile silinmesi isteniyor.
 * 
 * 1) Sayfa üzerinde tablolarin yerlestirilecegi HTML yapisi olusturulacak.
 * 2) Tablolar javascript icinde dinamik olarak olusturulacak.
 * 3) Data dosyasindaki bilgiler ilk tabloya aktarilacak.
 * 4) Tabloda yer alan satin alma tusuna eklenecek eventlistener ile;
 *          1. ilgili ürün secilecek ve olusturulacak ara arraya atilacak,
 *          2. sepet listesi icin yeni tablo olusturulacak,
 *          3. secilen ürünün istenilen özellikleri sepete aktarilacak,
 *          4. sepete eklenen her ürün toplam fiyata eklenerek toplam ücret gösterilecek,
 * 5) Ürün sepeti tablosunda yer alan silme tusuna eklenecek eventlistener ile;
 *          1.Secilen ürün sepetten kaldirilacak fiyati toplam fiyattan düsülecek.
 * */

/**
 * Data Model
 */
mainElement.addEventListener("click", function buyProduct(pEvent) {
            if (pEvent.target.id === "button-buy") {
                basketList.push(pEvent.target.parentElement.parentElement);
            }
            if (pEvent.target.id === "button-delete") {
                let rowIndex = pEvent.target.parentElement.parentElement.rowIndex;
                basketList.splice([rowIndex-1],1);
            }
            updateUI(productList, basketList);
});
