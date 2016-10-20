describe("Langton's ant", function(){
  it('works', function(){
    expect(ant).toBe(42);
  });

  it ('has a grid', function (){
    var grid = new Grid({x: 2, y: 3});
    expect(grid.positionOfAnt()).toEqual({x: 2, y: 3});
    expect(grid.directionOfAnt()).toEqual('north');
  });

  it ('can ask the color of the grid', () => {
    var grid = new Grid({x: 2, y: 3});
    expect(grid.colorAt({x: 1, y: 1})).toEqual('white');
  });

  it ('first tick', () => {
    var grid = new Grid({x: 2, y: 3});
    grid.tick();
    expect(grid.colorAt({x: 2, y: 3})).toEqual('black');
    expect(grid.positionOfAnt()).toEqual({x: 3, y: 3});
    expect(grid.directionOfAnt()).toEqual('east');
  });

  it('two ticks', () => {
    var grid = new Grid({x: 2, y: 3});
    grid.tick();
    grid.tick();
    expect(grid.colorAt({x: 2, y: 3})).toEqual('black');
    expect(grid.colorAt({x: 3, y: 3})).toEqual('black');
    expect(grid.positionOfAnt()).toEqual({x: 3, y: 4});
    expect(grid.directionOfAnt()).toEqual('south');
  });

  it('three ticks', () => {
    var grid = new Grid({x: 2, y: 3});
    grid.tick();
    grid.tick();
    grid.tick();
    expect(grid.colorAt({x: 2, y: 3})).toEqual('black');
    expect(grid.colorAt({x: 3, y: 3})).toEqual('black');
    expect(grid.colorAt({x: 3, y: 4})).toEqual('black');
    expect(grid.positionOfAnt()).toEqual({x: 2, y: 4});
    expect(grid.directionOfAnt()).toEqual('west');
  });

  it('four ticks', () => {
    var grid = new Grid({x: 2, y: 3});
    grid.tick();
    grid.tick();
    grid.tick();
    grid.tick();
    expect(grid.colorAt({x: 2, y: 3})).toEqual('black');
    expect(grid.colorAt({x: 3, y: 3})).toEqual('black');
    expect(grid.colorAt({x: 3, y: 4})).toEqual('black');
    expect(grid.colorAt({x: 2, y: 4})).toEqual('black');
    expect(grid.positionOfAnt()).toEqual({x: 2, y: 3});
    expect(grid.directionOfAnt()).toEqual('north');
  });

  it('five ticks', () => {
    var grid = new Grid({x: 2, y: 3});
    grid.tick();
    grid.tick();
    grid.tick();
    grid.tick();
    grid.tick();
    expect(grid.colorAt({x: 3, y: 3})).toEqual('black');
    expect(grid.colorAt({x: 3, y: 4})).toEqual('black');
    expect(grid.colorAt({x: 2, y: 4})).toEqual('black');
    expect(grid.colorAt({x: 2, y: 3})).toEqual('white');
    expect(grid.positionOfAnt()).toEqual({x: 1, y: 3});
    expect(grid.directionOfAnt()).toEqual('west');
  });

  it ('visual grid matches', () => {
    var grid = new Grid({x: 2, y: 3});
    expect(grid.getBoard())
    .toEqual(
`wwwwwwwwww
wwwwwwwwww
wwwwwwwwww
wwwwwwwwww
wwww[n,w]wwwww
wwwwwwwwww
wwwwwwwwww
wwwwwwwwww
wwwwwwwwww
wwwwwwwwww`);
  });
});
