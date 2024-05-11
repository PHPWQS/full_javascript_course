function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

Person.prototype.getName = function() {
  return `${this.name} ${this.lastname}`;
}


const info = new Person("Mesrop", "Arakelyan");
const student = {
  university: "NPUA"
};
Object.setPrototypeOf(student, info);

console.log(student.getName());

console.log(student.__proto__ === info);
console.log(info.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Person.__proto__ === Function.prototype); // true
console.log(Person.prototype.constructor === Person ); // true
console.log(Person.prototype.constructor.__proto__ === Function.prototype); // true

// console.log(info.getName());