function t1() {
  class Greeting {
    constructor(word) {
      this.word = word;
    }
    say() {
      console.log(this.word);
    }
  }
  var greet = new Greeting("hi");
  greet.say();
}

function t2() {
  class Greeting {
    constructor() {
      this.say = this.say.bind(this);
    }
    say() {
      console.log(this);
    }
  }
  const greet = new Greeting();
  var say = greet.say;
  say();// this is current this if no bind
}

function t3() {
  class Father {
    constructor(x) {
      this.x = x;
    }
  }
  class Son extends Father {
    constructor(x, y) {
      super(x);
      this.y = y;
    }
    say(){
      console.log(this);
    }
  }
  const son = new Son(1, 2);
  son.say();
}

t3();
