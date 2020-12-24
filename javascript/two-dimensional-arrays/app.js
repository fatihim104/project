/**  Her bir array ilk slotunda ögrenci ismi ve sonrasinda sirasi ile Matematik, Almanca, Ingilizce ve Cografya derslerini icermektedir. 

Kodumuz asagidaki islemleri gerceklestirmesi gerekmektedir.

- Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi
- Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
- Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi
- Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi
- Sinifin en kötü oldugu dersi gostermesi
- Tüm derslerin en iyi ögrencilerini bulmasi
*/

//Sabit Degerler
const notes = [
    ["Hans", 80, 90, 10, 50],
    ["Ulrich", 94, 36, 76, 74],
    ["Olaf", 30, 60, 34, 78],
    ["Otto", 60, 60, 78, 23],
    ["Tina", 71, 45, 89, 100],
    ["Rosalina", 40, 56, 82, 40],
    ["Urs", 49, 45, 56, 67],
    ["Monika", 49, 42, 16, 62]
];

//Dersleri index sirasi almasi icin diziye attik.
let lessons = ["Matematik", "Almanca", "Ingilizce", "Cografya"]

//Sinifin her dersinin ortalamasinin ayri ayri hesaplanmasi 
// Bu fonksiyon ders ismi girildiginde o dersin notlarini toplar ve ders sayisina bölerek ortalamayi bulur.
function takeAverage(p_lessonNumber) {
    let lessonIndex = p_lessonNumber
    let total = 0;
    let avarage = 0;
    for (let index = 0; index < notes.length; index++) {
        let nextNotes = notes[index];
        nextLessonNot = nextNotes[lessonIndex];
        total += nextLessonNot;
    }
    avarage = total / notes.length;
    return avarage;
}

//consola 4 dersi sirayla yazdirma döngüsü
for (let i = 0; i < lessons.length; i++) {
    nextLesson = lessons[i]
    console.log(` ${lessons[i]} dersi Ortalamasi: ${takeAverage(i+1)}`);
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

//Herhangi bir dersden 70 puan üstü alanlarin listesi bulmasi
//Siradan listeyi dolasan ve 70 in üstündeki notlari belirleyip bu notlari alan ögrencileri listeleyen döngüdür.
let over70List = [];
let over70 = "";
for (let index = 0; index < notes.length; index++) {
    let nextNotes = notes[index];
    for (let indexLessons = 0; indexLessons < nextNotes.length; indexLessons++) {
        let nextLessonNot = nextNotes[indexLessons];
        if (nextLessonNot > 70) {
            over70 = (notes[index][0]);
            over70List.push(over70);
            break;
        }
    }
}
console.log("\n" + "70 puan üstü alanlar:" + over70List.join());

//fonksiyon kullanarak cözüm
//parametre olarak ders indexi verilen fonksiyonda secilen dersden 70"in üzerinde olan notlara göre secim yapip o nota sahip ögrenciler listeleniyor. Asagidaki for döngüsünde de fonksiyonun parametresi döndürülerek tüm ögrencilere bakilmasi saglaniyor.
function bringOver70(p_nameIndex) {
    let notsLine = p_nameIndex;
    let goodNot = "";
    for (let index = 1; index < notes[0].length; index++) {
        if (notes[notsLine][index] > 70) {
            goodNot = notes[notsLine][0];
            break;
        }
    }
    return goodNot;
}

let listsOver70 = [];
for (let index = 0; index < notes.length; index++) {
    listsOver70.push(bringOver70(index))
}
console.log("70 puan üstü alanlar(fonksiyon ile):" + listsOver70.join(" ") + "\n");

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

//Tüm derslerden ortalamanin üstünde olanlarin listesinin olusturulmasi 
//(Olusturdugumuz fonksiyon ismi yazilan dersten ögrencilerin sirayla notunu getirmekte ve daha önce kullandigimiz ortalama alma fonksiyonunun verdigi sonuc karsilastirmaktadir.)
function compare_Avarage(p_lessonName) {
    let lessonIndex = p_lessonName;
    let overAvarageList = []
    for (let index = 0; index < notes.length; index++) {
        nextNot = notes[index][lessonIndex];
        if (takeAverage(lessonIndex) < nextNot) {
            student = notes[index][0];
            overAvarageList.push(student)
        }
    }
    return overAvarageList;
}

//consola 4 dersi sirayla yazdirma döngüsü
for (let i = 0; i < lessons.length; i++) {
    nextLesson = lessons[i]
    console.log(` ${lessons[i]} dersi ortalama üstünde olan ögrenciler: ${compare_Avarage(i+1)}`);
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

//Sinifin hangi dersde en iyi nota sahip oldugunu gostermesi(hangi dersde dedigi ve en iyi notu sordugu icin en yüksek nota ve hangi derse ait olduguna ulasilmistir)
//Fonksiyonda en yüksek not, dersi ve notu alan kisi cikarilmistir. Alttaki fonksiyonda ise ders adi indexe göre cagrilmaktadir.
function get_topScore() {
    let topScore = 0;
    let topScorePerson = null;
    let topScoreLesson = null;

    for (let index = 0; index < notes.length; index++) {
        for (let counter = 1; counter < 5; counter++) {
            if (topScore < notes[index][counter]) {
                topScore = notes[index][counter];
                topScorePerson = notes[index][0];
                topScoreLesson = get_className(counter);
                result = topScore + " " + "Ögrenci :" + topScorePerson + " " + "Dersin adi:" + topScoreLesson;
            }
        }
    }
    return result;
}

//Bu fonksiyonda ders indexine göre dersin adi cagrilmaktadir.
function get_className(index) {
    switch (index) {
        case 4:
            return "Cografya"
            break;
        case 3:
            return "Ingilizce"
            break;
        case 2:
            return "Almanca"
            break;
        case 1:
            return "Matematik"
            break;
        default:
            return "enter correct index"
    }
}
console.log("\n" + "Siniftaki en yüksek ders notu :" + get_topScore());

//Ortalamaya göre en iyi ders
function get_goodNot() {
    let goodNot = takeAverage(1);
    for (let index = 1; index < 5; index++) {
        if (goodNot < takeAverage(index)) {
            goodNot = takeAverage(index)
            result = goodNot + " " + get_className(index);
        }
    }
    return result;
}
console.log("Siniftaki ortalamasi en iyi ders :" + get_goodNot() + " \n");

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

//Sinifin en kötü oldugu dersi gostermesi(sinifin en kötü oldugu ders, ortalamasi en düsük olan derstir.)
//Bu fonksiyonda ; daha önceki maddelerde olusturulan "takeAverage" ve "get_className" fonksiyonlari da kullanilarak ortalama ders notlarinin en düsügü bulunmustur.
function get_badNot() {
    let badNot = takeAverage(1);
    for (let index = 1; index < 5; index++) {
        if (badNot > takeAverage(index)) {
            badNot = takeAverage(index)
            result = badNot + " " + get_className(index);
        }
    }
    return result;
}
console.log("Siniftaki ortalamasi en düsük ders :" + get_badNot() + " \n");

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

//Tüm derslerin en iyi ögrencilerini bulmasi 
function bring_LessonNot(p_lessonName) {
    let lessonIndex = p_lessonName;
    let student = "";
    let lessonNotList = [];
    let topNotOfLesson = null;
    for (let index = 0; index < notes.length; index++) {
        nextNot = notes[index][lessonIndex];
        lessonNotList.push(nextNot)
    }

    topNotOfLesson = lessonNotList.sort().slice(7).join()

    for (let index = 0; index < notes.length; index++) {
        for (let innerIndex = 0; innerIndex < notes[index].length; innerIndex++) {
            let nextNot = (notes[index][innerIndex]);
            if (nextNot == topNotOfLesson) {
                student = notes[index][0];
            }
        }
    }
    return topNotOfLesson + " " + student;
}

//consola 4 dersi sirayla yazdirma döngüsü
for (let i = 0; i < lessons.length; i++) {
    nextLesson = lessons[i]
    console.log(` ${lessons[i]} dersi birincisi: ${bring_LessonNot(i+1)}`);
}