/*Consider the same basket as in use case 1. 
The shop owner wants to have a way to have 50% off every fruit. Can you find a way to implement the discount once, 
and re-use it efficiently for every fruit?
*/
const discount = 0.5;
class groceries {
  constructor(name, quantity, price, tax) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.tax = tax;
  }
  totalPrice() {
    return this.quantity * this.price;
  }
  priceWthTax() {
    return this.totalPrice() / (1 + this.tax);
  }
  discountedPrice() {
    return this.totalPrice() * discount;
  }
}
const apple$ = new groceries("apple", 3, 1.5, 0.06);
const banana$ = new groceries("banana", 6, 1, 0.06);
const wine$ = new groceries("wine", 2, 10, 0.21);

console.log(
  apple$.discountedPrice(),
  banana$.discountedPrice(),
  wine$.discountedPrice()
);
