const http = require("http");
const path = require("path");
const fs = require("fs");

const FILE = filepath => path.join(__dirname, `${filepath}`);

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   fs.readFile(FILE`public/index.html`, (err, content) => {
  //     if (err) throw err;
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(content);
  //   });
  // }
  // if (req.url === "/about") {
  //   fs.readFile(FILE`public/about.html`, (err, content) => {
  //     if (err) throw err;
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.end(content);
  //   });
  // }
  // if (req.url === "/api/users") {
  //   const users = [
  //     { key: "1", name: "Bob", age: 33 },
  //     { key: "2", name: "Alex", age: 27 }
  //   ];
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(JSON.stringify(users));
  // }

  // =========================================================================

  // Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  // Get file extension
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  if (contentType == "text/html" && extname == "") filePath += ".html";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf-8");
          }
        );
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, contentType);
      res.end(content, "utf-8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(5000, () => console.log("Server running..."));
