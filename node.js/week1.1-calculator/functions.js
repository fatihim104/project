
function toplamaFonksiyonu(pBirinciSayi,  pIkinciSayi){
    let result = pBirinciSayi + pIkinciSayi;
    return console.log(`${pBirinciSayi} + ${pIkinciSayi} = ${result}`);
}

function cikarmaFonksiyonu(pBirinciSayi,  pIkinciSayi){
    let result = pBirinciSayi - pIkinciSayi;
    return console.log(`${pBirinciSayi} - ${pIkinciSayi} = ${result}`);
}

function carpmaFonksiyonu(pBirinciSayi,  pIkinciSayi){
    let result = pBirinciSayi * pIkinciSayi;
    return console.log(`${pBirinciSayi} * ${pIkinciSayi} = ${result}`);
}

function bolmeFonksiyonu(pBirinciSayi,  pIkinciSayi){
    let result = pBirinciSayi / pIkinciSayi;
    return console.log(`${pBirinciSayi} / ${pIkinciSayi} = ${result}`);
}

module.exports = {
    toplama : toplamaFonksiyonu,
    cikarma : cikarmaFonksiyonu,
    carpma : carpmaFonksiyonu,
    bolme  : bolmeFonksiyonu
}