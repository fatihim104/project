
/**eventhandler add fonksiyonu. bu fonksiyonda add tusuna basildiginda yapilacaklar yer almaktadir.*/
function addClickedEvent(pEvent){
    const name = document.querySelector("#input-name").value;
    const surname = document.querySelector("#input-surname").value;
    const age = document.querySelector("#input-age").value;    
    if (pEvent.target.id === "button-add") {
        newStudent = [name, surname, age]
        validateStudent(newStudent);
        addToStudentList(newStudent);
        addNewRowtoDisplayTable(studentList);
        getTotalNumber();        
        refreshForm();
    }
}

/**eventhandler remove fonksiyonu. bu fonksiyonda delete tusuna basildiginda yapilacaklar yer almaktadir.*/
function removeClickedEvent(pEvent){
    if (pEvent.target.id === "button-remove") {
        removeFromTable(pEvent);
        deleteFromStudentList(getRowIndex(pEvent));
        getTotalNumber();
    }
}

/**
 * bu fonksiyon kendisine array olarak gönderilen degerlerin bos olmamasini ve yas kisminin sayi olmasini kontrol eder.
 * @param {array} pNewStudent 
 */
function validateStudent(pNewStudent){
    if(pNewStudent[0] === ""
        || pNewStudent[1] === ""
        || pNewStudent[2] === ""){
            alert("Girilen degerler eksik!");
            throw new Error("Girilen degerler eksik!");
        }
    if(isNaN(pNewStudent[2])){
        alert("Yas degeri bir sayi olmali!");
        throw new Error("Yas deger bir sayi olmali");
    }
}

/**
 * bu fonksiyon array olarak gönderilen parametreyi yine array olan StudentList e gönderir.
 * @param {array} pNewStudent 
 */
function addToStudentList(pNewStudent){
    studentList.push(pNewStudent)
}

/**
 * bu fonksiyon event olayindan elementin satir indexine ulasir.
 * @param {event} pEvent 
 */
function getRowIndex(pEvent){
    pEvent.target.closest("tr").rowIndex;
}

/**
 * bu fonksiyon kendisine gönderilen numarara sati indeksini kullanarak studentList ten ayni index teki satiri siler.
 * @param {Number} pDeletedIndex 
 */
function deleteFromStudentList(pDeletedIndex){
    studentList.splice(pDeletedIndex-1,1)
}
 /**
  * bu fonksiyon clickleme eventini kullanarak tablodaki satiri DOM dan kaldirir.
  * @param {event} pEvent 
  */
function removeFromTable(pEvent){
    pEvent.target.closest("tr").remove()
}

/**bu fonksiyon forma girilen datalar listeye eklendikten sonra formu temizlenmektedir.*/
function refreshForm(){
    document.querySelector("#input-name").value="";
    document.querySelector("#input-surname").value="";
    document.querySelector("#input-age").value="";
}
/**
 * bu fonksiyon, parametre olarak gönderilen arrayin son indeksindeki ic arraydeki bilgileri ve delete tusunu olusturulan tablonun body kismina satir ve hücre olarak eklemektedir.
 * @param {array} pStudentList 
 */
function addNewRowtoDisplayTable(pStudentList) {
    const tbody = document.querySelector("#display-table-create-new-row");
    index = pStudentList.length - 1;
    tbody.innerHTML += `<tr class="rows">
                            <td>${pStudentList[index][0]}</td>
                            <td>${pStudentList[index][1]}</td>
                            <td>${pStudentList[index][2]}</td>
                            <td>${createRemoveButton()}</td>
                        </tr>`;
}

/**
 * bu fonksiyon olusturulan tablonun toplam satir sayisini hesaplar
 */
function getTotalNumber() {
    const tbody = document.querySelector("#display-table-create-new-row");
    document.querySelector("#total-number-student").innerHTML = tbody.childElementCount;
}