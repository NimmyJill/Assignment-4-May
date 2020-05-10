var btn=document.getElementById("show");
btn.addEventListener("click",triangular);


function triangular(){
    
    btn.style.visibility="hidden";
    var pattern="";
    let myString='Javascript';
    var y='<br>';
   

    for (let char of myString){        
           y+=char;
           pattern+=y;        
           document.getElementById("toDisplay").innerHTML= pattern;               

        }    
           
}
