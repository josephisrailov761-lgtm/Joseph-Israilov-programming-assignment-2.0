function setup() {
  createCanvas(500, 500); // Create a 500x500 canvas
}

function draw() {
  background(0, 0, 150); // Darker blue background (RGB for dark blue)

  // Outer thin ring (like Saturn's ring)
  stroke(255, 255, 0);   // Yellow stroke
  strokeWeight(2);       // Thin stroke
  noFill();              // No fill, just outline
  ellipse(250, 250, 400, 400); // Slightly bigger than main circle

  // Main yellow circle
  stroke(255, 255, 0);   // Yellow stroke
  strokeWeight(2);       // Thin border
  fill(255, 255, 0);     // Yellow fill
  ellipse(250, 250, 200, 200); // Main circle

  // Inner smaller thicker circle
  stroke(255, 255, 0);   // Yellow stroke
  strokeWeight(6);       // Thicker stroke
  fill(255, 255, 0);     // Yellow fill
  ellipse(250, 250, 100, 100); // Smaller circle inside
}
