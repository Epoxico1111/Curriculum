var fecha = new Date(),
year = fecha.getFullYear(),
edad = year-2001;
window.onload = function funcionC(){
  document.getElementById("Edad").innerHTML="Edad: "+edad;
}
function funcionA(){
document.getElementById("botonfoto").style.display="none";
document.getElementById("botonfoto2").style.display="block";
}
function funcionB(){
document.getElementById('foto').src='';
document.getElementById("botonfoto2").style.display="none";
document.getElementById("botonfoto").style.display="block";
}
