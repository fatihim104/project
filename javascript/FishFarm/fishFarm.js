const fishFarm = [{
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 0, 1), // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway",
        season: "Winter",
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 11, 12), // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan",
        season: "Winter",
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    {
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom",
        season: "Spring",
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    {
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland",
        season: "Summer",
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    {
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France",
        season: "Autumn",
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Bluefish",
        price: 13.70,
        entryDate: new Date(2021, 10, 11),
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy",
        season: "Winter",
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    {
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "GREECE",
        season: "Summer",
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    {
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt",
        season: "Summer",
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    {
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam",
        season: "Summer",
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain",
        season: "Winter",
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    },
]

/**
1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
--4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
6) Toplam balik stoku ne kadardir?
7) En pahali olan balik hangisidir? 
8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
 */

//Stok miktari 500 kg uzerinde olan baliklarin listesi
console.log(`Stok miktari 500 kg uzerinde olan baliklarin listesi : ${getOver500StockVolumeInKg(fishFarm).join()}`);

// Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar
console.log(`Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar : ${bringProperPrice(fishFarm)}`);

//Sadece Bern'de ve kis sezonu satilan baliklar
console.log(`Sadece Bern'de ve kis sezonu satilan baliklar : ${bringWinterBern(fishFarm)}`);

//Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
console.log( orderExpirationDate(fishFarm));

//Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari siralayiniz.
console.log(`(AB)'den gelen ve fiyati 10Fr dan dusuk olan baliklar : ${bringABCountry (fishFarm).join("")} `);

//Toplam balik stoku ne kadardir?
let totalStok = fishFarm.reduce(function(accumulator, currentValue,) {
    return accumulator + currentValue.stockVolumeInKg;
  },0)
console.log(`Toplam balik stoku : ${totalStok}`);

//En pahali olan balik hangisidir?
console.log(`En Pahali Balik : ${bringMaxPriceFish(fishFarm)}`);

//En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
console.log(`En uzun sureli durabilen baliklar ve ülkeleri :\n${bringLongTermProductList(fishFarm)}`);

// Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
console.log( `Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati : ${takeAverageFilteredPrice(fishFarm)}`);

//Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
console.log(`Ticino Kantonu toplam balik stogu : ${bringTicinoProductStok(fishFarm)}`);

// Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
console.log(`Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramaji : ${takeAverageWeight(fishFarm)}`);







