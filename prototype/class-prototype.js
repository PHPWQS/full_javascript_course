class Point { 
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(value) {
    this.x = value.x;
    this.y = value.y;
  }
}

const point = new Point(12.1221, 22.112);

console.log(point.__proto__ === Point.prototype);
console.log(point.__proto__.__proto__ === Object.prototype);
console.log(point.__proto__.constructor === Point);
console.log(point.__proto__.constructor.__proto__ === Function.prototype);