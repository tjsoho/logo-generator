const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  test('should generate the correct SVG code for a circle', () => {
    const circle = new Circle('#FF0000');
    const expectedSVG = '<circle cx="150" cy="100" r="50" fill="#FF0000" />';
    expect(circle.draw()).toBe(expectedSVG);
  });
});

describe('Triangle', () => {
  test('should generate the correct SVG code for a triangle', () => {
    const triangle = new Triangle('#00FF00');
    const expectedSVG = '<polygon points="150,20 280,180 20,180" fill="#00FF00" />';
    expect(triangle.draw()).toBe(expectedSVG);
  });
});

describe('Square', () => {
  test('should generate the correct SVG code for a square', () => {
    const square = new Square('#0000FF');
    const expectedSVG = '<rect x="50" y="50" width="200" height="100" fill="#0000FF" />';
    expect(square.draw()).toBe(expectedSVG);
  });
});
