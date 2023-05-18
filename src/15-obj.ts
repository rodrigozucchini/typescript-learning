(()=>{
    type Sizes = "M" | "S" | "L" | "XL";
    type Product = {
      title: string,
      price: number,
      size?: Sizes
    };

    const products: Product[] = [];

    const addProduct = (data: Product) => {
      products.push(data)
    }

    addProduct({
      title: "Cacao",
      price: 552,
      size: "L"
    })
    console.log(products);
})();
