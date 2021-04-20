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
