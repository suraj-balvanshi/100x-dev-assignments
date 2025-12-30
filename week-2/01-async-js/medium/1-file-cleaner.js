// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");
const path = "./medium/"; // requires cause node reference from node module level
const fileName = "1-file-cleaner.txt";
const whitespace = /\s+/;

const file = fs.readFile(path + fileName, "utf-8", (_err, fileData) => {
  console.log(fileData);
  const words = fileData.trim().split(whitespace);
  const newContent = words.join(" ");
  fs.writeFile(path + fileName, newContent, () => {
    const file = fs.readFile(path + fileName, "utf-8", (_err, fileData) => {
      console.log(fileData);
    });
  });
});

// async wait syntax
// const fs = require("fs/promises");

// async function cleanFile() {
//   const data = await fs.readFile("./medium/1-file-cleaner.txt", "utf-8");
//   const cleaned = data.trim().replace(/\s+/g, " ");
//   await fs.writeFile("./medium/1-file-cleaner.txt", cleaned);
// }

// cleanFile();
