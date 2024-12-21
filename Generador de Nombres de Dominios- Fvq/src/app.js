
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io', '.ar', '.uy'];
let  domainHacks = ['.es'] ; //sin el pued.

let generadorDominio = [];

//sin eldomainHacks
pronoun.forEach(start => {
  adj.forEach(med => {
    noun.forEach(final => {
      extensions.forEach(exten => {
        console.log (`${start}${med}${final}${exten}`);
        generadorDominio.push(`${start}${med}${final}${exten}`);
      });
    });
  });
});

pronoun.forEach(start => {
  adj.forEach(med => {
    noun.forEach(final => {
      domainHacks.forEach(hack => {
        let domainHacks = `${start}${med}${final.slice(0, -hack.length)}${hack}`; // tema: eliminando el array. El slice extrae parte del array que elijo. (from position, position)
        console.log(domainHacks);
        generadorDominio.push(domainHacks);
      });
    });
  });
});

console.log(generadorDominio);