(function(){
  document.addEventListener( "DOMContentLoaded", function( e ){
    // Grab canvas
    var cvs = document.querySelector( "#bargraph" ),
      // Get context
      ctx = cvs.getContext( '2d' );
    var drawBarRect = function( rectPercent, color, xCoord ) {
    var rectHeight = rectPercent * 0.8 * ctx.canvas.height;
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
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'black';
    ctx.font = '18pt Comic Sans';
    var percentText = Math.round(rectPercent * 100) + "%"
    ctx.fillText( percentText, xCoord + 5, ctx.canvas.height -rectHeight - 5 );
    ctx.strokeText( percentText, xCoord + 5, ctx.canvas.height -rectHeight - 5 );
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