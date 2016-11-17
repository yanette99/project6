var stitch = document.getElementById("stitch");
var stitchXVal = Number(stitch.getAttribute("x"));
var stitchYVal = Number(stitch.getAttribute("Y"));

document.addEventListener("keydown", function(e) {
 if (e.keyCode == 37) {
   document.getElementById("stitch").setAttribute("x", stitchXVal - 15);
    stitchXVal = stitchXVal - 15;
 }


 if (e.keyCode == 39) {
   document.getElementById("stitch").setAttribute("x", stitchXVal + 15);
    stitchXVal = stitchXVal + 15;
 }


 if (e.keyCode == 38) {
   document.getElementById("stitch").setAttribute("y", stitchYVal - 15);
    stitchYVal = stitchYVal - 15;
 }


 if (e.keyCode == 40) {
   document.getElementById("stitch").setAttribute("y", stitchYVal + 15);
    stitchYVal = stitchYVal + 15;
 }
})
