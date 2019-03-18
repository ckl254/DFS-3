//assigning ".circle" class as a "circle" variable
var circle = $(".circle");


$(document).mousemove(function( event ) {
  //assigning event.pageXY as pageXY variable
  var pageX = event.pageX;
  var pageY = event.pageY;
  
  //calling the console to display the coordinates
  console.log(pageX + " : " + pageY);
  
  //getting the circle to follow the cursor by actively updating its position as the mouse's current position
  $(".circle").css({
    "left": pageX + 'px',
    "top": pageY + 'px'
  });
});