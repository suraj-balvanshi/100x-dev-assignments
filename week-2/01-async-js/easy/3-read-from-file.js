// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");
const path = "./easy/"; // requires cause node reference from node module level
const fileName = "3-text.txt";

function expensive(cost) {
  let i = 0;
  while (i < cost) {
    i++;
  }
}

const file = fs.readFile(path + fileName, "utf-8", (_err, fileData) => {
  console.log(
    "always displays after expnsive task as waiting to finish",
    fileData
  );
});

console.log("first console log as read file is async", file);
console.log("undefined as readfile doesnt returns anything");

//calling expensive task
expensive(10000000000);

console.log("after expensive task in sync");
