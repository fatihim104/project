/**
 SABIT ELEMENT SECICI DEGISKENLER
 */
const tekParcaGosterge = document.querySelector("#gösterge-tek-parca");
const ikiParcaGosterge = document.querySelector("#gösterge-iki-parca");
const fullGosterge = document.querySelector("#gösterge-full");
const bataryaDolulukOrani = document.querySelector("#göstge-degeri");

const artirmaButonu = document.querySelector("#artir");
const eksiltmeButonu = document.querySelector("#eksilt");

/**
 TEMEL (OLAY EKLEME) FONKSIYONU
 */
tekParcaGosterge.style.background = "none";
artirmaButonu.addEventListener('click', () => bataryaDoldur (tekParcaGosterge.style.background))  
eksiltmeButonu.addEventListener('click', () => bataryaBosalt (tekParcaGosterge.style.background))  










