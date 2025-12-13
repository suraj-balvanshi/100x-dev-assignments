/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function logTime(a) {
  console.log(a);
}

function sum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
}

function calculateTime(n) {
  let startTime = new Date();
  sum(n);
  let EndTime = new Date();
  return EndTime - startTime;
}

logTime(calculateTime(100));
logTime(calculateTime(100000));
logTime(calculateTime(1000000000));
