import DonutMaker from "./DonutMaker.js";

const makeDonutButton = document.querySelector('.makeDonutButton');
const buyAutoButton = document.querySelector('.purchaseAuto');
const buyMultiButton = document.querySelector('.purchaseMulti');
const numMulti = document.getElementById('numMulti');
const numAuto = document.getElementById('numAuto');
const donutsMade = document.getElementById('donutsMade');
const autoCost = document.getElementById('autoCost');
const multiCost = document.getElementById('multiCost');
const resetButton = document.getElementById("reset")
const myDonutMaker = new DonutMaker(0,0,100,10,0);


makeDonutButton.addEventListener("click",()=>{
  myDonutMaker.addDonut();
  donutsMade.innerHTML = myDonutMaker.numDonuts;
  console.log(myDonutMaker.numDonuts);
})

resetButton.addEventListener("click",()=>{
  location.reload();
return false;
});


buyAutoButton.addEventListener("click",()=>{
  myDonutMaker.buyAuto();
  numAuto.innerHTML = myDonutMaker.numAuto;
  donutsMade.innerHTML=myDonutMaker.numDonuts;
  autoCost.innerHTML = myDonutMaker.autoCost;
  console.log(myDonutMaker.numAuto);
  console.log(myDonutMaker.autoCost)
})


buyMultiButton.addEventListener("click",()=>{
  myDonutMaker.buyMulti();
  numMulti.innerHTML =  myDonutMaker.numMulti;
  multiCost.innerHTML = myDonutMaker.multiCost;
  console.log(myDonutMaker.numMulti);
})


setInterval(function (){
  myDonutMaker.activateAuto();
  donutsMade.innerHTML = myDonutMaker.numDonuts;},1000);

