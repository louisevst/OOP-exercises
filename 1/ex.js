/* A basket contains the following things:

- Banana's (6 pieces, costing €1 each)
- Apples (3 pieces, costing €1.5 each)
- Bottles of wine (2 bottles, costing €10 each)

**Without** using classes, do the following in your code:

- Calculate the total price
- Calculate how much of the total price is tax (fruit goes at 6%, wine is 21%)

Next, do the same **with** classes.
What style do you prefer? Do you notice any difference in time needed to code, structure or readability?
From now on, if nothing is stated specifically, it's recommended to use classes.*/
const banana = { price: 1, tax: 0.06 };
const apple = { price: 1.5, tax: 0.06 };
const wine = { price: 10, tax: 0.21 };
const basket = { banana: 6, apple: 3, wine: 2 };

function total() {
  return (
    basket.banana * banana.price +
    basket.apple * apple.price +
    basket.wine * wine.price
  );
}
const totalPrice = total();
console.log(totalPrice);
function calcTax() {
  const tax =
    (basket.banana * banana.price) / (1 + banana.tax) +
    (basket.apple * apple.price) / (1 + apple.tax) +
    (basket.wine * wine.price) / (1 + wine.tax);
  return tax.toFixed(2);
}
console.log(calcTax());
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
}
const apple$ = new groceries("apple", 3, 1.5, 0.06);
const banana$ = new groceries("banana", 6, 1, 0.06);
const wine$ = new groceries("wine", 2, 10, 0.21);

console.log(apple$.totalPrice() + banana$.totalPrice() + wine$.totalPrice());
console.log(
  (apple$.priceWthTax() + banana$.priceWthTax() + wine$.priceWthTax()).toFixed(
    2
  )
);
