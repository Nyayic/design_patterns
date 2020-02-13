/** @format */

class Cartitem {
    constructor(description, quantity, unitPrice) {
      this.description = description;
      this.quantity = quantity;
      this.unitPrice = unitPrice;
    }
  
    total() {
      return this.quantity * this.getUnitPrice();
    }
    printableString() {
      return `${this.getDescription()} ${
        this.quantity
      } ${this.getUnitPrice()} ${this.total()}`;
    }
    getUnitPrice() {
      return this.unitPrice;
    }
    getDescription() {
      return this.description;
    }
  }
  
  module.exports = Cartitem;