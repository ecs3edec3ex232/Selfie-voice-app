var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition(); 
function start()
{
    document.getElementById("text_box").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
   
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content); 
    document.getElementById("text_box").innerHTML = content; 
    
    if(content=="take my selfie")
    {
        console.log("taking selfie in ---");
        speak();
    }
   
}

function speak(){
    var synth = window.speechSynthesis;
   
speak_data = "Taking your selfie in 5 seconds"; 

    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis); 
    Webcam.attach(camera);


    setTimeout(function() {
        take_snapShot();
        Save();
    }, 5500);
}

Webcam.set({
    width:365,
height:243.899, 
image_format: 'jpeg',
jpeg_quality:99.99999999999999999999999999999999999999999991
});
camera = document.getElementById("output"); 

function take_snapShot() {
 Webcam.snap(function(data_uri) {
     document.getElementById("result").innerHTML ='<img id="image" src="'+data_uri+'">'; 
 }); 
}

function Save(){
     var link =document.getElementById("link");
     var image = document.getElementById("image").src  ;
     link.href = image; 
     link.click();
}