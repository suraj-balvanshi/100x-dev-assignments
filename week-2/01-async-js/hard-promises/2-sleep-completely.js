/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// function sleep(milliseconds) {
//   return new Promise((res, rej) => {
//     const start = Date.now();

//     while (Date.now() - start < milliseconds) {
//       // busy wait (blocks thread)
//       // keeps the event loop stuck here
//     }
//     res();
//   });
// }

function sleep(milliseconds) {
  return new Promise((res, rej) => {
    for (let start = Date.now(); Date.now() - start < milliseconds; ) {}
    res();
  });
}

module.exports = sleep;
