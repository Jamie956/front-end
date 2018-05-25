class Dog {
    constructor(name) {
        this.name = name;
    }
    eat(content) {
        console.log(this.name + ' eat ' + content)

    }
    play(content) {
        console.log(this.name + ' play ' + content)

    }
}
module.exports = Dog;