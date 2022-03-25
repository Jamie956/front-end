(function(){console.log(this)}).apply({name: 'tom'});//this -> {name: 'tom'}
(function(arg){console.log(arg)}).apply({name: 'tom'}, ['info']);



