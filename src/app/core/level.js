const LEVEL_WIDTH = 13;
const LEVEL_HEIGHT = 13;
const LEVEL_SIZE = LEVEL_WIDTH * LEVEL_HEIGHT;

class Level {
  #columns = [];

  render() {
    let columns = new Array(LEVEL_WIDTH).fill(null).map(column => {
      return new Array (LEVEL_HEIGHT).fill(null).map(()  => {
        return new LevelItem();
        });
    });
    // TODO: make a cleaner code. Chapter 8 will help
    debugger;
  }

  armBomb() {
    //TODO:
    // Place the bomb at the level
    // Detonate the bomb
    // Destroy the SOFT_WALLs around it
  }  
  
  canMove() {}


  destroy(){}
}