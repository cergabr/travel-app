export const getWeatherdata = async (coord,days)=>{
    const lat = coord.lat;
    const lon = coord.lng;
    fetch("/whtrbit")
    .then(res=>res.text())
    .then(async key=>{
        key="";
        const url = "https://api.weatherbit.io/v2.0/forecast/daily?lat="+lat+"&lon="+lon+"&key="+key+"&days="+days;
        console.log(url);
        const res = await fetch(url);
        try{
            const weatherData = await res.json();
            console.log(weatherData);
            return weatherData;
        }
        catch(error){
            console.log("Error Wbit: ",error);
        }
    })
}