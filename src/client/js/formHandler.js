export function handleSubmit(e){
    e.preventDefault();

    let city = document.getElementById("city").value.trim();
    const inputDate = document.getElementById("departure").value;

    Client.inputValidate(city, inputDate);

    city = encodeURIComponent(city);
    const today = new Date();
    today.setHours(2,0,0,0);
    const date = new Date(inputDate);

    let remDays = Math.trunc((date.getTime() - today.getTime())/(1000*3600*24));
    if (remDays <= 0){
        remDays=1;
    }
    else{
        remDays+=1;
    }

    Client.getTravelData(city,remDays);

}

document.getElementById("submit").addEventListener("click", handleSubmit);