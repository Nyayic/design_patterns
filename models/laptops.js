class Laptops {
    constructor(pcSize, pcRam, pcSpeed, pcScreen, pcBattery, pcModel,pcManufacturer, pcPrice) {
      this.pcSize = pcSize
      this.pcRam = pcRam;
      this.pcSpeed = pcSpeed;
      this.pcScreen = pcScreen;
      this.pcBattery = pcBattery;
      this.pcgModel = pcModel;
      this.pcManufacturer = pcManufacturer;
      this.pcPrice = pcPrice;
    }
  }

const laptop = new Laptops();
  laptop.pcSize = 'Large'
  laptop.pcRam = '8GB'

console.log(laptop.pcSize, laptop.pcRam)
