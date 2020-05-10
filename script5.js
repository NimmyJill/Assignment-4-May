let disp= document.getElementById("toDisplay");


function OddOrEven(){
   
    toDisplay.style.fontSize="18px";
    

    var pattern="<br>";
    for(i=0; i<=15; i++){
        if(i%2==0){
            pattern+=i+" : Even number"+"<br>";
            document.getElementById("toDisplay").innerHTML=pattern;
        }else{
            pattern+=i+" : Odd number"+"<br>";            
            document.getElementById("toDisplay").innerHTML=pattern;         

        }
    }
}





































// function OddOrEven(){

//     for (var a=1; a<=15; a++){

//         var output=""; 
            
//         if(a%2==0){
//              output += '<tr><td>' + a + '</td>';
//              output += '<td>' + " : Even number" + '</td>';
             
//             // document.getElementById(toDisplay).innerHTML= a + " : Even number <br>";
//         }
//         else{
//             output += '<tr><td>' + a + '</td>';
//             output += '<td>' + " : Odd number" + '</td>';
//            // document.getElementById(toDisplay).innerHTML= a + " : Odd number <br>";
//         }
//         $('toDisplay').append(output);
//     }

// }


