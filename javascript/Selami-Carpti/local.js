//localStorage ekleme fonksiyonu
function saveData(pNewPerson, pId){ 
    stringifiedPersonList = JSON.stringify(pNewPerson);        
    localStorage.setItem(pId, stringifiedPersonList);
}

//localStoragedan getirme fonksiyonu
function getData(pId){
    let stringifiedPersonList = localStorage.getItem(pId);
    return JSON.parse(stringifiedPersonList);
}