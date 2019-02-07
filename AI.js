function ai(){
  if(pillar1.y > pillar2.y & pillar1.y > pillar3.y){
    if(box.x>(pillar1.height+gapWidth/2)+20){
      aiKeyRight = 0;
      aiKeyLeft = 1;
    }
    else if(box.x<(pillar1.height+gapWidth/2)-20){
      aiKeyLeft = 0;
      aiKeyRight = 1;
    }
    else{
      aiKeyLeft = 0;
      aiKeyRight = 0;
    }
    if(box.x>pillar1.height & box.x<pillar1.height+gapWidth){
      aiKeyUp = 1;
    }
    else{
      aiKeyUp =0;
    }
  }
  else if(pillar2.y > pillar1.y & pillar2.y > pillar3.y){
    if(box.x>(pillar2.height+gapWidth/2)+20){
      aiKeyRight = 0;
      aiKeyLeft = 1;
    }
    else if(box.x<(pillar2.height+gapWidth/2)-20){
      aiKeyLeft = 0;
      aiKeyRight = 1;
    }
    else{
      aiKeyLeft = 0;
      aiKeyRight = 0;
    }
    if(box.x>pillar2.height & box.x<pillar2.height+gapWidth){
      aiKeyUp = 1;
    }
    else{
      aiKeyUp =0;
    }
  }
  else if(pillar3.y > pillar1.y & pillar3.y > pillar2.y){
    if(box.x>(pillar3.height+gapWidth/2)+20){
      aiKeyRight = 0;
      aiKeyLeft = 1;
    }
    else if(box.x<(pillar3.height+gapWidth/2)-20){
      aiKeyLeft = 0;
      aiKeyRight = 1;
    }
    else{
      aiKeyLeft = 0;
      aiKeyRight = 0;
    }
    if(box.x>pillar3.height & box.x<pillar3.height+gapWidth){
      aiKeyUp = 1;
    }
    else{
      aiKeyUp =0;
    }
  }
}
