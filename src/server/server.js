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
const { request } = require("http");
app.use(cors());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    next();
});

app.get("/getImage", (request,response)=>{
    fetch("https://pixabay.com/api/?key="+process.env.PIXABAY_KEY+"&q="+encodeURI(request.query.city)+"&image_type=photo&category=travel")
    .then(res=>{return res.json()})
    .then(data=>{
        console.log(data.hits[0])
        return response.json({imgURL: data.hits[0].largeImageURL})
    })
});

/* Initialize the main project folder */
app.use(express.static('dist'));
app.get("/", function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

/* designates app listening port */
const port = 8080;
app.listen(port, ()=>{console.log(`server running on localhost: ${port}`)});

app.get('/apiKeys',(req,res)=>{
    projectData.apiKeys = {
        geonm: process.env.GEONAMES_KEY,
        wbit: process.env.WEATHERBIT_KEY,
        pxby: process.env.PIXABAY_KEY
    };
    console.log(projectData.apiKeys)
    res.send(projectData.apiKeys);
});
