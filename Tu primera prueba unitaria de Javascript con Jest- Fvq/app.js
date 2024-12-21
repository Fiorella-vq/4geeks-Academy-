// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
}

// conversión de Dólar a Yen
const fromDollarToYen = (dolares) => {
    return dolares * (oneEuroIs.JPY / oneEuroIs.USD);
}

// conversión de Yen a Libra
const fromYenToPound = (yen) => {
    return yen * (oneEuroIs.GBP / oneEuroIs.JPY);
}

// Exportar las funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
