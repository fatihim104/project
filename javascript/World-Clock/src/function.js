/**eventhandler sehir degistirme fonksiyonu.*/
function changeCityTime(pEvent) {
    switch (pEvent.target.id) {
        case "panama":
            stopClock();
            playClock(getTimeOfPanama)
            break;
        case "dubai":
            stopClock();
            playClock(getTimeOfDubai);
            break;
        case "pago":
            stopClock();
            playClock(getTimeOfPago);
            break;
    }
}

/**Panama saatini yazdirma fonksiyonu.*/
function getTimeOfPanama() {
    let panamaTime=new Date().toLocaleTimeString("it-IT",{timeZone:"America/Panama"});
    clockText.innerHTML = `<p class="fs-1">${panamaTime}</p><span>Panama</span>`;
}

/**Dubai saatini yazdirma fonksiyonu.*/
function getTimeOfDubai() {
    let dubaiTime = new Date().toLocaleTimeString("it-IT", { timeZone: "Asia/Dubai"})
    clockText.innerHTML = `<p class="fs-1">${dubaiTime}</p><span>Dubai</span>`;
}

/**Pago pago saatini yazdirma fonksiyonu.*/
function getTimeOfPago() {
    let pagoTime = new Date().toLocaleTimeString("it-IT", {timeZone: "Pacific/Pago_Pago"});
    clockText.innerHTML = `<p class="fs-1">${pagoTime}</p><span>Pago Pago</span>`;
}

let playclock;
/**
 * bu fonksiyon parametre olarak gönderilen fonksiyonu ekrana saniyede bir bastirir.
 * @param {fonksiyon} pfonk 
 */
function playClock(pfonk){
    playclock = setInterval( pfonk, 1000);
}

/**Ekrana bastirilan fonksiyonu durdurma fonksiyonu*/
function stopClock(){
    clearInterval(playclock)
}