import express from "express";

const app = express();

const PORT = "8828";

app.get("/", (_, res) => {
  res.json({ message: "My first Docker" });
});

app.listen(PORT, () => {
  console.log("Port is" + PORT);
});
