prediction_1=""

Webcam.set
({
  width:350,
  height:302,
  image_format:'png',
  png_quality:99
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function Take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById('result').innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3ZI4PXIxY/model.json',modelLoaded);
function modelLoaded()
{
    console.log('Model loaded!');
}
function check()
{
    img=document.getElementById('captured_image');
    classifier.classify(img,gotResult);
}
function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="The prediction is"+prediction;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}
function gotResult(error,results)
{
    if (error)
    {
        console.error(error);
    }
    else 
    {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        prediction = results[0].label;
        speak();
        if(results[0].label=="insaanity")
        {
            document.getElementById("update_gesture").innerHTML="&#9994;";

        }
        if(results[0].label=="yo")
        {
            document.getElementById("update_gesture").innerHTML="&#9996;";

        }
        if(results[0].label=="nice")
        {
            document.getElementById("update_gesture").innerHTML="&#128076;";

        }
        if(results[0].label=="spider man")
        {
            document.getElementById("update_gesture").innerHTML="&#129304;";

        }
        if(results[0].label=="superior hi")
        {
            document.getElementById("update_geture").innerHTML="&#128406;";

        }
    }
}