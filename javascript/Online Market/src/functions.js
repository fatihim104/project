/**
 * Sabit degiskenler.
 */
const mainElement = document.querySelector("#app");
const productSection = document.querySelector("#product-table");
const basketSection = document.querySelector("#basket-table");
let basketList = [];

/**
 * updateUI fonksiyonu ile sayfa acildiginda ilk veriler yüklenir.
 */
updateUI(productList, basketList);

/**
 * bu fonksiyon yapilan islemleri sayfaya yazdiriri.
 * @param {array} pProductList 
 * @param {object} pBasketList 
 */
function updateUI(pProductList, pBasketList) {
    productSection.innerHTML = getProductLıstTable(pProductList);
    basketSection.innerHTML = createSepetImage() + createNewTable(pBasketList);
}

/**
 * bu fonksiyon ile data dosyasindaki veriler soldaki ürün tablosuna aktarilir.
 * @param {array} pProductList 
 */
function getProductLıstTable(pProductList) {
    let tableHead = `<thead class="table-dark"><tr><th>Name</th><th>Calorie</th><th>Exp.Date</th>
        <th>Price</th><th>Photo</th><th></th></tr><thead>`;

    let tableBody = '<tbody ">';
    for (let index = 0; index < pProductList.length; index++) {
        let value = pProductList[index];
        tableBody += '<tr><td>' + value.productName + '</td>' +
            '<td>' + value.totalCalories + '</td>' +
            '<td>' + (value.expireDate).toDateString() + '</td>' +
            '<td>' + value.price + '</td>' +
            '<td><img src=" ' + value.productImage + ' " alt="PRO"></img></td>' +
            '<td>' + '<button id="button-buy" class="btn btn-success">Buy</button>' + '</td>' +
            '</tr>';
    }
    tableBody += '</tbody>';
    let table = '<table id="list-product" class="table mt-4 ms-4 table-striped table-hover">' + tableHead + tableBody + '</table>';
    return table;
}

/**
 * bu fonksiyon ile satin al tusuna basilmasi sonrasinda olusturulan yeni tablonun icerigini olusturan diger fonksiyon ve elementler bir araya getirilir.
 * @param {object} pBasketList 
 */
function createNewTable(pBasketList) {
    return `<table id="table-sold" class="table table-hover table-borderless table-dark mt-4 ms-4"> ${createBasketTableHead()} ${createBoughtTableBody(pBasketList)}<tr class="bg-primary"><td>Total Price</td><td class="bg-danger">${addTotalPrice(pBasketList)}</td><td></td><td></td></tr></table>` 
}

/**
 * bu fonksiyon ile sepet tablosunun baslik kismi olusturulur.
 */
function createBasketTableHead() {
    return `<thead class="table-light">
    <tr><th>Name</th><th>Price</th><th>Photo</th><th></th></tr>
    <thead>`;
}

/**
 * bu fonksiyon ile sepet tablosunun gövdesi olusturulur ve secilen ürünün satir olarak eklenmesi saglanir.
 * @param {object} pBasketList 
 */
function createBoughtTableBody(pBasketList) {
    let tableBody = '<tbody>';
    for (let index = 0; index < pBasketList.length; index++) {
        let element = pBasketList[index];
        tableBody += `<tr><td>${element.cells[0].textContent}</td><td>${element.cells[3].textContent}</td>
        <td>${element.cells[4].innerHTML}</td>
        <td><button id="button-delete" class="btn btn-outline-danger">Delete</button></td></tr>`;
    }
    tableBody += '</tbody>';
    return tableBody;
}

/**
 * bu fonksiyon ile sepet tablosuna atilan ürünlerin fiyatlari toplanir.
 * @param {object} pBasketList 
 */
function addTotalPrice(pBasketList) {
    let filteredPrice = pBasketList.map(product => parseFloat(product.cells[3].textContent))
    let totalPrice = filteredPrice.reduce(function (accumulator, currentValue, ) {
        return accumulator + currentValue;
    }, 0)
    return totalPrice.toFixed(2);
}

/**
 * bu fonksiyon ile sepet imaji sayfaya eklenir.
 */
function createSepetImage(){
    return `<figure><img src="./src/img/iconfinder_27_4698590 (1)512.png" alt="sepet photo"></figure>`
}