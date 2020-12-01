let marka = "Audi"; //Aracin Markasi
let renk = "siyah"; //Aracin rengi
let model = 2006; // Hangi yilda trafige ciktigi
let müsteri = 4; // Müsteri kac senedir geliyor?

if ((müsteri >= 5) || ((marka == "BMW" && renk == "kirmizi" && model >= 2010 && model <= 2019) || (renk == "siyah" && model >= 2020)) || (marka == "Audi" && (renk == "kirmizi" || renk == "siyah") && ((model >= 2005 && model <= 2010) || (model >= 2014 && model <= 2020))) || ((marka == "VW" && renk == "siyah") && (model >= 2001 && model <= 2018))) {
    console.log("Araciniz kabul edilmistir.");
} else {
    console.log("Araciniz uzmanlik alanimiza girmemektedir. Iyi günler dileriz.")
}