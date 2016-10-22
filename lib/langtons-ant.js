var Ant = function(plane){
  this.position = {x: 0, y: 0}
  this.direction = 'north';

  function move() {
    plane.flipColorAt(this.position);
    this.position = {x: 0, y: 1};
    this.direction = 'east';
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
