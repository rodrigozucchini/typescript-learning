import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: "cacao",
  price: 12,
  stock: 12,
  size: 'S'
});

addProduct({
  title: "sopa",
  price: 125,
  stock: 125,
  size: 'S'
});

console.log(products);
const total = calcStock();
console.log(total);
