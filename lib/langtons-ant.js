var Ant = function(){
  return {
    position: {x: 0, y: 0},
    direction: 'north'
  }
};

var Plane = function() {
  return {
    colorAt: function(position) {
      return 'white';
    }
  }
};
