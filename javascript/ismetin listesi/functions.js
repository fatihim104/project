//Eventhandler fonksiyonu
function getEnemyList(pEvent){
    if(pEvent.target.classList.contains("customer")){
        let selectedCustomer = pEvent.target.dataset.name;
        getEnemyNames(selectedCustomer);
    }
    if(pEvent.target.classList.contains("list-enemys")){
        let selectedEnemy = pEvent.target.dataset.name;
        getSelectedEnemyAdress(selectedEnemy)
        }
    if(pEvent.target.classList.contains("img-dead") ){
        pEvent.target.closest("li").classList.add("disabled");
        saveInfos(customerList)
    }
}

/**
 * bu fonksiyon kendisine gönderilen string müsteri ismini alarak müsteri arrayinde bu isme ait hedefleri yazdirir.
 * @param {string} pSelectedCustomer 
 */
function getEnemyNames(pSelectedCustomer){
    for (let index = 0; index < customerList.length; index++) {
        let name = customerList[index].customerName;
        if(pSelectedCustomer === name ){
            document.querySelector("#main-container").innerHTML =  `
            ${createEnemyHeader(name)}
            ${customerList[index].customerEnemy.map(renderEnemyName).join("")}`
        }
    }
}

/**
 * bu fonksiyon kendisine gönderilen isim ile baslik olusturur.
 * @param {string} pName 
 */
function createEnemyHeader(pName){
    return`
    <h4 class="font-weight-bold">${pName} in Düsmanlari</h4>`;
}

//getenemyname fonksiyonu icerisindeki map methodunun callback fonksiyonu.parametresini kendisi olusturur.
function renderEnemyName(pEnemy){
    return `
            <ul class="list-group list-group-flush w-25">
            <li data-name ="${pEnemy.EnemyName}" class="list-group-item list-enemys">${pEnemy.EnemyName}
            <img class="img-dead" style="height:40px;" src="./img/iconfinder_066-gun-control-flower_6971182.png" alt="dead">
            </li>
            </ul>
        `;
}

/**
 * bu fonksiyon kendisine gönderilen secilen düsman ismine ait adres listesini datadan alarak ekrana
 * yazdirir.
 * @param {string} pSelectedEnemy 
 */
function getSelectedEnemyAdress(pSelectedEnemy){
    for (let index = 0; index < customerList.length; index++) {
        for (let enemyIndex = 0; enemyIndex < customerList[index].customerEnemy.length; enemyIndex++) {
            let enemyName = customerList[index].customerEnemy[enemyIndex].EnemyName;
            if(pSelectedEnemy === enemyName){
               document.querySelector("#main-container").innerHTML =  `
                   ${createEnemyAdressHeader(enemyName)}
                   ${customerList[index].customerEnemy[enemyIndex].EnemyAdressList.map(renderEnemyAdressList).join("")}`
           }
        }
    }
}

/**
 * bu fonksiyon kendisine gönderilen isim ile adres basligi olusturur.
 * @param {string} pName
*/  
function createEnemyAdressHeader(pEnemyName){
    return`
    <h4 class="font-weight-bold">${pEnemyName} in Adresleri</h4>`;
}

//getSelectedEnemyAdress fonksiyonu icerisindeki map methodunun callback fonksiyonu.parametresini kendisi olusturur.
function renderEnemyAdressList (pAdress){
    return` 
            <ul class="list-group list-group-flush w-25">
            <li class="list-group-item">${pAdress}</li>
            </ul>
        `;
}

/**
 * bu fonksiyon kendisine gönderilen listeyi local storage kaydeder.
 * @param {array} pCustomerList 
 */
function saveInfos(pCustomerList){
    localStorage.setItem("CustomerList", JSON.stringify(pCustomerList));
}