

function preload() {

   homicide = loadTable("homicide.csv", "header");
   auto = loadTable("auto.csv", "header");
   narcotics = loadTable("narcotics.csv", "header");
}

function setup() {
  createCanvas(1000,700);
  background(255);
  background(0, 200, 0, 100);

}

function draw() {
  background(0, 200, 0, 200);
  for (var i = 0; i < homicide.getRowCount(); i++) {
    var timedist = homicide.getNum(i, "Time");
    Timer(timedist);
 }

  translate(0, 275, 0, 0);
  for (var i = 0; i < auto.getRowCount(); i++) {
    var timedist_1 = auto.getNum(i, "Time");
    Timer(timedist_1);
 }

 translate(0, 275, 0, 0);
 for (var i = 0; i < narcotics.getRowCount(); i++) {
   var timedist_2 = narcotics.getNum(i, "Time");
   Timer(timedist_2);
 }
}

function Timer (tm, wave) {

  var wave = map(tm, 0, 2359, 0, 100);
    ellipse(random(width), wave, wave, wave);
}
