var Ant = function(plane){
  var movements = {
    'north': function(position) { return {x: position.x,   y: position.y+1}},
    'east':  function(position) { return {x: position.x+1, y: position.y  }},
    'south': function(position) { return {x: position.x,   y: position.y-1}},
    'west':  function(position) { return {x: position.x-1, y: position.y  }}
  }
  var compass = Object.keys(movements);
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
    position = movements[getDirection()](position);
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
