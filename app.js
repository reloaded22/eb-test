// const express = require('express');
import express, { json } from "express";

// const app = express();
const app = express();

app.use(json());

app.get('/', (req, res) => { 
    console.log("this is working bitches");
    res.send("hello world!"); 
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});