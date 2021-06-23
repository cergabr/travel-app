const dotenv = require("dotenv");
dotenv.config();

/* routes endpoint */ 
projectData = {};

const path = require("path");
const fetch = require('node-fetch');

const express = require('express');
const app = express();

/* middleware */
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

/* cors */
const cors = require('cors');
app.use(cors());

/* Initialize the main project folder */
app.use(express.static('dist'));
app.get("/", function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

/* designates app listening port */
const port = 8080;
app.listen(port, ()=>{console.log(`server running on localhost: ${port}`)});

app.get('/apiKeys',(req,res)=>{
    res.send({
        geonm: process.env.GEONAMES_KEY,
        wbit: process.env.WEATHERBIT_KEY,
        pxby: process.env.PIXABAY_KEY
    });
});

app.get('/all', (req,res)=>{res.send(projectData)});

app.post('/addGeo',(req, res)=>{
    const geodata = {
        lat: req.body.lat,
        lon: req.body.lon,
    }
    projectData.geodata=geodata;
    res.send(projectData);
    console.log(projectData);
});
