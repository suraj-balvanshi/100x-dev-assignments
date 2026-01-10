// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// using interval
function clock() {
  let currentTime = new Date();
  let datestring = currentTime.toTimeString();
  let localTimeString = currentTime.toLocaleTimeString();
  console.log(datestring.slice(0, 9));
  console.log(localTimeString);
  setInterval(clock, 1000);
}

// clock();

// using setTimeout or recursion
function clockRecursion() {
  let currentTime = new Date();
  let datestring = currentTime.toTimeString();
  let localTimeString = currentTime.toLocaleTimeString();
  console.log(datestring.slice(0, 9));
  console.log(localTimeString);
  setTimeout(clockRecursion, 1000);
}

clockRecursion();
