/*
  class player to make player
*/
class Player{
  show(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.img = player_img;
    if (x < 0){x = 0}
    if (x > window_width - player_width) {x = window_width - player_width;}
    if (old_x < this.x){lr = 0;}
    if (old_x > this.x){lr = 1;}
    old_x = x;
    //rect(this.x, this.y, this.w, this.h);
    image(this.img[lr], this.x, this.y, this.w, this.h);
  }
}
//player ends
//-------------------------------------------------------------------------------------------------