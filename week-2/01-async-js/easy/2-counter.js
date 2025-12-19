// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// using iterator as multipler for seconds
function counter(limit, intervals = 1000) {
  let count = 0;
  for (let i = 0; i < limit; i++) {
    setTimeout(() => {
      count++;
      console.log(count);
    }, intervals * i);
  }
}

counter(10, 1000);

// using setimeout as function call
function counter2(limit, intervals = 1000, count = 0) {
  // break condition
  if (count >= limit) return;
  // recursive timeout
  setTimeout(() => {
    count++;
    console.log(count);
    counter2(limit, intervals, count);
  }, intervals);
}

counter2(10, 1000);

// chatgpt
function counter3(limit, interval = 1000) {
  let count = 0;

  function tick() {
    // breaks loops
    if (count === limit) return;

    count++;
    console.log(count);
    // continues loop
    setTimeout(tick, interval);
  }

  // starts loop
  setTimeout(tick, interval);
}

counter3(10, 1000);
