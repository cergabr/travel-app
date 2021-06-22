export async function getGeodata(url){
    fetch("/geonm")
    .then(res=>res.text())
    .then( async key =>{
        //key="";
        url+="&username="+key;
        
        const res = await fetch(url);
        try{
            const geoData = await res.json();
            if (res.ok){
                const coord = {
                    //city:geoData.postalcodes[0].adminName2,
                    //country:geoData.postalcodes[0].countryCode,
                    lat:geoData.postalcodes[0].lat,
                    lng:geoData.postalcodes[0].lng                    
                }
                console.log(coord)
                return coord;
            }
            else{
                return console.error("wrong input")
            }
        }
        catch(erorr){
            console.log("Error: ",error);
        }
    })
}