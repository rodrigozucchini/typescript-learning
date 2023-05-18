export type Sizes = "M" | "S" | "L" | "XL";
export type Product = {
  title: string,
  price: number,
  stock: number
  size?: Sizes
};
