(() => {
  let myNull: null | number;

  function hiv2(name: string | null) {
    let hello = "hola ";
    hello += name?.toLocaleLowerCase() || "nobody"; // uso el ?
    console.log(hello);
  }

  hiv2(null);
  hiv2("Nicolas");
})();
