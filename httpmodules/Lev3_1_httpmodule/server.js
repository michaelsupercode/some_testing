import http from "http";
import fs from "fs";

const sendFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.end("Pfade richtig? Zu lesen gibts hier nichts");
      return;
    }
    if (path.includes(".svg")) {
      res.writeHead(200, { "Content-Type": "image/svg+xml" });
    } else if (path.includes(".png")) {
      res.writeHead(200, { contentType: "image/png" });
    }
    res.end(data);
  });
};

const requestHandler = (req, res) => {
  console.log("request kommt an", req.url, req.method);

  if (req.url === "/") {
    sendFile("./assets/pages/home/home.html", res);
  } else {
    const filePath = "./assets" + req.url;
    console.log(filePath);
    sendFile(filePath, res);
  }
};

const server = http.createServer(requestHandler);
server.listen(8080, () => console.log("Server ist online"));
