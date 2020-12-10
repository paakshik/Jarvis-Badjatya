class Rain {
constructor(x,y,color,speed,width,height){
this.x= x;
this.y = y;
this.color = color;
this.speed = speed;
this.width = width;
this.height = height;
}
move()  {
 this.y += this.speed;
 if (this.y > 400){
     this.y = 0;
 }
}
show() {
ellipse(this.x,this.y,this.width,this.height);
}
}