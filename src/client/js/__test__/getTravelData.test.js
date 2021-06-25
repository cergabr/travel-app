import { getTravelData } from "../getTravelData";

beforeAll(()=>{
    global.Client = jest.genMockFromModule("../../app.js");
});
beforeEach(()=>{
    fetch.resetMocks();
});

describe("Testing api call func", ()=>{
    test("Testing getTravelData()", () =>{

        document.body.innerHTML="<div id=\"loc\"></div><div id=\"days\"></div><div id=\"photo\"></div><div id=\"trip-dates\"></div><div id=\"weather\"></div><div id=\"trip-card\"></div>";

        const geodata= {
            postalcodes:[
                {
                    lat: 40.730610,
                    lng: -73.935242,
                    adminName2: "New York",
                    countryCode: "US"
                },
            ]
        };

        const wbit={
            data:[
                {datetime:"2021-06-25",temp:"29",weather:{icon:"2d0n"}},
                {datetime:"2021-06-26",temp:"28",weather:{icon:"2d0n"}}
            ]
        };
        const pxby={imgURL:"http://url.com"};

        fetch
            .once(JSON.stringify({geonm:"a",wbit:"b",pxby:"c"}))
            .once(JSON.stringify(geodata))
            .once(JSON.stringify(wbit))
            .once(JSON.stringify(pxby))

        expect(getTravelData).toBeDefined();
        const param={a:"new york",b:5,c:2,d:""};
        getTravelData(param.a,param.b,param.c,param.d);
        expect(fetch).toHaveBeenCalledWith("/apiKeys");
    });
});