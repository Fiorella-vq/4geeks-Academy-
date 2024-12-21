/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generatorExcuse() {
  // ARRAYS:
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let animalImages = [
    "https://www.clinicaoburgo.es/wp-content/uploads/2014/08/descarga.jpeg",
    "https://i.pinimg.com/236x/94/85/f4/9485f450f75e550134ccfc1fffa8bfbb.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSkieUFyqQ6HgWQNJzGviazhKq8A_IKHo2YQ05ZVjJQ6VnUY2Z-GDanjt4EORdPlUDcXo&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjs8niE5RFWhV81eXhbDMqpDwT9dqeVYG_qQ&s"
  ];

  // ELEMENTOS ALEATORIOS:
  let rndmWho = who[Math.floor(Math.random() * who.length)];
  let rndmAction = action[Math.floor(Math.random() * action.length)];
  let rndmWhat = what[Math.floor(Math.random() * what.length)];
  let rndmWhen = when[Math.floor(Math.random() * when.length)];
  let randomImage =
    animalImages[Math.floor(Math.random() * animalImages.length)];
  // Genera la excusa aleatoria:
  let excuse = `${rndmWho} ${rndmAction} ${rndmWhat} ${rndmWhen}.`; //alt96 para poner `

  // Reemplaza el contenido del elemento con id "excuse" con la excusa generada
  document.getElementById("excuse").innerHTML = excuse;
  document.querySelector(".image img").src = randomImage;

  // Muestra un mensaje en la consola
  console.log("Hello Rigo from the console!");
}

window.onload = generatorExcuse;
