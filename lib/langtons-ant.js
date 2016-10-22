var Ant = function(plane){
  var compass_movements = {
    'north': {x:  0, y:  1},
    'east':  {x:  1, y:  0},
    'south': {x:  0, y: -1},
    'west':  {x: -1, y:  0}
  }
  var compass = Object.keys(compass_movements);
  var movements = Object.values(compass_movements);
  var direction = 0;
  var position = {x: 0, y: 0}

  function move() {
    flipCurrentSquare();
    moveForward();
    currentSquareIs('white') ? rotateRight() : rotateLeft()
  }

  function flipCurrentSquare() {
    plane.flipColorAt(position);
  }

  function moveForward() {
    movement = movements[direction]
    position = {x: position.x + movement.x, y: position.y + movement.y};
  }

  function currentSquareIs(color) {
    return plane.colorAt(position) == color;
  }

  function rotateRight() { direction++; }
  function rotateLeft() { direction--; }
  function getDirection() { return compass[direction%4]; }

  return {
    position: function() { return position; },
    direction: getDirection,
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
