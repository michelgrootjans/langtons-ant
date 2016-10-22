describe("Langton's ant", function(){
  var ant = null;
  beforeEach(function() {
    ant = new Ant();
    plane = new Plane();
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
    });
  });
});
