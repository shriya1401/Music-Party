song=""
leftWristX=0
leftWristY=0
rightWristX=0
rightWristY=0

function preload(){
 song=loadSound("music.mp3")
}


function setup(){
    canvas=createCanvas(600,600);
    canvas.center();

    video=createCapture(VIDEO)
    video.hide();

 poseNet=ml5.poseNet(video, modelloaded);
poseNet.on("pose",gotPoses);


}

function draw(){
    image(video,0,0,600,600);
}


function play(){
    song.play()
    song.setVolume(1);
    song.rate(1.5);
    

}

function stop(){
    song.stop()
}


function modelloaded(){
    console.log("Model has been loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
       leftWristX=results[0].pose.leftWrist.x;
       leftWristY=results[0].pose.leftWrist.y;
       rightWristX-=results[0].pose.rightWrist.x;
       rightWristY=results[0].pose.rightWrist.y;
       console.log("leftWristX= " + leftWristX);
       console.log("leftWristY=" + leftWristY);
       console.log("rightWristX=" + rightWristX);
       console.log("rightWristY=" + rightWristY);
    }
}



