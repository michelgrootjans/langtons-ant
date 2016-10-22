var Ant = function(plane){
  this.position = {x: 0, y: 0}
  this.direction = 'north';

  function move() {
    plane.flipColorAt(this.position);
    this.position = nextPosition(this.position, this.direction);
    this.direction = nextDirection(this.direction);
  }

  function nextPosition(position, direction) {
    switch (direction) {
      case 'north': return {x: position.x,    y: position.y + 1};
      case 'east':  return {x: position.x +1, y: position.y};
      default: return position
    }
  }

  function nextDirection(direction) {
    switch (direction) {
      case 'north': return 'east';
      case 'east':  return 'south';
      default: return direction;
    }
  }

  return {
    position: this.position,
    direction: this.direction,
    move: move
  }
};

var Plane = function() {
  var blackSquares = [];
  function flipColorAt(position) {
    blackSquares.push(position);
  }

  function colorAt(position) {
    for (var i = 0; i < blackSquares.length; i++) {
      var square = blackSquares[i];
      if(square.x == position.x && square.y == position.y) return 'black';
    }
    return 'white';
  }

  return {
    flipColorAt: flipColorAt,
    colorAt: colorAt
  }
};
