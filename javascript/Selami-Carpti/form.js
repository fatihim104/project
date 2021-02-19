/**
 * bu fonksiyon form komponentini ekrana yazdirir.
 */
function  renderForm(){
    newUser.innerHTML = createForm();
}

/**
 * bu fonksiyon localstorage da kayitli kisi varsa tabloya onu yazdirir.
 */
function renderFromLocalStorage(){
    for (let index = 0; index < localStorage.length; index++) {
        if (localStorage.length != 0) {
            const personId = localStorage.key(index);
            personData.push(getData(personId));
            renderTable(personData);
        } else {
            renderTable(personData);
        }
    }
}

/**
 * bu fonksiyon kendisine gönderilen kisi bilgileri arrayini kullanarak olusturulan tabloyu
 * ekrana yazdiri.
 * @param {array} pPersonData 
 */
function renderTable(pPersonData){
    tableComponent.innerHTML = createTable(pPersonData);
}

/**
 * bu fonksiyon kendisine gönderilen kisi bilgileri arrayini alip tablo basligi ve gövdesini birlestirir. 
 * @param {arrray} pPersonData 
 */
function createTable(pPersonData){
    return `
    <table class="table table-sm">
    ${createTableHead()}
    ${createTableBody(pPersonData)}
    </table>
    `;
}
   
/**
 * bu fonksiyon kisi bilgilerinin yer aldigi tablonun baslik kismini olusturur.
 */
function createTableHead() {
    return `
        <thead class="table-light">
            <tr>
                <th>Sira</th>
                <th>Ad</th>
                <th>Puan</th>
                <th>Tarih</th>
                <th></th>
            </tr>
        </thead>
`;
}

/**
 * bu fonksiyon kendisine gönderilen kisi bilgileri arrayinden satir ekleme fonksiyonunu da
 * kullanarak tablonun gövdesine satirlari ekler.
 * @param {array} pPersonData 
 */
function createTableBody(pPersonData) {
    return `
            <tbody>
                ${addNewPersonRow(pPersonData)}
            </tbody>
    `;
}

/**
 * bu fonksiyon yeni kisi isminin girildigi formu olusturur.
 */
function createForm(){
    return `
    <form class="row row-cols-lg-auto g-3 align-items-center">
        <div class="col-12">
        <label class="visually-hidden" for="inlineFormInputGroupUsername">Ad</label>
        <div class="input-group">
            <input type="text" class="form-control" id="name" placeholder="isim ekle">
        </div>
        </div>
    
        <div class="col-12">
            <button id="btn-add-student" type="submit" class="btn btn-info">Add</button>
        </div>
  </form>
  `;
}

/**
 * Bu fonksiyon forma girilen isim bilgilerini array icerisinde obje olarak kaydeder ve icerisine 
 * yerlestirilen fonksiyon ile kisi bilgilerini local storage ekler.
 * @param {array} pPersonData 
 */
function addNewPersonData(pPersonData){
    let name = document.querySelector("#name").value;
    let id = new Date().getTime();
    let score = 0;
    let date = new Date().toLocaleDateString();
    let newPerson = {id, name, score, date};
    pPersonData.push(newPerson)
    saveData(newPerson, id)  // locale kayit
    return id;
}
/**
 * bu fonksiyon kendisine gönderilen arraydeki bilgileri index ekleyerek tabloya yazdirir.
 * @param {array} pPersonData 
 */
function addNewPersonRow(pPersonData){
    let personRows = 
    pPersonData.map((person, index) => `
            <tr id=${index}>
                <td>${index+1}</td>
                <td>${person.name}</td>
                <td>${person.score}</td>
                <td>${person.date}</td>
                <td><button id="btn-start" type="submit" class="btn btn-warning">Basla</button></td>
            </tr>
        `).join("");
    return personRows;
}
