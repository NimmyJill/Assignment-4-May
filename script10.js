var btn=document.getElementById("show");
btn.addEventListener("click",trianglePattern);

function trianglePattern(){
  btn.style.visibility="hidden";
  var pattern="";
  
  for(let i=0; i<=4; i++){
      for(j=1; j<=i; j++){
         pattern+="*";
      }
      pattern+="<br>";
  }
  document.getElementById("toDisplay").innerHTML=pattern;
}
function reset(){
  document.getElementById("toDisplay").innerHTML="";
  btn.style.visibility="visible";

}
