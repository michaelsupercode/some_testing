import http from "http";
import fs from "fs";

const sendFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.end("Ich kann nicht Lesen!");
      return;
    }
    if (path.includes(".jpeg")) {
      res.writeHead(200, { "Content-Type": "image/jpeg" });
    }
    res.end(data);
  });
};

const requestHandler = (req, res) => {
  console.log(
    "where is the Request? Here is the Request :D",
    req.url,
    req.method
  );

  if (req.url === "/") {
    sendFile("./home.html", res);
  } else {
    const filePath = "./assets" + req.url;
    console.log(filePath);
    sendFile(filePath, res);
  }
};

const server = http.createServer(requestHandler);
server.listen(8080, () => console.log("Server ist Online"));
