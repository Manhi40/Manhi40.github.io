function Star(){
  this.x = ((Math.random()-0.5) * 2 * width);
  this.y = (Math.random() * height);
  this.width = (Math.random() * 3)+1;
  this.length = (Math.random() * 70) + 50;
  this.speed = (Math.random() * 25) + 5;
}

Star.prototype.draw = function(){
  ctx.strokeStyle = 'rgb(255,255,255)';
  ctx.lineWidth = this.width;
  ctx.beginPath();
  ctx.moveTo(this.x,this.y);
  ctx.lineTo(this.x,this.y+this.length);

  ctx.stroke();
}

Star.prototype.update = function(){
  this.y += this.speed;

  if(this.y >= height){
    this.x = ((Math.random()-0.5) * 2 * width)
    this.width = (Math.random() * 3)+1;
    this.length = (Math.random() * 70) + 25;
    this.speed = (Math.random() * 25) + 5;
    this.y = -(this.length);
  }
}
