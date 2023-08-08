import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(8080, () => {
  console.log(`Listening at port: 8080`);
});

app.post("/api/auth", authRoutes);
