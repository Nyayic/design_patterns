/** @format */

class Cart {
    constructor(name, address, paymentMethod, status) {
      this.name = name;
      this.address = address;
      this.paymentMethod = paymentMethod;
      this.status = status;
      this.items = [];
    }
    addcartItem(item) {
      this.items.push(item);
    }
    printableString() {
      return this.items.map(item => item.printableString()).join('\n');
    }
  
  }
  
  module.exports = Cart;