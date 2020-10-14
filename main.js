// import { Wallet } from "./src/js-modules/Wallet.js";
// import { Statistics } from "./src/js-modules/Statistics.js";
// import { Draw } from "./src/js-modules/Draw.js";
// import { Result } from "./src/js-modules/Result.js";
// import { Result } from "./src/js-modules/Result.js"; => dla metod statycznych nie musimy importowac modulu
import { Game } from "./src/js-modules/Game.js";

//testy dla klasy Wallet

// const wallet = new Wallet(200);
// console.log("wartosc portfela: ", wallet.getWalletValue());
// console.log("Czy gracz ma srodki do nowej rundy: ", wallet.checkCanPlay(100));
// console.log(wallet.changeWallet(112, "+"));
// console.log("wartosc portfela: ", wallet.getWalletValue());

//testy dla klasy Statistics

// const stats = new Statistics();
// console.log("obiekt statistcs ", stats);
// console.log("Statystyki gier ", stats.showGameStatistics());
// console.log("Dodaj gre do statystyk ", stats.addGameToStatistics(true, 20));
// console.log("Dodaj gre do statystyk ", stats.addGameToStatistics(false, 10));
// console.log("Dodaj gre do statystyk ", stats.addGameToStatistics(true, 15));
// console.log("Statystyki gier ", stats.showGameStatistics());
// console.log(
//   "Statystyki gier (za pomoca wlasciwosci obiektu) ",
//   stats.gameResults
// );

//testy dla klasy Draw

// const draw = new Draw();
// console.log("obiekt draw:", draw);
// console.log("rezultat 1 rundy gry (wylosowane kolory)", draw.getDrawResult());

//testy dla klasy Result

// console.log(
//   "pieniadze wygrane w jednej rundzie gry: ",
//   Result.moneyWinInGame(true, 10)
// );
// console.log(
//   "pieniadze wygrane w jednej rundzie gry: ",
//   Result.moneyWinInGame(false, 20)
// );
// console.log(
//   "Czy uzytkownik wygral runde? ",
//   Result.checkIfWin(["red", "red", "red"])
// ); //true
// console.log(
//   "Czy uzytkownik wygral runde? ",
//   Result.checkIfWin(["red", "green", "red"])
// ); //false
// console.log(
//   "Czy uzytkownik wygral runde? ",
//   Result.checkIfWin(["green", "green", "blue"])
// ); //false
// console.log(
//   "Czy uzytkownik wygral runde? ",
//   Result.checkIfWin(["blue", "red", "green"])
// ); //true

//testy dla klasy Game

// const game = new Game(200);
// console.log("obiekt game", game);
// console.log(
//   "obiekt game, wlasciwosc stats",
//   game.stats.addGameToStatistics(true, 20)
// );
// console.log(
//   "obiekt game, wlasciwosc stats",
//   game.stats.addGameToStatistics(true, 14)
// );
// console.log(
//   "obiekt game, wlasciwosc stats",
//   game.stats.addGameToStatistics(false, 7)
// );
// console.log("obiekt game, wlasciwosc stats", game.stats.showGameStatistics());
// console.log("obiekt game, wlasciwosc wallet", game.wallet.getWalletValue());
// console.log("obiekt game, wlasciwosc wallet", game.wallet.checkCanPlay(170));
// console.log(
//   "obiekt game, wlasciwosc wallet",
//   game.wallet.changeWallet(30, "-")
// );
// console.log("obiekt game, wlasciwosc wallet", game.wallet.getWalletValue());

//Run the game
const game = new Game(200);
