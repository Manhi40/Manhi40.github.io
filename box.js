function Box(x,y,velX,velY,color,size){
	this.x = x;
	this.y = y;
	this.velX = velX
	this.velY = velY
	this.color = color;
	this.size = size;
  this.laserX = x;
  this.laserY = y;
}


Box.prototype.draw = function(){
	ctx.save();
	ctx.fillStyle = this.color;
	ctx.translate(this.x+this.size/2,this.y+this.size/2);
	if(this.velX > 1){
		ctx.rotate(.526);
	}
	else if(this.velX < -1){
	  ctx.rotate(-.526);
	}
	/*
  ctx.beginPath();
  ctx.moveTo(0,-10);
  ctx.lineTo(10,10);
  ctx.lineTo(0,5);
  ctx.lineTo(-10,10);
  ctx.lineTo(0,-10);
  ctx.fill();
	*/
	ctx.drawImage(img,-25,-25,50,50* img.height/img.width);

	//ctx.fillRect(-this.size/2,-this.size/2,this.size,this.size);

	ctx.restore();
}

Box.prototype.update = function(){
	this.velY += gravity;

  this.velX *= 0.85;
  this.velY *= 0.85;

  if (Key.isDown(Key.UP) | aiKeyUp) this.laser();
  //if (Key.isDown(Key.DOWN)) this.y += 100;
  if (Key.isDown(Key.LEFT) | aiKeyLeft){
     this.x -= 20;
		 this.velX =-1.1;
		 if(this.x>0){
	     ctx.translate(5,0);
			 canTran +=5;
	 		}
     rotate++;
   }
  if (Key.isDown(Key.RIGHT) | aiKeyRight){
     this.x += 20;
		 this.velX =1.1;
		 if(this.x<width){
	     ctx.translate(-5,0);
			 canTran -= 5;
	 	 }
		 rotate--;
   }
   else{
     rotate = 0;
   }



	if((this.x + this.size - 1) > width) {
    //this.velX = -(this.velX);
	this.x = width-this.size;
  }

  if((this.x - this.size) <= 0) {
	  this.x = this.size;
    //this.velX = -(this.velX);
  }

  if((this.y + this.size - 1) > height) {
    //this.velY = -(this.velY);
	//this.y = height-this.size;
	gameStatus = 1;
  }

  if((this.y) <= 0) {
	gameStatus = 1;
	  //this.y = this.size;
    //this.velY = -(this.velY);
  }

}

Box.prototype.laser = function(){
	ctx.strokeStyle  = 'rgb(255,0,0)'
	ctx.lineWidth = 2;
	ctx.beginPath();
	ctx.moveTo(this.x+5,this.y);
	ctx.lineTo(this.x+5,0);
	ctx.stroke();
	pillar1.Barrier(this.x+5);
	pillar2.Barrier(this.x+5);
	pillar3.Barrier(this.x+5);
}
