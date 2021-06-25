export function inputValidate(e){
    const value=e.target.value.trim();
    const id=e.target.id;
    const elem=document.getElementById(id);
    let err = "";

    if (value !== ""){
        let valid = false;
        //checking input by id with regex
        switch(id){
            case "city":
                if(value.match(/^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:['\s-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/)){
                    valid=true;
                }
                break;
            case "arrival":
                if(value.match(/^(202)[0-9][-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/)){
                    valid=true;
                }
                break;
            case "departure":
                if(value.match(/^(202)[0-9][-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/)){
                    if(document.getElementById("arrival").value != ""){
                        let depValue = new Date(value).getTime();
                        let arrValue = new Date(document.getElementById("arrival").value).getTime();
                        if (depValue >= arrValue){
                            valid=true;
                        }
                        else{
                            valid=false;
                            err="Departure date cannot be earlier than Arrival date!";
                        }
                    }
                    else{
                        valid=false;
                        err="You must fill Arrival date first!";
                    }
                }
                break;
            case "country":
                if(value.match(/^[a-z]{2}$/i)){
                    valid=true;
                }
                break;
            default:
        }
        //if the input is valid
        if(valid){
            elem.classList.add("valid");
            elem.classList.remove("error");
            document.querySelector("#"+id+" + span").innerHTML = "";
            return true;
        }
        //if input is invalid add error
        else{
            elem.classList.add("error");
            elem.classList.remove("valid");
            document.querySelector("#"+id+" + span").innerHTML = err==""?"Wrong "+id+" value!":err;
            return false;
        }
    }
    else{
        if (id != "country"){
            elem.classList.add("error");
            elem.classList.remove("valid");
            document.querySelector("#"+id+" + span").innerHTML = "Empty field!<br> Enter "+id+" to procede";
            return false;
        }
        else{
            elem.classList.remove("error");
            elem.classList.remove("valid");
        }
    }
}