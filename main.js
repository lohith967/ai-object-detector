objects = [];
status = "";


function setup() {
  canvas = createCanvas(280, 280);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(280,280);
  video.hide();
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
}

function start()
{
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
  object_name = document.getElementById("object_name").value;
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}
function draw(){
    image(video, 0, 0, 280, 280);
}