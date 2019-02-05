function Pillar(start){
	this.y = start;
	this.color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	this.height = (Math.random() * width * 0.75);
	this.thicc = 300;
	this.barrier = 10;
}

Pillar.prototype.draw = function(){
	if(this.barrier > 0){
		ctx.fillStyle = 'rgb(255,255,255)';
		ctx.fillRect(this.height,this.y+100,this.height+gapWidth,this.thicc-200);
	}
	ctx.fillStyle = this.color;
	ctx.fillRect(this.height+gapWidth,this.y,(width + this.height+gapWidth),this.thicc);
	ctx.fillRect(-20000,this.y,this.height+20000,this.thicc);

}

Pillar.prototype.update = function(){
	if(this.y >= height){
		this.y = -(width);
		this.height = (Math.random() * height * 0.5);
    this.color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		this.barrier = 10;
		score++;
	}
	this.y += 50+(score);
}

Pillar.prototype.collision = function(){
	if(((this.y + this.thicc)>=(box.y)) && (this.y < box.y) && ((box.x <= this.height) || (box.x+box.size >= this.height+gapWidth))){
		gameStatus = 1;
	}
	else if(this.y+this.thicc >= box.y && this.barrier > 0) gameStatus = 1;
}

Pillar.prototype.Barrier = function(x){
	if(x>this.height && x<this.height+gapWidth && this.y >0) this.barrier--;
}
