function Array4(){
    let Arry4="[ "+ document.getElementById("q4").value + " ]";//fetching the array
    
    if(document.getElementById("q4").value==""){
        document.getElementById("toDisplay").innerHTML="Field cannot be empty";
        return false;
    }
    let A= JSON.parse(Arry4);//return a JavaScript array, instead of a JavaScript object
    
    let add=0;    
    for(i=0; i<A.length; i++){
        add+= A[i]*A[i];        
    }
    document.getElementById("toDisplay").innerHTML="The sum of squares of the numbers entered in the array is: "+add; 
        
}