function t1() {
  //do...while statement
  var i = 0;
  do {
    i += 1;
    console.log(i);
  } while (i < 5);
  //1 2 3 4 5
}

function t2() {
  //while statement
  var i = 0;
  while (i < 5) {
    i++;
    console.log(i);
  }
  //1 2 3 4 5
}

function t3() {
  //break statement
  var i = 0;
  while (i < 5) {
    i++;
    if (i == 3) {
      break;
    }
    console.log(i);
  }
  //1 2
}

function t4() {
  //continue statement
  var i = 0;
  while (i < 5) {
    i++;
    if (i == 3) {
      continue;
    }
    console.log(i);
  }
  //1 2 4 5
}

function t5() {
  //for...in statement
  for (var i in [3, 5, 7]) {
    console.log(i);
  }
  //0 1 2
}

function t6() {
  //for...of statement
  for (var i of [3, 5, 7]) {
    console.log(i);
  }
  //3 5 7
}

t6();
