function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}


var stitch = document.getElementById("stitch");
var stitchXVal = Number(stitch.getAttribute("x"));
var stitchYVal = Number(stitch.getAttribute("Y"));
var height = 80;
var width= 80;
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




 //get currect posistion for Food and for  player
 var foodY = Number(document.getElementById("burger").getAttribute("y"))
 var foodX = Number(document.getElementById("burger").getAttribute("x"))

 if (stitchXVal > foodX && stitchXVal < foodX + width && stitchYVal > foodY && stitchYVal < foodY + height){
   // PART 5
   console.log("overlap")
 }
 foodY = Number(document.getElementById("pizza").getAttribute("y"))
 foodX = Number(document.getElementById("pizza").getAttribute("x"))

 if (stitchXVal > foodX && stitchXVal < foodX + width && stitchYVal > foodY && stitchYVal < foodY + height){
   var randX= randomNumber(50,700)
   console.log("overlap")
 }

})

food.setAttribute("x", )
