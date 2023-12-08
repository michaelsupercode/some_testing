import http from "http";
import fs from "fs";

const sendFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.end("error");
      return;
    }
    res.end(data);
  });
};

const requestHandler = (req, res) => {
  console.log("..runnin'..", req.url, req.method);

  if (req.url === "/") {
    sendFile("./assets/pages/home.html", res);
  } else {
    const filePath = "./assets/pages" + req.url;
    sendFile(filePath, res);
  }
};

const server = http.createServer(requestHandler);
server.listen(8080, () => console.log("server is fuckin' running.."));
