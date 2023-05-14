(() => {
  let prices:(number)[] = [1,2,3,4,5,6];// puedo ingresar de que tipo es el array, puedo poner varios
  prices.push(12,13,52)
  console.log(prices);

  const otroString:(string| boolean)[] = ["hola", true]; // ojo con poner object
  console.log(otroString);

  let otrosPrices:(number)[] = prices.map(i => i * 2);
  console.log(otrosPrices);
})();
