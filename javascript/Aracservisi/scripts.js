let marka = "BMW"; //Aracin Markasi
let renk = "mavi"; //Aracin rengi
let model = 2020; // Hangi yilda trafige ciktigi
let müsteri = 0; // Müsteri kac senedir geliyor?

if (müsteri >= 5) {
    console.log("Araciniz kabul edilmistir.")
} else if (marka == "BMW") {
    if (renk == "kirmizi") {
        if (model >= 2010 && model <= 2019) {
            console.log("Araciniz kabul edilmistir.")
        } else {
            console.log("Araciniz uzmanlik alanimiza girmemektedir. Iyi günler dileriz.")
        }
    } else if (renk == "siyah") {
        if (model >= 2020) {
            console.log("Araciniz kabul edilmistir.")
        } else {
            console.log("Araciniz uzmanlik alanimiza girmemektedir. Iyi günler dileriz.")
        }
    } else {
        console.log("Araciniz uzmanlik alanimiza girmemektedir. Iyi günler dileriz.")
    }
} else if (marka == "Audi") {
    if (renk == "kirmizi" || renk == "siyah") {
        if ((model >= 2005 && model <= 2010) || (model >= 2014 && model <= 2020)) {
            console.log("Araciniz kabul edilmistir.")
        } else {
            console.log("Araciniz uzmanlik alanimiza girmemektedir. Iyi günler dileriz.")
        }
    } else {
        console.log("Araciniz uzmanlik alanimiza girmemektedir. Iyi günler dileriz.")
    }
} else if (marka == "VW") {
    if (renk == "siyah") {
        if (model >= 2001 && model <= 2018) {
            console.log("Araciniz kabul edilmistir.")
        } else {
            console.log("Araciniz uzmanlik alanimiza girmemektedir. Iyi günler dileriz.")
        }
    } else {
        console.log("Araciniz uzmanlik alanimiza girmemektedir. Iyi günler dileriz.")
    }
} else {
    console.log("Araciniz uzmanlik alanimiza girmemektedir. Iyi günler dileriz.")
}