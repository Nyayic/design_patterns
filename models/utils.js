class Laptop {
    constructor(laptopSize, laptopRam, cpuSpeed, batteryLife, screenSize, model, manufacturer, price){
        this.hddSize = laptopSize,
        this.laptopRam = laptopRam,
        this.cpuSpeed = cpuSpeed,
        this,batteryLife = batteryLife,
        this.screenSize = screenSize,
        this.model = model,
        this.manufacturer = manufacturer,
        this.price = price
    }
    toString(){
        return `Laptop proprtities are ${this}`
    }
}
let chrisPC = new Laptop()
console.log(myPC.toString())