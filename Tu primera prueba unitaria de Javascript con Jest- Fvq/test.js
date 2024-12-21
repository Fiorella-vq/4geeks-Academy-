// // Importar la función sum del archivo app.js
//  const {fromEuroToDollar } = require('./app.js');

// // Comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
//     // Dentro de la prueba llamamos a nuestra función sum con 2 números
//     let total = sum(14, 9);

//     // Esperamos que la suma de esos 2 números sea 23
//     expect(total).toBe(23);
// })


const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const expected = 3.5 * 1.07; 
    expect(fromEuroToDollar(3.5)).toBe(expected); 
});

// Dolar a Yen
test("One dollar should be 146.26 yen", function() {
    const yen = fromDollarToYen(1);
    const expected = 1 * (156.5 / 1.07); 
    expect(yen).toBe(expected); 
});

// Yen a Libra
test("One yen should be approximately 0.00559 pounds", function() {
    const pounds = fromYenToPound(1);
    const expected = 1 * (0.87 / 156.5); 
    expect(pounds).toBe(expected); 
});


