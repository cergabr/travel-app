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

app.get('/geonm',(req,res)=>{res.send(process.env.GEONAMES_KEY);});
app.get('/whtrbit',(req,res)=>{res.send(process.env.WEATHERBIT_KEY);});
app.get('/pxby',(req,res)=>{res.send(process.env.PIXABAY_KEY);});

app.get('/all', (req,res)=>{res.send(projectData)});

projectData.weatherData=[];
app.post('/add',(req, res)=>{
    const newEntry = {
        /*city: req.body.city,
        date: req.body.date,
        temperature: req.body.temp,
        icon: req.body.icon,
        weather: req.body.weather,
        userResponse: req.body.userResponse*/
    }
    projectData.weatherData.push(newEntry);
    res.send(projectData);
    console.log(projectData);
});
