
/**
 * bu fonksiyon parametre olarak sayi girilen tarihi hicri yildaki
 * karsiligini hesaplar.
 * @param {number} pMiladiGirdi 
 * @returns 
 */
function hicriHesapla(pMiladiGirdi) {
    let fark = pMiladiGirdi - 621;
    let bölüm = Math.floor(fark / 33);
    Math.ceil()
    let hicriSonuc = bölüm + fark;
    return Math.ceil(hicriSonuc);
}

module.exports = hicriHesapla;

