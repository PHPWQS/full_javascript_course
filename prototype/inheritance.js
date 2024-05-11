function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
}

function Programmer(name, lastname, lang) {
  Person.call(this, name, lastname);
  this.lang = lang;
}

Programmer.help = function () {
  return "Programmer is person who makes your live easy.";
}

Programmer.prototype.info = function() {
  return `${this.name} ${this.lastname} ${this.lang}`;
}

Object.setPrototypeOf(Programmer.prototype, Person.prototype);

const prog = new Programmer("Mesrop", "Arakelyan", "javascript");
console.log(prog.info());

console.log(prog.__proto__.constructor.help());
console.log(Programmer.help());