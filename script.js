let pocet = prompt ("Zadej počet kusů triček:")

if (pocet < 50 ) {

    document.body.innerHTML += "<p> Celkova cena je:" + pocet * 300 + "</p>"
}
if (pocet >=50 && pocet<200 ) {

    document.body.innerHTML += "<p> Celkova cena je:" + pocet * 250 + "</p>"
}

if (pocet >= 200 && pocet< 500) {

    document.body.innerHTML += "<p> Celkova cena je:" + pocet * 200 + "</p>"
}

if (pocet >= 500 && pocet<1000) {

    document.body.innerHTML += "<p> Celkova cena je:" + pocet * 150 + "</p>"
}

if (pocet >= 1000) {

    document.body.innerHTML += "<p> Celkova cena je:" + pocet * 120 + "</p>"
}