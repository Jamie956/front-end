class Animal {
    constructor(name) {
        this.name = name
    }
    eat(content) {
        console.log(this.name + ' eat ' + content)
    }
}

class Deer extends Animal {
    constructor(name) {
        super(name)
        this.name = name
    }
    play(content) {
        console.log(this.name + ' play ' + content)

    }
}
module.exports = Deer