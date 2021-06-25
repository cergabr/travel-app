# Travel App
Project for Udacity Nanodegree Program - Front End Web Developer

## Table of Contents

* [Overwiew](#overview)
* [Description](#description)
* [Example](#example)
* [Tools](#tools)
* [Attributions](#attributions)


## Overview
The aim of this project is to create an asynchronous web travel app that uses Web API after form submission and validation to display information about the trip.


## Description
The app uses Web API after user inputs submission (city, trip dates) and inputs validation, to get city coordinates from https://www.geonames.org/, then weather infos from https://www.weatherbit.io/ and finally city image from https://pixabay.com/.
Then it will update the UI with the trip informations retrieved, such as forecast weather data for the trip's days, remaining days until departure and the duration of the trip. takes input data from user then validate user data onblur to display errors and again on form submission to verify required fields.


## Example

![example part1](/example1-1.png)

![example part2](/example1-2.png)

## Tools
Tools used in this project:
- Npm
- Node.js (w/ Express)
- Webpack (w/ loaders & plugins)
- Babel
- Sass
- Service workers
- Jest (JavaScript Testing Framework)


## Attributions
- Weather icons are from https://www.weatherbit.io/api/codes

- Background image and images are from https://pixabay.com/
