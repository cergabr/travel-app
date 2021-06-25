import { inputValidate } from "../inputValidate";

describe("Testing input validation", ()=>{
    test("Testing inputValidate()", () =>{
        document.body.innerHTML=
            "<input id=\"city\"\>"+
            "<span></span>";
        const e = {target: {id: "city",value:"new york"}};

        expect(inputValidate(e)).toBe(true);
        expect(document.getElementById("city").classList.contains("valid"));   
        
        e.target.value="wrong -city";
        expect(inputValidate(e)).toBe(false);
        expect(document.getElementById("city").classList.contains("error"));
        expect(document.querySelector("#"+e.target.id+" + span").innerHTML).toBe("Wrong "+e.target.id+" value!"); 
    });
});