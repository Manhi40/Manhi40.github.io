
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var pos = 0;
var gameStatus = 0;
var gapWidth = 150;
var score = 0;
var canTran = 0;

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



function EndGame(){
	if(gameStatus){
		ctx.fillStyle = 'rgba(255,0,0,0.25)';
		ctx.fillRect(-2000,-2000,3*width,5*height);
	}
}



function gameReset(){
  ctx.restore();
  ctx.translate(-(canTran),0);
  canTran = 0;
  box.x = width/2;
  box.y = height*0.9;
  gameStatus = 0;
  pillar1.y = 0;
  pillar2.y = -(height);
  pillar3.y = -height*2;
  pillar1.height = (Math.random() * width * 0.85);
  pillar2.height = (Math.random() * width * 0.85);
  pillar3.height = (Math.random() * width * 0.85);
  score = 0;

}

var box = new Box(width/2,height*0.9,10,0,'rgb(0,255,0)',10);
var pillar1 = new Pillar(0);
var pillar2 = new Pillar((-height));
var pillar3 = new Pillar(-(height*2));
var rotate = 0;
var rotPos =0;
var gravity = 0;
var stars = [];
var bob = new Star();
var i;
var speed = 5;



function loop(){

  if(stars.length < 150){
    var star = new Star();
    stars.push(star);
  }

  if(!gameStatus){
    ctx.save();
    ctx.fillStyle = 'rgba(0,0,0,1)';
  	ctx.fillRect(-2000,-2000,4*width,4*height);

    for(i=0;i<stars.length;i++){
      stars[i].update();
      stars[i].draw();
    }

    bob.draw();
    bob.update();

  	pillar1.update();
  	pillar1.draw();
  	pillar1.collision();

  	pillar2.update();
  	pillar2.draw();
  	pillar2.collision();

  	pillar3.update();
  	pillar3.draw();
  	pillar3.collision();

    box.update();
    box.draw();
    ctx.save();
  	ctx.fillStyle = 'blue';
  	ctx.font = '72px arial';

    ctx.translate(-(canTran),0);
  	ctx.fillText(score, width/2, height/8);
    ctx.restore();

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
