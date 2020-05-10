function Qsn2(){
    
    let Qn2="[ "+ document.getElementById("q2").value + " ]";//fetching the array
    
    let Q2= JSON.parse(Qn2);//return a JavaScript array, instead of a JavaScript object
     



    if(document.getElementById("q2").value==""){
        document.getElementById("toDisplay").innerHTML="Field cannot be empty";
        return false;
    }
    let element=0;
    let count=0;
    for(let j=0; j<Q2.length;j++){
        let tempElement=Q2[j];
        let tempCount=0;
        for( let k=0; k<Q2.length; k++)
            if(Q2[k]==tempElement)
            tempCount++;
            if(tempCount>count){
                element= tempElement;
                count= tempCount;
            }

    }
    document.getElementById("toDisplay").innerHTML="The most frequent element is: "+element+" and its frequency is: "+count; 
        
}
