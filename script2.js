function Qsn2(){
    
   
     let arr=[];
     let size=5;

     for (var i=0; i<size; i++){
         arr[i]= prompt('Enter Element '+ (i+1));
     }
    
    
    let element=0;
    let count=0;
    for(let j=0; j<arr.length;j++){
        let tempElement=arr[j];
        let tempCount=0;
        for( let k=0; k<arr.length; k++)
            if(arr[k]==tempElement)
            tempCount++;
            if(tempCount>count){
                element= tempElement;
                count= tempCount;
            }

    }
    document.getElementById("toDisplay").innerHTML="The most frequent element is: "+element+" and its frequency is: "+count; 
        
}
