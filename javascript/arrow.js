this.name = 'global';
const obj1 = {
  //this -> 调用方
  arrowFunc: () => { console.log(this) },
  //this -> 向上寻找
  normalFunc: function () { console.log(this) }
}

obj1.arrowFunc() // function this -> current this
obj1.normalFunc() // this -> obj1


const obj2 = {
  arrowFunc: function () {
    setTimeout(() => { 
        console.log(this) 
    }, 0)
  },
  normalFunc: function () {
    setTimeout(function () { 
        console.log(this) 
    }, 0)
  }
}

obj2.arrowFunc() // this -> obj2
obj2.normalFunc() //