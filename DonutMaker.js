class DonutMaker {
  constructor(numDonuts, numAutoClickers) {
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
  }

  addDonut() {
    this.numDonuts++;
  }

  addAutoClicker() {
    if (this.numDonuts >= 100) {
      this.numAutoClickers++;
      this.numDonuts -= 100;
    }
  }
}

export default DonutMaker;
