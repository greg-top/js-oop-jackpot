//class Wallet will create one instance for entire session
export class Wallet {
  constructor(money) {
    let _money = money; //private property, I used closures to have access to it

    //constructor methods -> I need to be in the constructor method scope to have access to private property _money
    this.getWalletValue = () => _money; //pobieranie aktualnej zawartosci portfela

    //Check if user can play
    this.checkCanPlay = (value) => {
      if (_money >= value) return true;

      return false;
    };

    //Change wallet value
    // TODO: add try catch block
    this.changeWallet = (value, type = "+") => {
      if (typeof value !== "number" || isNaN(value)) {
        alert(
          `Incorrect type of bid (not numerical). Type of given bid was ${typeof value}`
        );
        throw new Error("Incorrect type of bid (not numerical)");
      } else {
        switch (type) {
          case "+":
            console.log(`Add ${value}$ to wallet`);
            return (_money += value);
          case "-":
            console.log(`Deduct ${value}$ from wallet`);
            return (_money -= value);
          default:
            alert("Wallet - wrong type of operation (not '-' or '+')");
            throw new Error(
              "Wallet - wrong type of operation (not '-' or '+')"
            );
        }
      }
    };
  }
}
