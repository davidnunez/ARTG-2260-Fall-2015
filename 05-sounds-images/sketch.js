// Code presented in class 2015-10-15


var song;
var song2;
var analyzer;

function preload() {
  song = loadSound('assets/song.mp3');
}

function setup() {
  createCanvas(720, 200);
  background(255, 0, 0);
  song.loop();
  analyzer = new p5.Amplitude();
}

function draw() {
  var vol = analyzer.getLevel();
  var amp = map(mouseX, 0, 720, 0, 1);
  song.amp(amp);

  var pitch = song.rate(map(mouseY, 0, 200, 0, 2));
  //  console.log(mouseX);
  //  console.log(map(mouseX, 0, 720, 0, 1));
  if (song.isPlaying()) {
    background(0, 255, 0);
  } else {
    background(255, 0, 0);
  }
  ellipse(width / 2, height / 2, 10 + vol * 200, 10 + vol * 200);

}

function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}