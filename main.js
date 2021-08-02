var U = "";
function DecideText(){
    U = document.getElementById("Text").value;
    document.getElementById("TextSelect").style = "display:none;";
    document.getElementById("Main").style = "display:contents;";
}

function Back(){
    U = "";
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
var difference;
var nosex;
var nosey;
function modelLoaded(){
    console.log('No error');
}
function draw(){
    console.log(U);

    if(U == ""){
        background("#FFD700");
        fill("#C0C0C0");
        document.getElementById("holdresult").innerHTML = "";
    }else{
        background("#FFD700");
        fill("#C0C0C0");
        text(U,nosex,nosey);
        textSize(floor(difference/7));
        document.getElementById("holdresult").innerHTML = "The length of the text is" + floor(difference) + "px";
    }

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        difference = results[0].pose.leftWrist.x - results[0].pose.rightWrist.x;
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log(nosex);
        console.log(nosey);
    }
}