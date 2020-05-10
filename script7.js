
function findLarge(){
    let firstNum=document.getElementById("firstNum").value;
    let secondNum=document.getElementById("secondNum").value;
   

    if(document.getElementById("firstNum").value==""){
        document.getElementById("toDisplay").innerHTML="Please enter both numbers";
        return false;
    }
    if(document.getElementById("secondNum").value==""){
        document.getElementById("toDisplay").innerHTML="Please enter both numbers";
        return false;
    }

    if(firstNum>secondNum){
        document.getElementById("toDisplay").innerHTML="First number entered is larger";
        
        }
    if(secondNum>firstNum){
        document.getElementById("toDisplay").innerHTML="Second number entered is larger";
        
        }
    if(firstNum==secondNum){
        document.getElementById("toDisplay").innerHTML="Equal numbers";
        
    }
        
}





 





//     let num="[" + document.getElementById("q7").value + "]";
//     let Nums= JSON.parse(nums);

//     const[first, second] =Nums;
    
    
//     if(document.getElementById("q7").value==""){
//         document.getElementById("toDisplay").innerHTML="Please enter two integers";
//         return false;
//     }
    
     
//     if(first>second){
//         document.getElementById("toDisplay").innerHTML="First number entered is larger";
//     }
//     else{
//         document.getElementById("toDisplay").innerHTML="Second number entered is larger";
//     }
            
// }
