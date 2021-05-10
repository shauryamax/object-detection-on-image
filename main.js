img = "";
status = "";
function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function preload()
{
    img = loadImage('dog_cat.jpg')
}
function draw()
{
    image(video, 0,0,380,380);

    r   =   random(255);
    g   =   random(255);
    b   =   random(255);
    objectDetector.detect(video, gotResult);
    document.getElementById("number_of_objects").innerHTML ="number of objects detected are : "+ object.length;
    image(video , 0, 0, 380, 380);
    fill(r,g,b);
    text("Dog", 45 ,75);
    noFill();
    stroke(r,g,b);
    rect(30 , 60 , 450, 350 );

    fill(r,g,b);
    text("Cat",320,120);
    noFill();
    stroke(r,g,b)
    rect(300,90,270,320)
}
function modelLoaded(){
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResult);
}
function gotResult(error,results){
    if(error) {
        console.log(error);
    }
    console.log(results);
}
