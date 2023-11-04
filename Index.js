let nome = "Anderson";
let nivel = "9500";

switch (true) {
  case nivel < 1000:
    console.log(`O herói de nome ${nome} está no nível de ${"Ferro"}!`); 
    break; 
  case nivel >= 1001 && nivel <= 2000:
    console.log(`O herói de nome ${nome} está no nível de ${"Bronze"}!`);  
    break;
  case nivel >= 2001 && nivel <= 5000:
    console.log(`O herói de nome ${nome} está no nível de ${"Prata"}!`);  
    break;
  case nivel >= 5001 && nivel <=6000:
    console.log(`O herói de nome ${nome} está no nível de  ${"Ouro"}!`);  
    break;
  case nivel >= 6001 && nivel <= 7000:
    console.log(`O herói de nome ${nome} está no nível de ${"Platina"}!`);  
    break;
  case nivel >= 7001 && nivel <= 8000:
    console.log(`O herói de nome ${nome} está no nível de ${"Ascendente"}!`);  
    break;
  case nivel >= 8001 && nivel <= 9000:
    console.log(`O herói de nome ${nome} está no nível de ${"Imortal"}!`);  
    break;
  case nivel >= 9001 && nivel <= 10000:
    console.log(`O herói de nome ${nome} está no nível de ${"Radiante"}!`);  
    break;
}
