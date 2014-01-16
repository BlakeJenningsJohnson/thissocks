(function(){
  document.addEventListener( "DOMContentLoaded", function( e ){
    var canv = document.querySelector( '#cvs' ); //document.getElementById( 'cvs' );
    var context = canv.getContext( '2d' );
    context.fillStyle = 'black';
    context.beginPath();

    var radToCart = function( radiusLength, radians ){
      var coords = {};
      coords.x = radiusLength/2 * Math.cos( radians/2 );
      coords.y = radiusLength/2 * Math.sin( radians/2 );
      return coords;
    };

    var x = canv.width/2;
    var y = canv.height/2;
    var radius = (function(){
      var rad;
      if( x < y ){
        return x;
      }
      return y;
    }());
    var counterClockwise = true;

    var fillcolor = 'black';

    var newEl = document.querySelector("#onetime");
    var returnEl = document.querySelector("#returners");
    var newVis = parseInt(newEl.innerHTML, 10 );
    var retVis = parseInt(returnEl.innerHTML, 10 );
    var totalVis = newVis + retVis;

    var newInRad = (newVis/totalVis) * 2 * Math.PI;
    var retInRad = (retVis/totalVis) * 2 * Math.PI;

    var newPerc = Math.round(newVis/totalVis * 100);
    var retPerc = 100 - newPerc;

    var startDeg = 0;
    endDeg = newInRad;

    context.beginPath();
    context.moveTo( x, y );

    context.arc( x, y, radius, startDeg, endDeg, counterClockwise );
    context.fill();
    context.closePath();
    context.fillStyle = fillcolor;
    context.fill();

    var fillcolor = '#B8020E';
    startDeg = endDeg;
    endDeg = 0;

    context.beginPath();
    context.moveTo( x, y );
    context.arc( x, y, radius, startDeg, endDeg, counterClockwise );
    context.fill();
    context.closePath();
    context.fillStyle = fillcolor;
    context.fill();

    context.strokeStyle = 'white';
    context.fillStyle = 'white';
    context.font = '24pt Comic Sans';

    var newPercCoords = radToCart( radius, newInRad );
    context.fillText( newPerc + "%", x+newPercCoords.x, y+newPercCoords.y );
    context.strokeText( newPerc + "%", x + newPercCoords.x, y+newPercCoords.y);

    var retPercCoords = radToCart( radius, retInRad );
    context.fillText( retPerc + "%", x+retPercCoords.x, y-retPercCoords.y );
    context.strokeText( retPerc + "%", x + retPercCoords.x, y-retPercCoords.y);
  });
}());
