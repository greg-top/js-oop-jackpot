//class Draw will create new instance for each game round (when user will click Draw button)
export class Draw {
  constructor() {
    //TODO: extend game, check the Slots games rules. Add pictures to boards instead colors and add animation for each round of game & show game round at the start of each one.
    this.options = ["red", "green", "blue"]; //available slots colors
    this.slots = ["slot-cherries", "slot-seven", "slot-bars"]; //available slot pictures. Color matches pictures (red - cherries, green - seven, blue - bars)
    //possible draw results
    //let _result = ["green", "green", "blue"]; //loss
    //let _result = ["red", "red", "red"]; //win
    //let _result = ["red", "green", "blue"]; //win
    let _result = this.drawResult(); //private property for each round result

    //constructor methods -> I need to be in the constructor method scope to have access to private property _result

    //get draw result (method implemented in prototype)
    this.getDrawResult = () => _result;
  }

  //prototype methods
  //draw 3 colors in each game round -> return colors to private property _result
  drawResult() {
    let colors = [];
    //draw 3 colors from red, green, blue
    for (let i = 0; i < this.options.length; i++) {
      const index = Math.floor(Math.random() * this.options.length);
      const color = this.options[index];
      colors.push(color);
    }

    return colors;
  }

  //match slot pictures from drawn colors
  drawnSlotPictures(colors) {
    let slotPictures = [];
    let drawnColors = this.getDrawResult();

    for (let i = 0; i < this.options.length; i++) {
      let slotPicture = null;
      if (drawnColors[i] === "red") slotPicture = this.slots[0];
      else if (drawnColors[i] === "green") slotPicture = this.slots[1];
      else slotPicture = this.slots[2];

      slotPictures.push(slotPicture);
    }
    // console.log("slot colors: ", drawnColors);
    // console.log("slot pictures: ", slotPictures);

    return slotPictures;
  }
}
