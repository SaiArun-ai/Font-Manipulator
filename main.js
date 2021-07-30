var r;
var g;
var b;
var text;
function setup(){
    document.getElementById("TextSelect").style = "display:contents;";
    document.getElementById("Main").style = "display:none;";
}
function draw(){
    
    document.getElementById("Footer").style.color = "white";

}

function DecideText(){
    text = document.getElementById("Text").value;
    document.getElementById("TextSelect").style = "display:none;";
    document.getElementById("Main").style = "display:contents;";
}

function Back(){
    document.getElementById("TextSelect").style = "display:contents;";
    document.getElementById("Main").style = "display:none;";
}