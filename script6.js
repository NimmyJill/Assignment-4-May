function truncate(){
    let Qn6=document.getElementById("q6").value ;//fetching the string
    
    if(document.getElementById("q6").value==""){
        document.getElementById("toDisplay").innerHTML="Field cannot be empty";
        return false;
    }
    let modified= Qn6.substr(0,15);    
    document.getElementById("toDisplay").innerHTML=modified + ".."; 
        
}
