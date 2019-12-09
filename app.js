const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "test"), {}, err => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello world!",
//   err => {
//     if (err) throw err;
//     console.log("Write file...");
//   }
// );

const FILE = filename => path.join(__dirname, "/test", `${filename}`);

fs.rename(FILE`hello.txt`, FILE`newhello.txt`, err => {
  if (err) throw err;
  console.log("Write file...");
});

fs.readFile(FILE`newhello.txt`, "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
