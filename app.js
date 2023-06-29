/* const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum }; */

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// Funciones
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 127.9;
    // retornamos el valor
    return valueInYen;
}
const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInEuro = valueInYen * 0.8;
    // retornamos el valor
    return valueInEuro;
}
//console.log(fromEuroToDollar(num,1.2))

// Exporta la función para usarla en otros archivos
module.exports = {fromEuroToDollar , fromDollarToYen , fromYenToPound };