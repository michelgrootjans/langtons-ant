var canvas = function(){
  var canvas = document.getElementById('tutorial');
  var ctx = canvas.getContext('2d');
  return {
    colorBlack: function(position) {
      ctx.fillStyle = "rgb(200,0,0)";
      ctx.fillRect (10*position.x, 10*position.y, 10, 10);
    },
    colorWhite: function(position) {
      ctx.fillStyle = "rgb(255,255,255)";
      ctx.fillRect (10*position.x, 10*position.y, 10, 10);
    }
  }
}();

var strategy = new XYStrategy();
var plane = new Plane(strategy, canvas);
var ant = new Ant(plane, strategy, {x: 40, y: 50});

for (var i = 0; i < 14000; i++) {
  setTimeout(function() {
    ant.move();
  });
}
