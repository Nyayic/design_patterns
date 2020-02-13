/** @format */

const cartItem = require('./cartItem');

class LaptopAdapter extends cartItem {
  constructor(laptop, quantity) {
    super();
    this.laptop = laptop;
    this.quantity = quantity;
  }
  getDescription() {
    return this.laptop.getDescription()+" - ";
  }
  getUnitPrice() {
    return this.laptop.adjPrice();
  }
}

module.exports = LaptopAdapter;

//create bag adapter