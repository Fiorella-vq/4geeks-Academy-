window.onload = function () {
    const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];
    const cardPintas = ["♦", "♥", "♠", "♣"];

 
    function generadorCard(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

 
    function generarCartaNueva() {
        const cardAleatorio = generadorCard(cardValues);
        const pintaAleatoria = generadorCard(cardPintas);

        const valueElement = document.querySelector(".value");
        const pintaElement = document.querySelector(".pinta");
        const pintaBotomElement = document.querySelector(".pinta-botom");

        valueElement.innerHTML = cardAleatorio;
        pintaElement.innerHTML = pintaAleatoria;
        pintaBotomElement.innerHTML = pintaAleatoria;

      
        if (pintaAleatoria === "♥" || pintaAleatoria === "♦") {
            pintaElement.style.color = "red";
            pintaBotomElement.style.color = "red";
            valueElement.style.color = "red"; 
        } else {
            pintaElement.style.color = "black";
            pintaBotomElement.style.color = "black";
            valueElement.style.color = "black"; 
        }
    }


    document.getElementById("CardButton").onclick = generarCartaNueva;
    generarCartaNueva();
    
    setInterval(generarCartaNueva, 10000);
};
