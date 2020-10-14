//class Statistics will create one instance for entire session
export class Statistics {
  constructor() {
    this.gameResults = []; //all statistics will be kept in array

    //How gameResults array should look
    // this.gameResults = [
    //   { win: true, bid: 2 },
    //   { win: false, bid: -10 },
    //   { win: true, bid: 20 },
    // ];
  }

  //prototype methods

  //add one game round stats to gameResults
  //TODO: Add more statistics to gameResults and create modal with all round stats (use accordion in modal to separate game rounds)
  addGameToStatistics(win, bid) {
    //faster syntax,
    let gameResult = {
      win,
      bid,
    };

    //below code will create the same gameResult object as above
    // let gameResult = {
    //   win: win,
    //   bid: bid,
    // };

    this.gameResults.push(gameResult);
    return gameResult; //TODO: just for tests - remove from distribution version
  }

  //show game statistics (return array -> [games, wins, losses])
  //TODO: Add more statistics to gameResults and create modal with all round stats (use accordion in modal to separate game rounds)
  showGameStatistics() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter((result) => result.win).length;
    // let losses = this.gameResults.filter((result) => !result.win).length; //additional way to calculate losses
    let losses = games - wins; //faster way to calculate losses

    return [games, wins, losses];
  }
}
