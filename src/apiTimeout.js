const express = require("express");
const app = express();

app.get("*", (req, res, next) => {
    console.log('request received')
    res.sendStatus(408);
});

app.listen(9999, () => {
    console.log("Timeout server listening to port 9999");
});
