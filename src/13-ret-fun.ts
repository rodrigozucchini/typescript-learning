(()=>{

  type Sizes = "M" | "S" | "L" | "XL";

  const createPrice = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total;
  }

  const rta = createPrice([1,2,3,5,6,4,8])
  console.log(rta)
})();
