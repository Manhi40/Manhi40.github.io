
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var pos = 0;
var gameStatus = 0;
var gapWidth = 1000;
var score = 0;

var Key = {
  _pressed: {},

  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32,

  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },

  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },

  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  }
};

window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

function Box(x,y,velX,velY,color,size){
	this.x = x;
	this.y = y;
	this.velX = velX
	this.velY = velY
	this.color = color;
	this.size = size;
}

function Pillar(start){
	this.x = width+start;
	this.color = 'rgb(255,0,0)';
	this.height = (Math.random() * height * 0.75);
	this.thicc = 300;
}

function EndGame(){
	if(gameStatus){
		ctx.fillStyle = 'rgba(255,0,0,0.25)';
		ctx.fillRect(0,0,width,height);
	}
}


Pillar.prototype.draw = function(){
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x, this.height+gapWidth,this.thicc,(height + this.height+gapWidth));
	ctx.fillRect(this.x,0,this.thicc,this.height);
}

Pillar.prototype.update = function(){
	if(this.x <= 0){
		this.x = (width/2) + 4500;
		this.height = (Math.random() * height * 0.5);
		score++;
	}

	this.x -= 80;
}

Pillar.prototype.collision = function(){
	if((this.x <= (box.x+box.size)) && (this.x >= box.x) && (((box.y) <= (this.height)) || ((box.y+box.size) >= this.height+gapWidth))){
		gameStatus = 1;
	}
}

Box.prototype.draw = function(){
	ctx.save();
	ctx.fillStyle = this.color;
	ctx.translate(this.x+this.size/2,this.y+this.size/2);
	if(this.velY > 0){
		ctx.rotate(.26);
	}
	else if(this.velY < 0){
		ctx.rotate(-.26);
	}

	ctx.fillRect(-this.size/2,-this.size/2,this.size,this.size);

	ctx.restore();
}

Box.prototype.update = function(){
	this.velY += gravity;

  this.x += (this.velX);
  this.y += (this.velY);
  this.velX *= 0.85;
  this.velY *= 0.85;

  if (Key.isDown(Key.UP)) this.y -= 100;
  if (Key.isDown(Key.DOWN)) this.y += 100;


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


function gameReset(){
  box.x = 1000;
  box.y = 1000;
  gameStatus = 0;
  pillar1.x = width + width/2;
  pillar2.x = width + (width/2) + 4500;
  pillar3.x = width + (width/2) + 9000;
  pillar1.height = (Math.random() * height * 0.85);
  pillar2.height = (Math.random() * height * 0.85);
  pillar3.height = (Math.random() * height * 0.85);
  score = 0;

}

var box = new Box(1000,1000,10,0,'rgb(0,255,0)',100);
var pillar1 = new Pillar(width/2);
var pillar2 = new Pillar((width/2)+6000);
var pillar3 = new Pillar((width/2)+12000);

var gravity = 0;

function loop(){
  if(!gameStatus){
    ctx.fillStyle = 'rgba(0,0,0,1)';
  	ctx.fillRect(0,0,width,height);

  	box.update();
  	box.draw();
  	pillar1.update();
  	pillar1.draw();
  	pillar1.collision();

  	pillar2.update();
  	pillar2.draw();
  	pillar2.collision();

  	pillar3.update();
  	pillar3.draw();
  	pillar3.collision();

  	ctx.fillStyle = 'blue';
  	ctx.font = '256px georgia';
  	ctx.fillText(score, width/2, height/8);


  	EndGame();
	}
  else{
    if (Key.isDown(Key.SPACE)){
      gameReset();
    }

  }
	requestAnimationFrame(loop);

}

loop();
