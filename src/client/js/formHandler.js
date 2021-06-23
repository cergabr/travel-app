export function handleSubmit(e){
    e.preventDefault();

    let location = document.getElementById("location").value.trim();
    const inputDate = document.getElementById("departure").value;

    const date = new Date(inputDate).getTime();
    const today = new Date().getTime();
    const remDays = Math.trunc((date - today)/(1000*60*60*24));
    
    if (remDays < 0){
        remDays="";
    }

    location = encodeURIComponent(location);

    Client.getGeodata(location,departure);

}

document.getElementById("submit").addEventListener("click", handleSubmit);