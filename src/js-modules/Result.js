// class Result has 2 static methods and will not create instances
export class Result {
  //money won in each game round
  static moneyWinInGame(result, bid) {
    if (result) return bid * 3;
    //condition for wallet value change
    else return 0;
  }

  //game rules: 3 different colors or 3 the same colors win
  static checkIfWin(draw) {
    if (draw[0] == draw[1] && draw[1] == draw[2]) return true;
    else if (draw[0] != draw[1] && draw[1] != draw[2] && draw[0] != draw[2])
      return true;
    else return false;
  }
}
