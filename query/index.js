import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/posts", (req, res) => {});

app.get("/events", (req, res) => {});

app.listen(5002, () => {
  console.log("Listening on port: 5002");
});
