function timer(name, time) {
  console.log("goto: " + name);
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(name + " resolve");
      resolve(name);
    }, time);
  });
}

function t1() {
  console.log("start");
  let rs = timer("myTimer", 2000);
  console.log('return: ' + rs);
}

// only async
async function t2() {
  console.log("start");
  let rs = timer("myTimer", 2000);
  console.log('return: ' + rs);

}

// async await
async function t2a() {
  console.log("start");
  let rs = await timer("myTimer", 2000);
  console.log('return: ' + rs);

}

// async & await function
async function t3() {
  console.log("start");
  let rs = await timer("timerA", 1000);
  let rs1 = await timer("timerB", 2000);
  console.log('return: ' + rs);
  console.log('return: ' + rs1);

  /*
  start
  goto: timerA
  timerA resolve
  goto: timerB
  timerB resolve
  return: timerA
  return: timerB
  */
}

// async & await value
async function t4() {
  console.log("start");
  let rs = timer("timerA", 2000);
  let rs1 = timer("timerB", 1000);
  console.log(await rs);// wait
  console.log(await rs1);
  /*
  start
  goto: timerA
  goto: timerB
  timerB resolve
  timerA resolve
  timerA
  timerB
  */
}

t4();
