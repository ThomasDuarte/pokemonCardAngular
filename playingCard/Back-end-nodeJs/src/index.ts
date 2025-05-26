import express from "express";
const app = express();
const port = 3000;

app.get("/getData", (req, res) => {
  res.json({
    statusCode: 200,
    statusMessage: "SUCCESS",
  });
});

app.listen(port, () => {
  console.log("Express API is running at port 3000");
});
