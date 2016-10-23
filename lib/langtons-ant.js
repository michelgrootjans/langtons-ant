var Ant = function(plane){
  var direction = plane.originalDirection();
  var position = plane.originalPosition();

  function move() {
    flipCurrentSquare();
    moveForward();
    currentSquareIs('white') ? rotateRight() : rotateLeft()
  }

  function flipCurrentSquare() {
    plane.flipColorAt(position);
  }

  function moveForward() {
    position = plane.nextPosition(position, direction);
  }

  function currentSquareIs(color) {
    return plane.colorAt(position) == color;
  }

  function rotateRight() { direction++; }
  function rotateLeft() { direction--; }
  function getDirection() { return plane.formatDirection(direction); }

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

  function originalPosition() { return {x: 0, y: 0}; }
  function originalDirection() { return 0; }
  function compass() { return ['north', 'east', 'south', 'west']}
  function nextPosition(position, direction) {
    var compass_movements = [
      {x:  0, y:  1},
      {x:  1, y:  0},
      {x:  0, y: -1},
      {x: -1, y:  0}
    ]
    var diff = compass_movements[direction];
    return {x: position.x + diff.x, y: position.y + diff.y};
  }

  function formatDirection(direction) {
    return compass()[direction];
  }

  return {
    flipColorAt: flipColorAt,
    colorAt: colorAt,
    originalPosition: originalPosition,
    originalDirection: originalDirection,
    compass: compass,
    nextPosition: nextPosition,
    formatDirection: formatDirection
  }
};
