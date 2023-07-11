class Circle {
    constructor(color) {
      this.color = color;
    }
  
    draw() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Triangle {
    constructor(color) {
      this.color = color;
    }
  
    draw() {
      return `<polygon points="150,20 280,180 20,180" fill="${this.color}" />`;
    }
  }
  
  class Square {
    constructor(color) {
      this.color = color;
    }
  
    draw() {
      return `<rect x="50" y="50" width="200" height="100" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  