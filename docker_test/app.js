import express from "express";

const app = express();

const PORT = "8828";

app.get("/", (_, res) => {
  res.json({ message: "Docker" });
});

app.listen(PORT, () => {
  console.log("Port is" + PORT);
});
