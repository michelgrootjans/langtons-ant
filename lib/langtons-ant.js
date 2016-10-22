var Ant = function(plane){
  this.position = {x: 0, y: 0}
  this.direction = 'north';

  function move() {
    plane.flipColorAt(this.position);
    this.position = nextPosition(this.position, this.direction);
    this.direction = nextDirection(plane.colorAt(this.position), this.direction);
  }

  function nextPosition(position, direction) {
    switch (direction) {
      case 'north': return {x: position.x,   y: position.y+1};
      case 'east':  return {x: position.x+1, y: position.y};
      case 'south': return {x: position.x  , y: position.y-1};
      case 'west':  return {x: position.x-1, y: position.y};
      default: return position
    }
  }

  function nextDirection(color, direction) {
    switch (direction) {
      case 'north': return color == 'white' ? 'east'  : 'west';
      case 'east':  return color == 'white' ? 'south' : 'north';
      case 'south': return color == 'white' ? 'west'  : 'east';
      case 'west':  return color == 'white' ? 'north' : 'south';
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
