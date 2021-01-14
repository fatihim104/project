/**Doldurma tusunu calistiran ana fonksiyon */
function bataryaDoldur(pElement){
    switch (pElement) {
        case "none":
            ilkBolmeyiDegistir("red");
            break;
        case "red":
            ikiBolmeyiDegistir("orange")
            break;
        case "orange":
            ucBolmeyiDegistir("green", "100")
            break;
    }
}

/**Bosaltma tusunu calistiran ana fonksiyon */
function bataryaBosalt (pElement) {
    switch (pElement) {
        case "green":
            ikiBolmeyiDegistir("orange")
            break;
        case "orange":
            ilkBolmeyiDegistir("red");
            break;
        case "red":
            ucBolmeyiDegistir("none", "0");
            break;
    }
}

/**ilk bölmeyi kirmizi renk yapan ve ve göstergeyi degistiren fonksiyon */
function ilkBolmeyiDegistir(pColor) {
    tekParcaGosterge.style.background = pColor;
    ikiParcaGosterge.style.background = "none";
    fullGosterge.style.background = "none";
    bataryaDolulukOrani.innerHTML = "%33";
}

/**ilk iki bölmeyi turuncu renk yapan ve göstergeyi degistiren fonksiyon */
function ikiBolmeyiDegistir(pColor) {
    tekParcaGosterge.style.background = pColor;
    ikiParcaGosterge.style.background = pColor;
    fullGosterge.style.background = "none";
    bataryaDolulukOrani.innerHTML = "%66";
}

/**bölmelerin tümünü ayni renk yapan ve göstergeyi degistiren fonksiyon */
function ucBolmeyiDegistir(pColor, pPercent) {
    tekParcaGosterge.style.background = pColor;
    ikiParcaGosterge.style.background = pColor;
    fullGosterge.style.background = pColor;
    bataryaDolulukOrani.innerHTML = "%"+pPercent;
}