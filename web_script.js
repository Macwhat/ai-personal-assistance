const speechRecognition = window.speechRecognition || window. 
    webkitspeechRecognition;

const speechNewRecog = new speechRecognition();

var startbtn = document.querySelector(".start");
var stopbtn = document.querySelector(".stop");
var api = "https://en.wikipedia.org/w/api.php?format=json&action=query&origin=*&prop=extracts&exintro&explaintext&redirects=1&titles="

function speak(command){
    var speech = new SpeechSynthesisUtterance();
    speech.text = command;
    speech.volume= 1;
    window.SpeechSynthesis.speak(speech);
}


startbtn.addEventListener("click",()=>{
    speechNewRecog.start();
})

stopbtn.addEventListener("click",()=>{
    speechNewRecog.stop();
    speechNewRecog.stop();
    window.speechSynthesis.cancel();
})

speechNewRecog.onstart = funtion(){
    var status = document.querySelector(".status");
    status.innerHTML ="Listenting..";

}

speechNewRecog.onend = funtion(){
    var status = document.querySelector(".status");
    status.innerHTML ="";
}
speechNewRecog.onresult= function(event){
    var current = event.resultIndex;
    var usercommand = event.results[current][0].transcript;
    var mainusercommand = usercommand.tolowerCase();

    if(mainusercommand.includes("name")&& mainusercommand.include("what")){
        speak("my name is virtual assistant");

    }

    if(mainusercommand.includes("how")&& mainusercommand.include("you")){
        speak("i am fine");

    }


    if(mainusercommand.includes("name")&& mainusercommand.include("what")){
        var subjrct = mainusercommand.replace("who is","")
        var api_new = api+subject;
        fectch(api_new)
        .then(response => Response.json())
        .then(response =>{
            response = response.query.pages;
            var pageid = object.key(response)[0];
            var extract = response[pageid].extract;
            console.log(extract);
            speak()

        })

    }
}