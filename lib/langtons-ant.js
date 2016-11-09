var Ant = function(plane, strategy, originalPosition){
  var direction = strategy.originalDirection();
  var position = originalPosition || strategy.originalPosition();

  function move() {
    flipCurrentSquare();
    moveForward();
    currentSquareIs('white') ? rotateRight() : rotateLeft()
  }

  function flipCurrentSquare() {
    plane.flipColorAt(position);
  }

  function moveForward() {
    position = strategy.nextPosition(position, direction);
  }

  function currentSquareIs(color) {
    return plane.colorAt(position) == color;
  }

  function rotateRight() { direction = (direction+1)%4; }
  function rotateLeft() { direction = (direction+4-1)%4; }
  function getDirection() { return strategy.formatDirection(direction); }

  return {
    position: function() { return position; },
    direction: getDirection,
    move: move
  }
};

var XYStrategy = function() {
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

  function areSame(position1, position2) {
    return position1.x == position2.x && position1.y == position2.y;
  }

  function originalPosition() {
    return {x: 0, y: 0};
  }

  function originalDirection() {
    return 0;
  }

  function formatDirection(direction) {
    return compass()[direction];
  }

  return {
    nextPosition: nextPosition,
    areSame: areSame,
    originalPosition: originalPosition,
    originalDirection: originalDirection,
    formatDirection: formatDirection
  }
}

var Plane = function(strategy, canvas) {
  var blackSquares = [];
  function flipColorAt(position) {
    if(colorAt(position) == 'white') {
      canvas.colorBlack(position);
      blackSquares.push(position);
    } else {
      canvas.colorWhite(position);
      for (var i = 0; i < blackSquares.length; i++) {
        var square = blackSquares[i];
        if(strategy.areSame(square, position)) blackSquares.splice(i, 1);
      }
    }
  }

  function colorAt(position) {
    for (var i = 0; i < blackSquares.length; i++) {
      var square = blackSquares[i];
      if(strategy.areSame(square, position)) return 'black';
    }
    return 'white';
  }

  return {
    flipColorAt: flipColorAt,
    colorAt: colorAt
  }
};
