
function abc() {

    var name = "gopi";

    console.log(name);
}

//abc();

//http calls

let getUrl = "https://dummy.restapiexample.com/api/v1/employees";

function getEmployees() {

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", getUrl, false);
    xmlHttp.send(); // works in this case 
    console.log(xmlHttp.responseText);
}
//getEmployees();


//inner function

function outerFunction() {

    console.log("outer function");
    let mnddie = "test";

    function innerFunction(somevariable) {
        console.log(`inner function with variable ${somevariable}`);
    }

    outerFunction.innerFunctions = innerFunction;
}

outerFunction();

outerFunction.innerFunction("gopi");
/*
    oka inner function ni call cheyali ante outer function loni
    oka variable cheyali like
    <outerFunctionName>.<innerFunctionName> = <innerFunctionName>
*/

//CLOSURE

 

