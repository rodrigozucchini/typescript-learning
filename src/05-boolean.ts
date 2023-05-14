(() => {
  let isEnable:boolean = true;

  const random = Math.random();
  console.log("random", random);

  isEnable = random >= 0.5 ? true : false;
  console.log("isEnable", isEnable);
})();
