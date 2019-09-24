const express = require("express");
const htmlRouter = express.Router();
const path = require("path");



htmlRouter.get('/survey', (req, res) => {                        
    res.sendFile(path.join(__dirname , "../public/survey.html"));
});

htmlRouter.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = htmlRouter;

