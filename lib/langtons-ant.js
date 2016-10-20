var ant = 42;

class Grid{
  constructor(initialPosition) {
    this.initialPosition = initialPosition;
    this.lastColor = 'white';
    this.direction = 0;
    this.colors = {};

    this.directions = [
      'north',
      'east',
      'south',
      'west'
    ];


  }

  positionOfAnt() {
    return this.initialPosition;
  }

  colorAt(position) {
    return this.colors[this.keyAt(position)] ? this.colors[this.keyAt(position)] : 'white';
  }

  keyAt(position) {
    return `${position.x}-${position.y}`;
  }

  tick(){
    const currentColor = this.colorAt(this.positionOfAnt());
    if (currentColor == 'black') {
        this.direction--;
        delete this.colors[this.keyAt(this.positionOfAnt())];
    } else {
      this.direction++;
      this.colors[this.keyAt(this.positionOfAnt())] = 'black';
    }

    switch(this.directionOfAnt()){
        case 'north':
          this.initialPosition.y--;
          break;
        case 'east':
          this.initialPosition.x++;
        break;
        case 'south':
          this.initialPosition.y++;
        break;
        case 'west':
          this.initialPosition.x--;
        break;
    }
  }

  directionOfAnt(){
    return this.directions[this.direction % 4];
  }

  getBoard() {
    return (
`wwwwwwwwww
wwwwwwwwww
wwwwwwwwww
wwwwwwwwww
wwww[n,w]wwwww
wwwwwwwwww
wwwwwwwwww
wwwwwwwwww
wwwwwwwwww
wwwwwwwwww`
  )}
};
