function setup() {
  createCanvas(700, 700);
  background(200,200,400)

//back hair
  fill(100, 100, 150)
  ellipse(350, 350, 340, 480);

//base
  fill('#FFEDD6')
  arc(220, 350, 100, 100, 100, PI + QUARTER_PI, OPEN)
  rect(290, 350, 120, 250)
  ellipse(350, 330, 290, 340)
  ellipseMode(RADIUS);

//face
  stroke(120)
  line(300, 300, 220, 340)
  line(400, 300, 480,340)
  fill(0, 0, 90)
  circle (300, 350, 10)
  circle (400, 350, 10)
  fill(240, 246, 255)
  circle(305,345,5)
  circle(395, 345, 5)
  stroke(0)
  fill(100, 40, 90)
  triangle(330, 475, 358, 420, 386, 475);

// bangs
  fill(100, 100, 150)
  bezier(360, 120, 210, 450, 200, 450, 200, 290)
  bezier(340, 120, 500, 450, 525, 450, 474, 185)
  bezier(370, 120, 210, 200, 200, 200, 200, 290)
  bezier(350, 140, 420, 300, 350, 320, 280, 330);

// body
  fill(202, 222, 204)
  rect(150, 550, 400, 300);

// earrings
fill(250,250,250)
rect(210, 396, 6, 20)
rect(200, 391, 6, 18)
rect(190, 386, 6, 15)

// shirt
  noStroke(0,0,0)
  fill(300,300,300)
  ellipse(450, 650, 20, 20)
  rect(452, 610 ,8, 30)
  rect(440, 610 ,8, 30)
  fill(0,0,0)
  circle(440, 652,1,5)
  circle(460, 652,1,5)
  circle(450, 660, 1,2);

}
