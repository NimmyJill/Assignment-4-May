
function Order(){



  let array=[];
  let size=3;
  var out="";
  var inp="";

  for (var i=0; i<size; i++){
      name= prompt("Enter name");
      age= prompt("Enter age");
      array.push({name:name,age:age});
  }
  for(let key in array){
    console.log(array[key]);
  }
if (array!= null) {
  for (let key in array){
    inp+="Name: " + array[key].name + "         Age: " + array[key].age + "<br>"; 
  }
    document.getElementById("q8").innerHTML = inp;
}

var sortedArray = array.sort(function (a, b) {
    var n1=a.name, n2=b.name
    if (n1 < n2) return -1;
    else if (n1 > n2) return 1;
    return 0;
  });

  for (let key in array){
    out+="Name: " + array[key].name + "         Age: " + array[key].age + "<br>"; 
  }
document.getElementById("result").innerHTML=out;
}