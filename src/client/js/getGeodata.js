export const getGeodata = async (loc,dep) => {
    fetch("/apiKeys")
    .then(res=>res.text())
    .then(keys =>{
        /*const geonm=keys.geonm;
        const wbit=keys.wbit;
        const pxby=keys.pxby;*/
        const geonm="";
        const wbit="";
        const pxby="";
    
        fetch("http://api.geonames.org/postalCodeLookupJSON?placename="+loc+"&username="+geonm)
        .then(res=>{
            const data = res.json();
            const coord = {
                    lat:data.postalcodes[0].lat.toFixed(3),
                    lon:data.postalcodes[0].lng.toFixed(3)
                    //city:data.postalcodes[0].adminName2,
                    //country:data.postalcodes[0].countryCode 
                };
                console.log(coord);
                return coord;
        })
        .catch(error=>{console.log("Error Geo:",error)})
    })
}