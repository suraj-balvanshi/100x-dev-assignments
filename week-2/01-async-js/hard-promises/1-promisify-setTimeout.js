/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, n * 1000);
  });
}

//self test case
async function callWait(n) {
  let start = Date.now();
  await wait(n);
  let stop = Date.now();
  console.log(stop - start);
}

callWait(1);
callWait(2);

module.exports = wait;
