const greetting = ( function(){console.log(this.name);} ).bind( {name: 'tom'} );
greetting();