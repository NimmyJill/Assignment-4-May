function Qsn1(){
    let Qn1="[ "+ document.getElementById("q1").value + " ]";//fetching the array
    //console.log(Qn1);
    let P1= JSON.parse(Qn1);//return a JavaScript array, instead of a JavaScript object
    //console.log(P1);
    //console.log(P1[0]);
    let firstN= P1[0];

        if(document.getElementById("q1").value==""){
            document.getElementById("toDisplay").innerHTML="Field cannot be empty";
            return false;
        }
        if(firstN===2){
            document.getElementById("toDisplay").innerHTML="In your array : ["+P1+"] your first number is prime.";
            return true;
        }  
        if (!Number.isInteger(firstN)||firstN<2||!(firstN%2)) {
            document.getElementById("toDisplay").innerHTML="In your array : ["+P1+"] your first number is not a prime.";
            return false;
        }
        
        for( i=3; i< firstN; i++){ 
        if (firstN%i===0){
        document.getElementById("toDisplay").innerHTML="In your array : ["+P1+"] your first number is not a prime.";
        
        return false;
        } 
        else{
            document.getElementById("toDisplay").innerHTML="In your array : ["+P1+"] your first number is prime.";
            return true;
        }
        }  
        
}