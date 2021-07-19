const container = (document.querySelector('.container').innerText =
  'mmmmmmmmm doughnuts.... ahhhhhhh!');
  // const makeDonut = document.querySelector('.makeDonutButton')
  // const donutsMade=document.querySelector(".donutsMade");

  // let donuts = 0;
  // makeDonut.addEventListener("click",function(){
  //   donuts += 1;
  //   donutsMade.innerHTML = donuts;
  // })

let donuts=0;
  
  const makeDonut = document.querySelector(".makeDonutButton");
  const donutsMade = document.querySelector("#donutsMade");

  
  makeDonut.addEventListener("click", function () {
    donuts += 1;
    donutsMade.innerHTML = donuts;
  });