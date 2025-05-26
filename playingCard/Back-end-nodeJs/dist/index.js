const express = require("express");
const app = express();
const port = 3000;
app.get("/getData", (req, res) => {
    res.json({
        statusCode: 200,
        statusMessage: "SUCCESS",
    });
});
app.listen(port, (req, res) => {
    console.log("Express API is running at port 3000");
});
