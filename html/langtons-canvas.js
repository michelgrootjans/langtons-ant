var canvas = function(){
  var canvas = document.getElementById('tutorial');
  var ctx = canvas.getContext('2d');
  var cellSize = 8;

  function drawRectangle(ctx, position, cellSize) {
    ctx.fillRect (cellSize*position.x, cellSize*position.y, cellSize, cellSize);
  }

  function setPenToBlack(ctx) {
    ctx.fillStyle = "rgb(50,50,50)";
  }

  function setPenToWhite(ctx) {
    ctx.fillStyle = "rgb(200,200,200)";
  }

  return {
    colorBlack: function(position) {
      setPenToBlack(ctx);
      drawRectangle(ctx, position, cellSize);
    },

    colorWhite: function(position) {
      setPenToWhite(ctx);
      drawRectangle(ctx, position, cellSize);
    }
  }
}();

var strategy = new XYStrategy();
var plane = new Plane(strategy, canvas);
var ant = new Ant(plane, strategy, {x: 50, y: 100});

for (var i = 0; i < 14000; i++) {
  setTimeout(function() {
    ant.move();
  });
}
