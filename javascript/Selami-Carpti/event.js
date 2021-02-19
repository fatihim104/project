//eventlistener fonksiyonlari
function clickEventHandler(pEvent) {
    let clickedElement = pEvent.target;
    if (clickedElement.id === "btn-add-student") {
        pEvent.preventDefault();
        newPersonId = addNewPersonData(personData);
        newPerson = getData(newPersonId);
        renderForm()
    }
    if (clickedElement.id === "btn-start") {
        pEvent.preventDefault();
        createMultiplePlay()
        selectedRowIndex = clickedElement.closest("tr").id;
        let selectedPerson = personData[selectedRowIndex];      
        selectedPerson.score = 0;
        selectedPersonList.push(selectedPerson);
    }
    renderTable(personData);
}

function playAreaEventHandler(pEvent){
    let clickedElement = pEvent.target;
    if (clickedElement.id === "btn-answer-check") {
        pEvent.preventDefault();
        checkAnswer(resultArray, points);
        checkedPerson=personData[selectedRowIndex];
        checkedPerson.score = getTotalPoint(points)
        selectedPersonList = [];
        renderTable(personData);
    }
    if (clickedElement.id === "btn-finish"){
        stopPlay()
        personData.forEach(person => saveData(person, person.id));
    }
}