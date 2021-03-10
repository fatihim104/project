/**
 * bu fonksiyon parametre olarak sayi girilen tarihi miladi yildaki
 * karsiligini hesaplar.
 * @param {number} pHicriGirdi 
 * @returns 
 */
function miladiHesapla(pHicriGirdi) {
    let bölümm = pHicriGirdi / 32;
    let farkk = pHicriGirdi - bölümm;
    let miladiSonuc = farkk + 624;
    return Math.ceil(miladiSonuc);
}

module.exports = miladiHesapla;