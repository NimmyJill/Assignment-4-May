
function Order(){
let Arry8=document.getElementById("q8").value;
let nonSortedArray= [...Arry8]
var sortedArray = nonSortedArray.sort(function (a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
  });
document.getElementById("toDisplay").innerHTML=sortedArray;
}