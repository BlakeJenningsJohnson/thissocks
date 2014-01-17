(function(){
  document.addEventListener( "DOMContentLoaded", function( e ){
    // Grab canvas
    var cvs = document.querySelector( "#bargraph" ),
      // Get context
      ctx = cvs.getContext( '2d' );
    var drawBarRect = function( rectPercent, color, xCoord ) {
    var rectHeight = rectPercent * 0.9 * ctx.canvas.height;
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
    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';
    ctx.font = '18pt Comic Sans'
    ctx.fillText( rectPercent * 100 + "%", xCoord + 5, ctx.canvas.height -rectHeight/2 );
    ctx.strokeText( rectPercent * 100 + "%", xCoord + 5, ctx.canvas.height -rectHeight/2 );
  };

var mobileUsers = parseInt( document.querySelector("#mobile").innerHTML, 10 );
var nonMobileUsers = parseInt( document.querySelector("#no-mobile").innerHTML, 10 );
var totalUsers = mobileUsers + nonMobileUsers;

var mobilePercent = mobileUsers/totalUsers;
var nonMobilePercent = nonMobileUsers/totalUsers;

  drawBarRect( mobilePercent, '#B8020E', 75);
  drawBarRect( nonMobilePercent, 'black', 175);
  });
})();