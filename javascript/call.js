( function(){console.log(this)} ).call( {name: 'tom'} );
( function(arg){console.log(arg)} ).call( {name: 'tom'}, 'hi' );
