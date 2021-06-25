/**
 * @jest-environmen jsdom
 */

import { handleSubmit } from "../formHandler";
 
beforeAll(()=>{
    global.Client = jest.genMockFromModule("../../app.js");
});

describe("Testing submit", ()=>{
    test("Testing handleSubmit()", () =>{

        const e = new CustomEvent("test-event", {preventDefault: jest.fn()});
        const data=jest.fn();
        Client.inputValidate=jest.fn(()=>{return true});

        document.body.innerHTML=
        "<form\>"+
            "<input id=\"city\" value=\"Milano\"\>"+
            "<input id=\"arrival\" value=\"2021-01-01\">"+
            "<input id=\"departure\" value=\"2021-01-05\">"+
            "<input id=\"country\" value=\"en\">"+
            "<button id=\"submit\"></button>"+
        "</form>"+
        "<div id=\"trip-card\"></div>";

        expect(handleSubmit).toBeDefined();
        handleSubmit(e);
        expect(Client.inputValidate).toHaveBeenCalledTimes(7);
        expect(Client.getTravelData).toHaveBeenCalledTimes(1);
    });
});