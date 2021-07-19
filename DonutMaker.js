class DonutMaker {
  constructor(numDonuts, numAuto,autoCost,multiCost,numMulti) {
    this.numDonuts = numDonuts;
    this.numAuto = numAuto;
    this.autoCost = autoCost;
    this.multiCost= multiCost;
    this.numMulti= numMulti;
  };

  addDonut() {
    this.numDonuts += Math.round(1.2**this.numMulti);
  };

  buyAuto() {
      if (this.numDonuts >=this.autoCost){
    this.numAuto ++;
    this.numDonuts-=Math.round(this.autoCost);
    this.autoCost = Math.round(this.autoCost * 1.1);
      }
    };

    activateAuto(){
        for(let i = 0; i<this.numAuto;i++){
            this.addDonut();
        }
    }

  buyMulti(){
      if(this.numDonuts >= this.multiCost){
      this.numMulti += 1;
      this.numDonuts -= Math.round(this.multiCost);
      this.multiCost = Math.round(this.multiCost * 1.1);}
  }

  autoClicker(){
      for (let i=0; i>this.numAutoClickers; i++){
          this.addDonut();
      }
  }
}

export default DonutMaker;
