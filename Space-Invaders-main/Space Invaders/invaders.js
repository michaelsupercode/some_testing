//board
let tileSize = 32;
let rows=16;
let columns=16;

let board;
let boardWidth = tileSize*columns;
let boardHeight= tileSize*rows;
let context;

//score
let score=0;
//win or loss?
let gameOver = false;

//tank
let tankWidth = tileSize*2;
let tankHeight = tileSize;
let tankX = tileSize * columns/2 - tileSize;
let tankY = tileSize * rows - tileSize*2;

let tank = {
    x: tankX,
    y: tankY,
    width: tankWidth,
    height:tankHeight
}

let tankImg;
let tankVelocityX=tileSize;

//bullets
let bulletArray=[];
let bulletVelocityY = -10;

//invaders
let invaderArray=[];
let invaderWidth = tileSize*2;
let invaderHeight = tileSize;
let invaderX = tileSize;
let invaderY = tileSize;
let invaderImg;

let invaderRows = 2;
let invaderColumns =3;
let invaderCount=0;
let invaderVelocityX = 1;

//setting the stage
window.onload = function() {
board = document.getElementById("board");
board.width = boardWidth;
board.height =boardHeight;
context = board.getContext("2d");

//preparing the invasion
invaderImg = new Image();
invaderImg.src = "./img/invader.png"
unleashInvaders();

//arming the tank
tankImg = new Image();
tankImg.src="./img/tank.png";
tankImg.onload = function() {
context.drawImage(tankImg, tank.x, tank.y, tank.width, tank.height);
}
requestAnimationFrame(update);
document.addEventListener("keydown", moveTank);
document.addEventListener("keyup", shoot);
}

//updating the board
function update(){
    requestAnimationFrame(update);
    if(gameOver){
        return;
    }

    context.clearRect(0,0, board.width,board.height) //else you draw all over the x axis when you move
    //tank
    context.drawImage(tankImg, tank.x, tank.y, tank.width, tank.height);
    //invaders
    for(let i=0;i<invaderArray.length;i++ ){
        let invader = invaderArray[i];
        if(invader.alive){
            invader.x += invaderVelocityX; //careful, they'll invade somewhere off the screen on your computer if you don't implement the following:
            if(invader.x +invader.width >= board.width || invader.x <=0){
                invaderVelocityX*=-1;
                invader.x += invaderVelocityX*2; //so they stay in sync, otherwise the first that touches the edge will move out of sync
                //to make them advance
                for(let a=0; a<invaderArray.length; a++ ){
                    invaderArray[a].y += invaderHeight;
                }
            }
            
            context.drawImage(invaderImg, invader.x,invader.y, invader.width,invader.height);
            if(invader.y>=tank.y){
                gameOver=true;
            }
        }
    }
    //bullet time!
for(let b=0;b<bulletArray.length;b++){
    let bullet = bulletArray[b];
    bullet.y += bulletVelocityY;
    context.fillStyle="white";
    context. fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    //shoot them down! (invader collision)
    for(let a=0;a<invaderArray.length; a++){
        let invader = invaderArray[a];
        if(!bullet.used && invader.alive && detectColision(bullet, invader)){
            bullet.used = true;
            invader.alive = false;
            invaderCount--;
            score += 100;
    }
}
}
//clear bullets when they exit the screen
while(bulletArray.length >0 && (bulletArray[0].used||bulletArray[0].y <0)){
    bulletArray.shift(); //removes the first bullet from array to prevent the game from slowing down when bullets accumulate
}
//next level
if(invaderCount ==0){
    invaderColumns = Math.min(invaderColumns +1, columns/2 -2); //hardcap at 16/2 -2 = 6 columns max; prevents spawns outside of the board
    invaderRows = Math.min(invaderRows +1, rows-4); //hardcap at 16-4 = 12; you need some space on the screen to navigate + see above
//spice up the speed for every level
if
(invaderVelocityX >0){
invaderVelocityX += 0.3;
} else{
    invaderVelocityX-=0.3;      
}
invaderArray=[];
bulletArray=[];
unleashInvaders();
}
context.fillStyle="white";
context.font="16px courier";
context.fillText(score, 5,20);
}

//unleashing the invaders
function unleashInvaders(){
    for (let c=0; c<invaderColumns; c++){
        for(let r=0; r<invaderRows; r++){
            let invader ={
                img: invaderImg,
                x: invaderX + c*invaderWidth,
                y: invaderY + r*invaderHeight,
                width:invaderWidth,
                height:invaderHeight,
                alive: true
            }
            invaderArray.push(invader);
        }
    }
    invaderCount = invaderArray.length;
}

//tank controls
function moveTank(e){
    if(gameOver){
        return;
}
    if
    (e.code == "ArrowLeft" &&tank.x -tankVelocityX >=0 /*so you don't exit the board*/){
        tank.x -= tankVelocityX;
    }
    else if
        (e.code == "ArrowRight"&& tank.x + tankVelocityX + tank.width <= board.width){
            tank.x += tankVelocityX;
        }
}

//Purge the xenos! For the Emperor!
function shoot(e){
    if(gameOver){
        return;
    }
    if(e.code == "Space"){
        let bullet ={
            x: tank.x + tankWidth*15/32,
            y: tank.y,
            width: tileSize/8,
            height: tileSize/2,
            used:false
        }
        bulletArray.push(bullet);
    }
}

function detectColision(n,m){
return n.x < m.x + m.width &&
n.x +n.width>m.x &&
n.y <m.y + m.height &&
n.y +n.height>m.y;
}