import express from "express";

const app = express();

app.get("/test", (request, response) => {
  return response.send("Hello World");
});
app.post("/test", (req, res) => {
  return res.send("método post");
});

app.listen(3000, () => console.log("Server is running"));
