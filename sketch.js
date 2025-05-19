let images = [];
let currentIndex = 0;
let switchInterval = 30000; // 30 seconds
let lastSwitchTime = 0;
let bgMusic;

function preload() {
  // Load your 5 images here (adjust paths/names as needed)
  images[0] = loadImage('image1.jpg');
  images[1] = loadImage('image2.jpg');
  images[2] = loadImage('image3.jpg');
  images[3] = loadImage('image4.jpg');
  images[4] = loadImage('image5.jpg');
   // Load your audio file
   bgMusic = loadSound('your-music.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Set your desired canvas size
  lastSwitchTime = millis(); // Start the timer
  bgMusic.loop();
}

function draw() {
  background(0);

  // Display current image
  if (images[currentIndex]) {
    image(images[currentIndex], 0, 0, windowWidth, windowHeight);
  }

  // Check if it's time to switch
  if (millis() - lastSwitchTime >= switchInterval) {
    currentIndex = (currentIndex + 1) % images.length; // Loop through 0–4
    lastSwitchTime = millis(); // Reset timer
    background(200);
    text('Background music is playing...', 50, 200);
  }
  function mousePressed() {
    if (!bgMusic.isPlaying()) {
      bgMusic.loop();
    }
  }
}
