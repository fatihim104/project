const POINT = 10;
const TOTAL_QUESTION = 10;
let resultArray = [];
let answerArray = [];
let points = [];

/**
 * bu fonksiyon oyun alanina sorunun ve formun bulundugu komponentlerini yazdirir.
 */
function createMultiplePlay() {
    playerArea.innerHTML = createNewSection()
}

/**
 * bu fonksiyon oyun alanini temizler.
 */
function stopPlay(){
    playerArea.innerHTML = "";
}

/**
 * bu fonksiyon soru ve form komponentlerini olusturur.
 */
function createNewSection() {
    return `
    <section id = "play-section">
        <div>
            ${getQuestion()}
        </div>
        <div>
            ${getAnswerInput()}
        </div>
    </section> 
    `;
}

/**
 * bu fonksiyon yazdirilan sorunun cevabini input olarak almak icin formu ve eventlar icin butonlari olusturur. 
 */
function getAnswerInput() {
    return `
    <form class="row row-cols-lg-auto g-3 align-items-center">
        <div class="col-12">
        <label class="visually-hidden" for="inlineFormInputGroupUsername">Ad</label>
        <div class="input-group">
            <input type="number" class="form-control" id="answer" placeholder="cevabi yaz">
        </div>
        </div>
        <div class="col-12">
            <button id="btn-answer-check" type="submit" class="btn btn-success">Check</button>
            <button id="btn-finish" type="submit" class="btn btn-danger">Finish</button>
        </div>
  </form>
  `;
}

/**
 * bu fonksiyon random olarak carpanlari ve  carpim sorusunu olusturur.
 * carpimin sonucunu resultarraya gönderir.
 */
function getQuestion() {
    firstNumber = Math.floor((Math.random() * 10) + 1);
    secondNumber = Math.floor((Math.random() * 10) + 1);
    result = firstNumber * secondNumber;
    resultArray.push(result);
    return `${firstNumber} * ${secondNumber}`
}

/**
 * bu fonksiyon sorularin cevaplarini kontrol eder..
 */
function checkAnswer(pResultArray, pPoints) {
    let answer = document.querySelector("#answer").value;
    answerArray.push(answer);
    let result = pResultArray[pResultArray.length - 1];
    console.log(result)
    if (+result === +answer) {
        pPoints.push(POINT);
        alert("Bravoo!! Haydi sonraki sorun hazir?");
        isLastQuestion(pResultArray, pPoints)
        stopPlay()
    } else {
        alert("yanlis cevap..Sonraki soruya gecelim..");
        isLastQuestion(pResultArray, pPoints)
        stopPlay()
    }
    createMultiplePlay()
    let total = getTotalPoint(pPoints)
    console.log(total);
    return total;
}

//Toplam puani hesaplama fonksiyonu
function getTotalPoint(pPoints) {
    let result = pPoints.length * POINT;
    return result;
}

//soru sayisini hesaplama fonksiyonu
function isLastQuestion(pResultArray, pPoints){
    if (pResultArray.length === TOTAL_QUESTION) {
        alert("oyun bitti! puanin = " + getTotalPoint(pPoints))
    }
}