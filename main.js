                    //----------------- CONTROLS -----------------\\ 
                    //                                            \\
                    //    Q: Increases red                        \\
                    //    W: Increases green                      \\
                    //    E: Increases blue                       \\
                    //    A: Decreases red                        \\
                    //    S: Decreases green                      \\
                    //    D: Decreases blue                       \\
                    //    R: Set pen colour to black              \\
                    //    T: Set pen colour to white              \\
                    //    Z: Increase amount colour changes by    \\         
                    //    X: Decrease amount colour changes by    \\
                    //    Up arrow: Increase pen size             \\
                    //    Down arrow: Decrease pen size           \\
                    //                                            \\
                    //--------------------------------------------\\

class Sqaure{
  
  constructor(x,y,s){
    
    this.x = x;
    this.y = y;
    this.s = s;
    
    
    this.col = [255,255,255]
    
  }
  
  show(){
    fill(this.col[0],this.col[1],this.col[2])
    rect(this.x,this.y,this.s,this.s)
    
  }
  
}

class Pen{
  
  constructor(){
    
    this.x = mouseX;
    this.y = mouseY;
    this.s = 4

    
    this.col = [0,0,0]
    
  }
  
}

function setup() {
  createCanvas(500, 500);
  
  gridSize = 20;
  gridParts =[]
  mouse = false;
  pen = new Pen()
    amount = 5;
  colours = []
  
  for(h = 0; h < height/gridSize; h++){
    
    for(w = 0; w < width/gridSize; w++){
    
        
        gridParts.push(new Sqaure(gridSize * w, gridSize * h, gridSize))
        
      
    }

  }
  
}

function draw() {
  background(220);

  //console.log(mouse)
  
  pen.x = mouseX - pen.s/2
  pen.y = mouseY - pen.s/2
  
  RGB_Value_Check(pen)
  
  for(i = 0; i < gridParts.length; i++){
    
    gridParts[i].show();
    detect_press(pen,gridParts[i])
    
  }
  //console.log(pen.col)
  console.log(amount)
}

function mousePressed(){
  
  mouse = true
 
}

function mouseReleased(){
  
  mouse = false
  
}


function mouseDragged() {
  
  mouse = true
  
}

function RGB_Value_Check(pen){ //RGB value check is its own function to stop overloading functions with too much code
  
  if(pen.col[0] >=255){
    
   pen.col[0] = 255 }
  
  else if(pen.col[1] >=255){
   pen.col[1] = 255
  }
          
  else if(pen.col[2] >=255){
   pen.col[2] = 255
  }
                                //MMM SPAGHETTI
  if(pen.col[0] <=0){
   pen.col[0] = 0
  }
    
  else if(pen.col[1] <=0){
   pen.col[1] = 0
  }
    
  else if(pen.col[2] <=0){
   pen.col[2] = 0
  }
  
  if(amount <= 0){
    amount = 0
    
  }else if(amount >= 255){amount = 255}
  
  if(pen.s >= 40){
    pen.s = 40;
    
  }else if(pen.s <=0){pen.s = 0;}
}

function detect_press(pen,pixel){
  
  if (pen.x < pixel.x + pixel.s &&
   pen.x + pen.s > pixel.x &&
   pen.y < pixel.y + pixel.s &&
   pen.y + pen.s > pixel.y) {
    
    //console.log("Collision")
    if(mouse == true){
      //console.log("Drawing")
      pixel.col[0] = pen.col[0]; 
      pixel.col[1] = pen.col[1]; 
      pixel.col[2] = pen.col[2]; 
    }
}
    
}

function keyPressed(){ //This function is a long one... it looks gross
  
  // a = 65 ||  q = 81 || w = 87 || e = 69 ||
  // s = 83 ||  d = 68 || t = 84 || g = 71 || <-- keycodes for switch case 
  // c = 67 ||  r = 82 || 38 = ^ || 40 = v ||     functionality
  // z = 90 ||  x = 88 ||
  

  switch(keyCode){
      
    case 65:
      
      pen.col[0] -= amount;
      break;
  
    case 83:
      pen.col[1] -= amount;
      break;
      
    case 68:
      pen.col[2] -= amount;
      break;
      
    case 81:
      pen.col[0] +=amount;
      break;
      
    case 87:
      pen.col[1] +=amount;
      break;
      
    case 69:
      pen.col[2] +=amount;
      break;
      
    case 82:
      
      pen.col[0] = 0;
      pen.col[1] = 0;
      pen.col[2] = 0;
      break;
    
    case 84:
      pen.col[0] = 255;
      pen.col[1] = 255;
      pen.col[2] = 255;
      break;
    
    case 90:
      amount += 5
      
      break;  
    
    case 88:
      amount -= 5;
      break;
    
    case 38:
      pen.s += 4
      break;
    case 40:
      pen.s -= 4
      break;
      
    case 67:
        for(i = 0; i < gridParts.length; i++){
          gridParts[i].col[0] = 255;
          gridParts[i].col[1] = 255;
          gridParts[i].col[2] = 255;
        }
      break;
      
    }
  
  
// console.log(keyCode)
}
