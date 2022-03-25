// Return result and info
function t1() {
  var rs = /d(b+)d/g.exec("cdbbdbsbz");
  console.log(rs);//[ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ]
}

// Replace match item
function t2() {
  var rs = "John Smith".replace(/(\w+)\s(\w+)/, "$2, $1");
  console.log(rs);// "Smith, John"
}

// Search match item
function t3() {
  var rs = "fee fi fo fum".match(/\w+\s/g);
  console.log(rs);// ["fee ", "fi ", "fo "]
}

t3();
