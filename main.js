function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio : true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/aEzbFnnKX/model.json",modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}

 var bark = 0;
 var roar = 0;
 var meow = 0;
 var moo = 0;
 var background = 0;

function gotResults(error,results)
{
if (error)
{
    console.error("error");
}
else{
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;
    document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +( results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb(" + random_number_r +","+random_number_g +","+ random_number_b;
    document.getElementById("result_confidence").style.color = "rgb(" + random_number_r +","+random_number_g +","+ random_number_b;

    img= document.getElementById("ear").innerHTML;
    if(results[0].label == 'dog')
    {
        bark = bark + 1;
        document.getElementById("ear").src = "fatdog-dog.gif";
    }
    if(results[0].label == 'meow')
    {
        meow = meow + 1;
        document.getElementById("ear").src = "cute-kitty-best-kitty.gif";

    }
    if(results[0].label == 'roar')
    {
       roar = roar + 1;
       document.getElementById("ear").src = "lion-roar.gif";

    }
    if(results[0].label == 'mooing')
    {
        moo = moo + 1;
        document.getElementById("ear").src ="tumblr_mqq85qWOwE1rfjowdo1_500.gif"
    }
}

}