var text = "";
function DecideText(){
    text = document.getElementById("Text").value;
    document.getElementById("TextSelect").style = "display:none;";
    document.getElementById("Main").style = "display:contents;";
}

function Back(){
    text = "";
    document.getElementById("Main").style = "display:none;";
    document.getElementById("TextSelect").style = "display:contents;";
}
function setup(){
    document.getElementById("TextSelect").style = "display:contents;";
    document.getElementById("Main").style = "display:none;";
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(300,300);
    canvas.position(600,200);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log('No error');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
function draw(){
    
    document.getElementById("Footer").style.color = "white";

}