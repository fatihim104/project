const ulList = document.getElementById('ul-list');
let base, choosenWord, dragging, draggedOver;

// Random ve Check butonlarini isleten eventhandler fonksiyonu.
function getClickedEvents(event) {
    let clickedButon = event.target;
    if (clickedButon.id === "random-buton") {
        choosenWord = wordList[getRandomIndex(wordList)].split("-");
        base = choosenWord.slice();
        shuffleChosenWorld(choosenWord, base);
        renderListItems(choosenWord);
    }
    if (clickedButon.id === "check-buton"){
        checkClickedEvent(choosenWord, base)
    }
}

/**
 * Bu fonksiyon kullanici tarafindan siralanan kelimenin dogru siralanip siralanmadigini kontrol eder.
 * @param {array} pChoosenWord 
 * @param {array} pBase 
 */
function checkClickedEvent(pChoosenWord, pBase) {
    pChoosenWord.join("") === pBase.join("") ? alert("Dogru!"): alert("Yanlis!");
}

/**
 * bu fonksiyon kendisine parametre olarak gönderilen secilen kelimeyi ve karistirir ve isMixed fonksiyonu ile
 * karistirilan hecelerin ilk kelime ile ayni olmamasini saglar.
 * @param {array} pChosenWord 
 * @param {array} pBase 
 */
function shuffleChosenWorld(pChosenWord, pBase) {
    pChosenWord.sort(() => Math.random() - 0.5)
    isMixed(pChosenWord, pBase)
}

/**
 * bu fonksiyon kendisine parametre olarak gönderilen secilen kelimeyi ve karistirilan kelimeyi kontrol eder ve ayni denk geldi ise tekrar karistirir.
 * @param {array} pChosenWord 
 * @param {array} pBase 
 */
function isMixed(pChosenWord, pBase) {
    if (pChosenWord.join() === pBase.join()) {
        shuffleChosenWorld(pChosenWord, pBase);
    } else {
        return pChosenWord;
    }
}

/**
 * bu fonksiyon kendisine parametre olarak gönderilen kelimeyi ekrana yazdirir ve drap drop fonksiyonlarini * * ekler.
 * @param {array} pChoosenWord 
 */
function renderListItems(pChoosenWord) {
    ulList.innerText = '';
    pChoosenWord.forEach(syllable => {
        let listItem = document.createElement("li");
        listItem.className= "dropzone"
        listItem.draggable = true;
        listItem.innerText = syllable;
        ulList.appendChild(listItem);
    })
    addDragDropEventListener()
};

// bu fonksiyon liste elemanlarina drop ve drop fonksiyonlarini tanimlar.
function addDragDropEventListener(){
    let listItem = document.querySelectorAll("li");
    listItem.forEach(it => {
        it.addEventListener('drag', setDragging);
        it.addEventListener('dragenter', setDragEnter);
        it.addEventListener('dragover', setDraggedOver);
        it.addEventListener('dragleave', setDragleave);
        it.addEventListener('drop', setDrop);
    })
}

// Drag olayinin baslatildigi fonksiyon.
function setDragging(e) {
    dragging = e.target.innerText;
    e.target.style.opacity = ".5"
}

// Dragover olayinin tanimlandigi fonksiyon.
function setDraggedOver(e) {
    e.preventDefault();
    draggedOver = e.target.innerText;
}

// Dragenter olayinin tanimlandigi fonksiyon.
function setDragEnter(e){
    if ( e.target.className == "dropzone" ) {
        e.target.style.background = "purple";
    }
    // e.target.style.backgroundColor = "red"
}

// Dragleave olayinin tanimlandigi fonksiyon.
function setDragleave(e) {
    if ( e.target.className == "dropzone" ) {
        e.target.style.background = "";
    }
}

// Drop olayinin tanimlandigi fonksiyon. Drop olayi gerceklestirildiginde hecelerin arraydeki sirasi degistiriliyor ve yeni sira tekrar ekrana yazdiriliyor.
function setDrop(e) {
    let index1 = choosenWord.indexOf(dragging);
    let index2 = choosenWord.indexOf(draggedOver);
    choosenWord.splice(index1, 1);
    choosenWord.splice(index2, 0, dragging);
    renderListItems(choosenWord)
};

/**
 * bu fonksiyon datadaki kelime listesinin uzunluguna göre rastgele sayi olusturur.
 * @param {array} pWordList 
 */
function getRandomIndex(pWordList) {
    return Math.floor(Math.random() * pWordList.length);
}