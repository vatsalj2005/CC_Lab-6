const express = require("express");
const os = require("os");

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
    res.send(`Served by backend: ${os.hostname()}`);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
