leftWristX=0
rightWristX=0
difference=0
function setup(){
    video=createCapture(VIDEO);
    video.size(750,750);

    canvas=createCanvas(750,750);

   

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
       rightWristX=results[0].pose.rightWrist.x;
        
        difference=floor(leftWristX - rightWristX);
    }
}
function modelLoaded(){
    console.log('PoseNet is initialized')
}
function  draw(){
    background('#808080');
   fill('green');
   text('Adhrit',50,400);
   textSize(difference);
}