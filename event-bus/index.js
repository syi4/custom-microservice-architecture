import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://posts-clusterip-srv:5000/events", event);
  axios.post("http://comments-srv:5001/events", event);
  axios.post("http://query-srv:5002/events", event);
  axios.post("http://moderation-srv:5003/events", event);

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(5005, () => {
  console.log("Listening on port: 5005");
});
