export function handleSubmit(e){
    e.preventDefault();

    let city = document.getElementById("city").value.trim();
    const inputArr = document.getElementById("arrival").value;
    const inputDep = document.getElementById("departure").value;
    const inputCountry = document.getElementById("country").value.toLowerCase();

    const cit = {target:{value:city,id:"city"}};
    const arr = {target:{value:inputArr,id:"arrival"}};
    const dep = {target:{value:inputDep,id:"departure"}};
    Client.inputValidate(cit);
    Client.inputValidate(arr);
    Client.inputValidate(dep);

    if (Client.inputValidate(cit) && Client.inputValidate(arr)&&Client.inputValidate(dep)){
        let country = "";
        if (inputCountry != ""){
            const cou = {target:{value:inputCountry,id:"country"}};
            country = Client.inputValidate(cou)?"&country="+inputCountry.toUpperCase():"";
        }
        console.log("___form submitted___");
        city = encodeURIComponent(city);
        const today = new Date();
        today.setHours(2,0,0,0);
        const dateArr = new Date(inputArr);
        const dateDep = new Date(inputDep);

        let nDays = Math.trunc((dateDep.getTime() - dateArr.getTime())/(1000*3600*24));

        let forecastDays = Math.trunc((dateDep.getTime() - today.getTime())/(1000*3600*24));
        if (forecastDays <= 0){
            forecastDays=1;
            nDays=1;
        }
        else{
            forecastDays+=1;
        }

        document.getElementById("trip-card").classList.remove("filled");

        Client.getTravelData(city,forecastDays,nDays,country);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("submit").addEventListener("click", handleSubmit);
});
