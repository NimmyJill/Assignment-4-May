function Qsn3(){
    let Qn3= document.getElementById("q3").value ;//fetching the array
    
    if(document.getElementById("q3").value==""){
        document.getElementById("toDisplay").innerHTML="Field cannot be empty";
        return false;
    }
    let tempValue="";
    for(let i=0;i<Qn3.length;i++){
        if(/^[A-Z]/.test(Qn3[i])){
        tempValue+=Qn3[i].toLowerCase();       
        }
        else{
        tempValue+=Qn3[i].toUpperCase();  
        }
    }
    document.getElementById("toDisplay").innerHTML=tempValue;

}