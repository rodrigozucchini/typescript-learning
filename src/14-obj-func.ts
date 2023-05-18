(()=>{
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }
  login({
    email: "rodrigo@rodrigo.com",
    password: 123546
    });

    type Sizes = "M" | "S" | "L" | "XL";

    const products: any[] = [];

    const addProduct = (data: {
      title: string,
      price: number,
      size?: Sizes
    }) => {
    products.push(data)
    }

    addProduct({
      title: "Cacao",
      price: 552,
      size: "L"
    })
    console.log(products);
})();
