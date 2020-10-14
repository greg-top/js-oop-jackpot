import { Statistics } from "./Statistics.js";
import { Wallet } from "./Wallet.js";
import { Draw } from "./Draw.js";
import { Result } from "./Result.js";

export class Game {
  //constructor properties connect to DOM elements and create Statistics and Wallet instances
  constructor(money) {
    //create Statistics and Wallet instances - once for entire session
    this.stats = new Statistics();
    this.wallet = new Wallet(money);

    //start game round
    document
      .getElementById("start")
      .addEventListener("click", this.startGame.bind(this)); //fix this connection (to point instance instead button
    //get DOM elements
    this.boards = [...document.querySelectorAll("div.color")];
    this.inputBid = document.getElementById("bid");
    this.spanWallet = document.querySelector("span.wallet");
    this.spanResult = document.querySelector(".score .result");
    this.spanGames = document.querySelector(".score .number");
    this.spanWins = document.querySelector(".score .win");
    this.spanLosses = document.querySelector(".score .loss");

    //render default game
    this.render();
  }

  //prototype methods

  //method shows all interactive game elements (board colors, bid, game stats)
  render(
    colors = ["#555", "#eee", "#555"],
    slots = ["slot-cherries", "slot-seven", "slot-bars"],
    money = this.wallet.getWalletValue(),
    result = "",
    stats = [0, 0, 0],
    bid = null,
    wonMoney = null
  ) {
    this.boards.forEach((board, index) => {
      board.style.backgroundColor = colors[index];
      board.classList = "color";
      board.classList.add(slots[index]);
    });
    this.spanWallet.textContent = money;
    if (result) result = `You won ${wonMoney}$`;
    else if (!result && result !== "") result = `You loss ${bid}$`;
    this.spanResult.textContent = result;
    this.spanGames.textContent = stats[0];
    this.spanWins.textContent = stats[1];
    this.spanLosses.textContent = stats[2];
  }

  //method execute all game mechanism (implementation of game) after clicking DRAW button and render game after each game round
  startGame() {
    //console.log("this: ", this); //potential issue with this connection (by default this connects to DRAW button). It was fixed by binding startGame method in line 16

    //check if bid >= 1 || bid = ""
    if (this.inputBid.value * 1 < 1 || !this.inputBid.value)
      return alert("Incorrect bid value");
    const bid = Math.floor(this.inputBid.value); //Math.floor changes string type to number (taken from bid input)

    //check user wallet value
    if (!this.wallet.checkCanPlay(bid))
      return alert("Not enought credit to start game");

    //deduct bid from wallet (before game round)
    this.wallet.changeWallet(bid, "-");

    //draw 3 colors -> create instance of Draw (each game round)
    this.draw = new Draw(); //dodajemy wlaściwość do klasy Game za pomocą metody w prototypie

    //save drawn colors from game round
    const colors = this.draw.getDrawResult(); //colors array is used to check condition of winning and to render board colors after game round

    //save drawn slots (colors match pictures)

    const slotPictures = this.draw.drawnSlotPictures(colors);
    console.log("drawn colors: ", colors);
    console.log("drawn slots: ", slotPictures);

    //check if user win
    const win = Result.checkIfWin(colors);

    //check won money (when loss wonMoney = 0)
    const wonMoney = Result.moneyWinInGame(win, bid);

    //update wallet after game round
    this.wallet.changeWallet(wonMoney, "+");

    //add stats from game round to general stats (all rounds stats)
    this.stats.addGameToStatistics(win, bid);

    //render game after round
    this.render(
      colors,
      slotPictures,
      this.wallet.getWalletValue(),
      win,
      this.stats.showGameStatistics(),
      bid,
      wonMoney
    );
  }
}
