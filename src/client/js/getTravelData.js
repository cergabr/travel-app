export const getTravelData = async (loc,days) => {
    fetch("/apiKeys")
    .then(res=>res.json())
    .then(keys =>{

        console.log(keys)
        console.log(keys.geonm)
        const geonm=keys.geonm;
        const wbit=keys.wbit;
        const pxby=keys.pxby;
        /*const geonm="";
        const wbit="";
        const pxby="";*/
    
        fetch("http://api.geonames.org/postalCodeLookupJSON?placename="+loc+"&username="+geonm)
        .then(res=>{return res.json();})
        .then(data=>{
            const locData = {
                lat:data.postalcodes[0].lat.toFixed(3),
                lon:data.postalcodes[0].lng.toFixed(3),
                city:data.postalcodes[0].adminName2,
                country:data.postalcodes[0].countryCode
            };
            fetch("https://api.weatherbit.io/v2.0/forecast/daily?lat="+locData.lat+"&lon="+locData.lon+"&key="+wbit+"&days="+days)
            .then(res=>{return res.json()})
            .then(wData=>{
                const n = wData.data.length;
                const info = {
                    temp: wData.data[n-1].temp,
                    precip: wData.data[n-1].pop,
                    description: wData.data[n-1].weather.description,
                    icon: wData.data[n-1].weather.icon
                }
                fetch("/getImage?city="+locData.city)
                .then(res=>{return res.json()})
                .then(data=>{
                    console.log(data.imgURL)
                    document.getElementById("city").innerHTML = locData.city;
                    document.getElementById("country").innerHTML = locData.country;
                    document.getElementById("temp").innerHTML = info.temp+"°";
                    document.getElementById("descr").innerHTML = info.description;
                    document.getElementById("precip").innerHTML = info.precip+"%";
                    document.querySelector("#icon img").setAttribute("src","./img/"+info.icon);
                    document.querySelector("#photo img").setAttribute("src",data.imgURL);
                })
            })
        })
    })
    .catch(error=>{console.log("Error Geo:",error)})
    
}