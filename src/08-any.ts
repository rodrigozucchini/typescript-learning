(() => {
  let myDynamicVar: any; // cualquier cosa de valor
  myDynamicVar = 100;
  myDynamicVar = null;

  myDynamicVar = "Hola";
  const rta = (myDynamicVar as string).toLocaleLowerCase(); // casteo
  console.log(rta);

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed(); // casteo
  console.log(rta2);
})();
