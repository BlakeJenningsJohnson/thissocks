(function(){
  document.addEventListener( "DOMContentLoaded", function( e ){
    // Grab canvas
    var cvs = document.querySelector( "#bargraph" ),
      // Get context
      ctx = cvs.getContext( '2d' );
    var drawBarRect = function( rectHeight, color, xCoord ) {
    var origin = {
      x: xCoord,
      y: ctx.canvas.height
    };
    var dimensions = {
      width: 50,
      height: rectHeight
    };
    var fillColor = color;

    // Begin Drawing
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    //x, y, width, height
    ctx.rect(origin.x,
             origin.y - dimensions.height,
             dimensions.width,
             dimensions.height);
    ctx.stroke();
    ctx.fill();
  };

var mobileUsers = parseInt( document.querySelector("#mobile").innerHTML, 10 );
var nonMobileUsers = parseInt( document.querySelector("#no-mobile").innerHTML, 10 );
var totalUsers = mobileUsers + nonMobileUsers;

var mobileHeight = mobileUsers/totalUsers * 0.9 * ctx.canvas.height;
var nonMobileHeight = nonMobileUsers/totalUsers * 0.9 * ctx.canvas.height;

  drawBarRect( mobileHeight, '#B8020E', 75);
  drawBarRect( nonMobileHeight, 'black', 175);
  });
})();