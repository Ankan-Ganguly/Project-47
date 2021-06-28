var database;
var gameState = 0;
var playerCount;
var game, form,player;
var character=0;

function preload(){
    openingBgImg = loadImage("../images/Opening_BG.jpg");
    playBGImg1 = loadImage("../images/City_BG1.jpg");
    playBGImg2 = loadImage("../images/City_BG2.jpg");
    playBGImg3 = loadImage("../images/City_BG3.jpg");
    caseBGImg = loadImage("../images/Case_BG.jpg");
    knifeImg = loadImage("../images/knife_pic1.png");
    sherlockImg1 = loadImage("../images/transparent1.png")
    sherlockImg2 = loadImage("../images/transparent2.png");
    sherlockImg3 = loadImage("../images/transparent3.png"); 
    sherlockImg4 = loadImage("../images/transparent4.png");
    sherlockImg5 = loadImage("../images/transparent5.png" );
    
    quizS = loadSound("../sound/Sherlock_Theme.mp3");
    caseBS = loadSound("../sound/sherlock_holmes_them.mp3");
    playBS = loadSound("../sound/sherlock-thteme-song.mp3");
    //moriartyWinS = loadSound("../sound/did_you_miss_me.mp3");
    //sherlockWinS = loadSound("../sound/absurdly_simple.mp3");
    //moriartyLoseS = loadSound("../sound/Moriarty_Lost.mp3");
    //sherlockLoseS = loadSound("../sound/Sherlock_Lost.mp3");
}

function setup(){
    createCanvas(displayWidth- 20, displayHeight-30);
    database = firebase.database();
    //form = new Form1();
    game = new Game();
    game.getState();
    game.start();
    coronaGroup = new Group()
    knifeGroup = new Group();
}
function draw(){
    //background(openingBgImg);
    //form.display();
    if(playerCount===2){
        game.update(1);
    }
    if(character === 1){
        if(gameState === 1){
            clear();
            game.case1();
        }
        
        if (gameState === 2 && keyIsDown("space")) {
            clear();
            game.update(3);
            game.play1();
            //spawnKnife();
        }
        
        if (gameState === 3 && player.score === 1) {
            clear();
            game.update(4);
            var quiz1 = new Quiz();
            quiz1.display();
        }
        if (gameState === 4 && player.score === 5) {
            clear();
            game.update(5);
            game.case2();
            
        }
        else if (gameState === 4 && player.score < 5) {
            player.lives--;
        }
            
        if (gameState === 5 && keyIsDown("space")) {
            clear();
            game.update(6);
            game.play2();
            //spawnCorona();
        }
        if (gameState === 6 && player.score === 6) {
            clear();
            game.update(7);
            var quiz2 = new Quiz();
            quiz2.display();
        }
        if (gameState === 7 && player.score === 10) {
            clear();
            game.update(8);
            game.case3();
        }
        else if (gameState === 7 && player.score < 10) {
            player.lives--;
        }
        
        if (gamestate === 8 && keyIsDown("space")) {
            clear();
            game.update(9);
            game.play3();
            //spawnKnife();
        }
        if (gameState === 9 && player.score === 11) {
            clear();
            game.update(10);
            var quiz3 = new Quiz();
            quiz3.display();
        }
        if (gameState === 10 && player.score === 15) {
            clear();
            game.update(11);
            game.case4();
        }
        else if (gameState === 710 && player.score < 15) {
            player.lives--;
        }

        if (gamestate === 11 && keyIsDown("space")) {
            clear();
            game.update(12);
            game.play4();
        }
        if (gameState === 12 && player.score === 16) {
            clear();
            game.update(13);
            var quiz3 = new Quiz();
            quiz3.display();
        }
        if (gameState === 13 && player.score === 20) {
            game.end1();
        }
        else if (gameState === 13 && player.score < 20) {
            player.lives--;
        }
        if(gameState === 13 && player.lives===0){
        game.end2();
        }
}
if(character === 2){
        if(gameState === 1){
            clear();
            game.case1();
        }
        
        if (gameState === 2 && keyIsDown("space")) {
            clear();
            game.update(3);
            game.play1();
        }
        
        if (gameState === 3 && player.score === 1) {
            clear();
            game.update(4);
            var quiz1 = new Quiz();
            quiz1.display();
        }
        if (gameState === 4 && player.score === 5) {
            clear();
            game.update(5);
            game.case2();
            
        }
        else if (gameState === 4 && player.score < 5) {
            player.lives--;
        }
            
        if (gameState === 5 && keyIsDown("space")) {
            clear();
            game.update(6);
            game.play2();
            //spawnCorona();
        }
        if (gameState === 6 && player.score === 6) {
            clear();
            game.update(7);
            var quiz2 = new Quiz();
            quiz2.display();
        }
        if (gameState === 7 && player.score === 10) {
            clear();
            game.update(8);
            game.case3();
        }
        else if(gameState === 7 && player.score < 10){
        player.lives--;
        }
        
        if (gamestate === 8 && keyIsDown("space")) {
            clear();
            game.update(9);
            game.play3();
        }
        if (gameState === 9 && player.score === 11) {
            clear();
            game.update(10);
            var quiz3 = new Quiz();
            quiz3.display();
        }
        if (gameState === 10 && player.score === 15) {
            clear();
            game.update(11);
            game.case4();
        }
        else if (gameState === 10 && player.score < 15) {
            player.lives--;
        }
        if (gamestate === 11 && keyIsDown("space")) {
            clear();
            game.update(12);
            game.play4();
        }
        if (gameState === 12 && player.score === 16) {
            clear();
            game.update(13);
            var quiz3 = new Quiz();
            quiz3.display();
        }
        if (gameState === 13 && player.score === 20) {
            game.end1();
        }
        else if (gameState === 13 && player.score <20) {
            player.lives--;
        }
        if(gameState === 13 && player.lives === 2){
        game.end2();
        }
    }
}
function spawnCorona(){
    if (frameCount % 50 === 0){
        corona = createSprite(displayWidth-80, displayHeight/3+50);
        corona.velocityX = -4;
        corona.lifetime = 1350;
        coronaGroup.add(corona);
    }
}
    function spawnKnife() {
        if (frameCount % 25 === 0) {
            knife = createSprite(displayWidth - 80, displayHeight / 3 + 50);
            knife.velocityX = -4.5;
            knife.lifetime = 1350;
            knifeGroup.add(knife);
        }

    }