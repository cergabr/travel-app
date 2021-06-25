export const getTravelData = async (loc,fDays,nDays,country) => {
    console.log(fDays,nDays)
    fetch("/apiKeys")
    .then(res=>res.json())
    .then(keys =>{
        const geonm=keys.geonm;
        const wbit=keys.wbit;
        const pxby=keys.pxby;
    
        fetch("http://api.geonames.org/postalCodeLookupJSON?placename="+loc+country+"&username="+geonm)
        .then(res=>{return res.json();})
        .then(data=>{
            const locData = {
                lat: data.postalcodes[0].lat.toFixed(3),
                lon: data.postalcodes[0].lng.toFixed(3),
                city: data.postalcodes[0].adminName2,
                country: data.postalcodes[0].countryCode
            };
            console.log("geo:",locData)
            fetch("https://api.weatherbit.io/v2.0/forecast/daily?lat="+locData.lat+"&lon="+locData.lon+"&key="+wbit+"&days="+fDays)
            .then(res=>{return res.json()})
            .then(wData=>{
                const len = wData.data.length;
                let info = {arg:[]};
                for ( let i=len-nDays; i<len; i++ ){
                    info.arg[i]={
                        date: new Date(wData.data[i].datetime),
                        temp: wData.data[i].temp,
                        icon: wData.data[i].weather.icon
                    }
                }
                console.log("wbit:",info)
                fetch("/getImage?city="+locData.city)
                .then(res=>{return res.json()})
                .then(data=>{
                    console.log("pixabay:",data)
                    document.getElementById("loc").innerHTML = locData.city+", "+locData.country;
                    document.getElementById("days").innerHTML = "Remaining "+(fDays-nDays-1).toString()+" days";
                    document.querySelector("#photo").style.cssText = "background-image: url('"+data.imgURL+"');";
                    document.getElementById("trip-dates").innerHTML= "My trip of "+nDays+(nDays>1?" days":" day")+" in: "

                    document.getElementById("weather").innerHTML = "";
                    document.getElementById("trip-card").classList.add("more-days");
                    const fragment = document.createDocumentFragment();

                    for (  let i=len-nDays; i<len; i++  ){
                        //creating sup div
                        const div = document.createElement("div");

                        //creating div with date inside
                        const divD = document.createElement("div");
                        divD.classList.add("datetime");
                        divD.innerHTML = info.arg[i].date.toLocaleDateString(navigator.language,{ month: 'short', day: 'numeric'});

                        //creating div with temp inside
                        const divT = document.createElement("div");
                        divT.classList.add("temp");
                        divT.innerHTML = info.arg[i].temp.toFixed(1)+"°";

                        //creating div for icon
                        const divI = document.createElement("div");
                        divI.classList.add("icon");

                        //creating img with src(icon) and alt
                        const img = document.createElement("img");
                        img.setAttribute("alt","weather icon");
                        img.setAttribute("src",info.arg[i].icon+".png");

                        divI.appendChild(img);
                        div.appendChild(divD);
                        div.appendChild(divI);
                        div.appendChild(divT);

                        //appending the nested div to fragment
                        fragment.appendChild(div);
                        //appending fragment to #weather
                        document.getElementById("weather").appendChild(fragment);
                    }
                    document.getElementById("trip-card").classList.add("filled");
                    setTimeout(()=>{
                        window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: 'smooth'});
                    },300)
                })
                .catch(error=>console.log(error))
            })
            .catch(error=>console.log(error))
        })
        .catch(error=>console.log(error))
    })
    .catch(error=>{console.log("Error",error)})

    for (let span of document.querySelectorAll("form span")){
            if (span.innerHTML!==""){
                span.innerHTML="";
                span.previousElementSibling.value="";
                span.previousElementSibling.classList.remove("error");
            }
        }
}