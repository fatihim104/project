/**
Oto yedek parca isi yapan Kerem Bey, toptancilardan aldigi yedek parcalari, kendi envanterine kendi sistemi ile kaydedip, bu parcalari depoya yerlestirirken bir takim süreclerden gecirmek istemektir. Bu süreclerin her biri bir fonksiyon olarak tanimlanacaktir.
Araba parcalari ise bir array icinde verilecektir.

Kerem Bey'in istedigi program, asagiaki durumlari karsilamasi gerekmektedir.

1. Parca isimleri büyük harflere cevrilecektir.
2. Parca isimlerinden sayilar cikartilacaktir.
3. Parca isimleri tersine cevrilecektir.
4. Her parcanin basina KEREMAG_ eklenecektir.
5. Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)

 */
//Sabit Degiskenler
const yedekParcalar = ["kaporta2", "5lastik", "Akü", "saft", "buji9", "k12ece39", "yag100filtresi" ]

// Tanimlanan Fonksiyonlar
let change_Upper = (newWord) => newWord.toUpperCase()
let remove_Number = (newWord) => newWord.replace(/[0-9]/g, '');
let reverse_Word = (newWord) => newWord.split("").reverse().join("");
let add_Word = (newWord) => "KEREMAG_"+ newWord;
let add_Date = (newWord) => new Date + newWord;

function change_List(pParam){
    let siradakiParca = pParam;
    let date = null;
    let newList = [];
    for (let index = 0; index < yedekParcalar.length; index++) {
        siradakiParca = yedekParcalar[index];
        upper = change_Upper(siradakiParca);
        remov = remove_Number(upper);
        reverse = reverse_Word(remov);
        addKerem = add_Word(reverse);
        date = add_Date(addKerem);
        newList.push(date);
    }
return newList;
}

console.log(change_List(yedekParcalar).join("\n"));

/** 
 * kisaltilmis
function change_List(pParam){
    let siradakiParca = pParam;
    let newList = [];
    for (let index = 0; index < yedekParcalar.length; index++) {
        siradakiParca = yedekParcalar[index];
        newList.push(add_Date(add_Word(reverse_Word(remove_Number(change_Upper(siradakiParca))))));
    }
return newList;
}
console.log(change_List(yedekParcalar).join("\n"));
*/