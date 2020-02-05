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

  printString() {
    return `Laptop Properties : \n 
    HDD Size : ${this.pcSize} \n 
    RAM : ${this.pcRam} \n 
    CPU Speed : ${this.pcSpeed} \n 
    Sreen Size : ${this.pcScreen} \n
    Battery Life : ${this.pcBattery}\n
    Model : ${this.pcModel} \n
    Manufaturer : ${this.pcManufacturer}\n
    Price : ${this.pcPrice}`;
  }
}

// const laptop = new Laptops();
//   laptop.pcSize = 'Large \n'; 
//   laptop.pcRam = '8GB \n';

// console.log(laptop.pcSize, laptop.pcRam)
