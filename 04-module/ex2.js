var Person = function (name) {
    this.name = name;
}
Person.prototype.redo = function (content) {
    console.log(this.name + ' redo ' + content)
}
Person.prototype.todo = function (content) {
    console.log(this.name + ' todo ' + content)
}
module.exports = Person;