//Stok miktari 500 kg uzerinde olan ürünlerin isimlerini listeleme fonksiyonu.
function getOver500StockVolumeInKg(pProductList) {
    let over500StockList = pProductList.filter(products => products.stockVolumeInKg > 500);
    let productNames = over500StockList.map(productInfos => productInfos.fishType);
    return productNames;
}

//Fiyat araligi 9Fr. ile 12 Fr. arasindaki ürünleri bulan fonksiyon.
function bringProperPrice(pProductList) {
    let properPriceProduct = pProductList.filter(products => products.price > 9 && products.price < 12);
    let productName = properPriceProduct.map(productInfos => productInfos.fishType);
    return productName;
}


//Sadece Bern'de ve kis sezonu satilan ürünleri listeleme fonksiyonu.
function bringWinterBern(pProductList) {
    let localSeosonProduct = pProductList.filter(products => products.season === "Winter" && products.saleLocations.includes("BE"));
    let productName = localSeosonProduct.map(productInfos => productInfos.fishType);
    return productName;
}

//Son kullanma tarihlerine gore baliklari siralayan fonksiyon.
function orderExpirationDate(pProductList){
    fishFarm.forEach( product => product.entryDate = product.entryDate.setDate(product.entryDate.getDate() + product.durationInDays));
    let sortedDate = fishFarm.sort((a,b) => a.entryDate - b.entryDate)
    let result = sortedDate.map (product => product.fishType + " --->  " + new Date(product.entryDate));
    return result.join("\n");
}

//(AB) ülkelerinden gelen ve fiyati 10Fr dan dusuk olan baliklari getirme fonksiyonu.
function bringABCountry(pProductList) {
    let countryABProduct = pProductList.filter(products => (products.originCountry === "Poland" || products.originCountry === "France" || products.originCountry === "Italy" || products.originCountry === "GREECE" || products.originCountry === "Spain") && products.price < 10);
    let productName = countryABProduct.map(productInfos => productInfos.fishType);
    let ordered = productName.sort();
    return ordered;
}

//En pahali olan baligi bulma fonksiyonu.
function bringMaxPriceFish(pProductList) {
    let sorted = pProductList.sort((a, b) => a.price - b.price)
                            .slice(pProductList.length - 1);
    return sorted[0].fishType + "=" + sorted[0].price;
}

//En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
function bringLongTermProductList(pProductList) {
    durationDayList = pProductList.map(product => product.durationInDays)
    maxDurationDay = pProductList.reduce((a, b) => Math.max.apply(null, durationDayList));
    longTermFish = pProductList.filter(product => product.durationInDays === maxDurationDay)
        .map(product  => product.fishType + ":" + product.originCountry + "\n");
    return longTermFish.join("");
}

// Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyatini bulan fonksiyon.
function takeAverageFilteredPrice(pProductList) {
    let regionSeasonFilteredFish = pProductList.filter(product => (product.season === "Winter" || product.season === "Autumn") && (product.saleLocations.includes("VD") || product.saleLocations.includes("NE") || product.saleLocations.includes("GE")));
    let averageOfFilteredPrices = regionSeasonFilteredFish.reduce((accumulatör, currentValue, currentIndex, array) => {
        let sum = accumulatör + currentValue.price;
        if (currentIndex === array.length - 1) {
            return sum / array.length;
        }
        return sum;
    }, 0);
    return averageOfFilteredPrices.toFixed(4);
}

//Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
function bringTicinoProductStok(pProductList) {
    let filteredTicino = pProductList.filter(product => product.saleLocations.includes("TI"))
    let totalStokTicino = filteredTicino.reduce(function (accumulator, currentValue, ) {
        return accumulator + currentValue.stockVolumeInKg;
    }, 0)
    return totalStokTicino;
}

// Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulma fonksiyonu.
function takeAverageWeight(pProductList) {
    let filteredProductList = pProductList.filter((product) => ((product.originCountry === "Vietnam" || product.originCountry === "Norway" || product.originCountry === "Japan" || product.originCountry === "United Kingdom" || product.originCountry === "Egypt") && (product.season === "Summer") && (product.saleLocations.includes("ZH"))));

    let productWeightAverage = filteredProductList.reduce(function (accumulator, currentValue, currentIndex, array) {
        let sum = accumulator + currentValue.itemWeightInGrams;
        if (currentIndex === array.length - 1) {
            return sum / array.length;
        }
        return sum;
    }, 0);
    return productWeightAverage;
}