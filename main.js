function preload(){

}

function setup() {
    createCanvas(400, 400);
    video = createCapture(VIDEO);
    video.hide()

    tint_color = "";
  }
  
  function draw() {
    
    image(video, 50, 80, 300, 250);
    tint(tint_color);


    stroke(219, 76, 66);
    fill(219, 76, 66);
    
    rect(15, 35, 30, 330);
    rect(355, 35, 30, 330);
    rect(33, 15, 330, 30);
    rect(33, 355, 330, 30);
    
     stroke(66, 183, 219);
    fill(66, 183, 219);
    
    circle(30, 30, 50);
    circle(370, 30, 50);
    circle(370, 370, 50);
    circle(30, 370, 50);
  }

  function take_snapshot(){
    save("Myframe.png")
  }

  function filter_tint(){
    tint_color= document.getElementById("color_name").value;
}
