const url = require("url");

const myURL = new URL(
  "http://example.com/hello.html?id=8f35490242&status=active"
);
console.log("myURL: ", myURL);

const refID = myURL.searchParams.get("id");
console.log("refID: ", refID);
