const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Listening at port: 3000`);
});

app.post("/auth/register", () => {});

app.get("/", (req, res) => res.json({ message: "hi" }));
