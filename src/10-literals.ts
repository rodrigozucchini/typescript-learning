(() => {
  type UserID =  string | number;
  let userId: UserID;

  //Literal types
  type Sizes = "M" | "S" | "L" | "XL";
  let shirtSize: Sizes;

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === "string") {
      console.log(`string ${userId}`);
    }
  }

  greeting(1235, "S");

})();
