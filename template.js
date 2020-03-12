//template
//最初に1度だけ実行される
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(100);
}

//何度も実行される
function draw() {
    ellipse(mouseX, mouseY, 20, 20);
}

//教材のテンプレート
//1.背面と木の幹を描画する
function setup() {
    createCanvas(windowWidth, windowHeight);
    //背面色を水色にする
    background('#f0f8ff');

    //長方形を茶色で塗りつぶす
    fill('#8b4513');
    //長方形の枠線を消す
    noStroke();
    //左上の座標が(500, 300)、横幅100、縦幅250の長方形を描く
    rect(500, 300, 100, 250);
}

function draw() {
    ellipse(mouseX, mouseY,
}



//2.マウスを動かして花を咲かせる
function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#f0f8ff');

    fill('#8b4513');
    noStroke();
    rect(500, 300, 100, 250);
}

function draw() {
    //円をピンクで塗りつぶす
    fill('#ff89c4');
    //中心がマウスの位置、横幅20、縦幅20の円を描く
    ellipse(mouseX, mouseY, 20, 20);
}