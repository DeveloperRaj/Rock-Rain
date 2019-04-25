/*
    stone class to create stones
*/
class Stone{
  
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = random(40, 70);
    //this.w = 50;
    //this.h = 50;
    this.velocity = map(this.size, 40, 70, 1, 2.5);
    this.img = enemyImages[1];
  }
  
  show(){
    fill(0);
    //ellipse(this.x, this.y, this.size, this.size);
    //rect(this.x, this.y, this.size, this.size);
    image(this.img, this.x, this.y, this.size, this.size);
  }
  
  update(){
    this.y = this.y + this.velocity;
  }
  
}
//stone ends
//-------------------------------------------------------------------------------------------------