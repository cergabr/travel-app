export function handleSubmit(e){
    e.preventDefault();

    const location = document.getElementById("location").value.trim();
    const dateText = document.getElementById("departure").value;
    //let d = new Date(dateText);
    //let date = d.toLocaleDateString(navigator.language,{weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'});
    //console.log(date)

    const urlLocation = " http://api.geonames.org/postalCodeLookupJSON?placename="+encodeURIComponent(location);
    
    Client.getGeodata(urlLocation)
    .then((data)=>{
        console.log(data)
    })

}

document.getElementById("submit").addEventListener("click", handleSubmit);