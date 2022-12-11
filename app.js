// const express = require('express');
import express, { json } from "express";
import mongoDbConnection from "./config/mongoDbConnection.js";
import testRouter from "./routes/testRoutes.js";

mongoDbConnection();

// const app = express();
const app = express();

app.use("/", testRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});