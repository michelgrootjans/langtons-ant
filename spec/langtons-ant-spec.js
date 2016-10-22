describe("Langton's ant", function(){
  var ant, plane = null;
  beforeEach(function() {
    plane = new Plane();
    ant = new Ant(plane);
  });

  describe('initially', function() {
    it('starts at (0,0)', function(){
      expect(ant.position).toEqual({x: 0, y: 0});
    });
    it('starts facing north', function(){
      expect(ant.direction).toEqual('north');
    });
    it('starts in a white plane', function() {
      expect(plane.colorAt({x: 0, y: 0})).toEqual('white');
      expect(plane.colorAt({x: 0, y: 1})).toEqual('white');
    });
  });

  describe('after one move', function() {
    beforeEach(function() {
      ant.move();
    });
    it('moved to (0,1)', function(){
      expect(ant.position).toEqual({x: 0, y: 1});
    });
    it('faces east', function(){
      expect(ant.direction).toEqual('east');
    });
    it('leaves a black square', function() {
      expect(plane.colorAt({x: 0, y: 0})).toEqual('black');
      expect(plane.colorAt({x: 0, y: 1})).toEqual('white');
    });
  });
});
