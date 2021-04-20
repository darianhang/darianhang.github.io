var Words = [
  "Car", "Truck", "Back seat", "Front seat", "Mirror", "Wheels", "Tire", "Rim", "Bike", "Hill", "Mountain", "Phone", "Computer", "Monitor", "Keyboard", "Mouse", "Video Game", "Board Game", "TV", "Sofa", "Chair", "Music", "Headphones", "Speaker", "Cable", "Snake", "Dog", "Cat", "Cow", "Horse", "Disney", "Pixar", "Marvel", "DC", "ACDC", "Beatles", "Memes", "Flag", "Germany", "Canada", "France", "England", "Scotland", "USA", "Finland", "Switzerland", "Bus", "Plane", "Boat", "Sail Boat", "Speed Boat", "Moon", "Sun", "Mars", "Saturn", "Pluto", "Uranus", "Mercury", "Neptune", "Octopus", "Base Ball Hat", "Cowboy Hat", "Cherry Bush", "Cranberry Bush", "Apple Tree", "Starwars"," Tetris", "Pictionary", "Laptop", "PC", "GPU", "CPU", "cup", 
];
var RandomWord = Words[Math.floor(Math.random()*Words.length)];
alert("Your word is: " + RandomWord);
var Anwser;
// Awnser = prompt("Guess the word: ");
if (Anwser === RandomWord) {
  alert("You're correct the word was: " + RandomWord);
  Anwser = prompt("Guess again")
}
/*
 * This part of the code makes a function that 
 * tracks your mouse movements and makes the coulor of the line white
 p
 r
 */
function mouseDragged() {
  fill(51);
}

var canvas = document.querySelector("canvas")
var ctx = canvas.getContext("2d");

canvas.width = document.body.offsetWidth
canvas.height = document.body.offsetHeight;
let mousedown = false;
let lastX = 0;
let lastY = 0;

ctx.strokeStyle = 'grey';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

function draw(e){
  if(mousedown === false) return;

  ctx.strokeStyle;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
  lastX = e.offsetX
  lastY = e.offsetY

}

canvas.addEventListener("mousemove", draw)

canvas.addEventListener("mousedown", function(e){
  lastX = e.offsetX;
  lastY = e.offsetY;
  mousedown = true
})
canvas.addEventListener("mouseup", function(){
  mousedown = false
});

// Controls
$('button').click( function(){
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);

});

$('a').click(function() {
  
  // console.log( this.dataset.color );
  ctx.strokeStyle = this.dataset.color;
  
});


// $('a').click( function(){
  
//   console.log( this.dataset.color );
  
//   ctx.strokeStyle = this.dataset.color;

// });
