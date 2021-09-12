var buttonTranslate=document.querySelector("#translate");
var inputText=document.querySelector('#input');
var outputText=document.querySelector("#output");
//api

var server="https://api.funtranslations.com/translate/shakespeare.json";

//to construct url to send to api call
function makeURL(input) {
    return server + "?" + "text=" + input
}
//handling error if api call fails
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler(){
    var input=inputText.value;
    fetch(makeURL(input))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText; // output
       })
    .catch(errorHandler)

    //steps to convert to api call 1.make url 2.convert the response to json 3. modify the json 4.handle error
};
buttonTranslate.addEventListener('click',clickHandler);