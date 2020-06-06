import express, { response } from "express";

const app = express();

app.post("/", (request, response) => {
  return response.json({});
});

app.listen(3333);
