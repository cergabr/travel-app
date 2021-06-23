export function handleSubmit(e){
    e.preventDefault();

    const location = document.getElementById("location").value.trim();
    const inputDate = document.getElementById("departure").value;

    const date = new Date(inputDate).getTime();
    const today = new Date().getTime();
    const remDays = Math.trunc((date - today)/(1000*60*60*24));
    
    console.log(remDays)
    if (remDays > 0){
        console.log("future")
    }
    else if(remDays == 0){
        console.log("today")
    }

    const urlGeo = " http://api.geonames.org/postalCodeLookupJSON?placename="+encodeURIComponent(location);
    const urlWheat = "https://api.weatherbit.io/v2.0/forecast/daily"
    
    Client.getGeodata(urlLocation)
    .then(data=>{
        console.log(data)
    })

}

document.getElementById("submit").addEventListener("click", handleSubmit);