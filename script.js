//QA 1
//How to compare two JSON have the same properties with out order
console.log("hi")
let obj1={
    name:"Person 1",
    age:5
}

let obj2={

    age:5,
    name:"Person 1"
}

console.log(JSON.stringify(obj1)==JSON.stringify(obj2));


//QA 2

var getRequest=new XMLHttpRequest();
getRequest.open("GET","https://restcountries.com/v3.1/all",true);
getRequest.send();
getRequest.onload=function(){
   var getData=getRequest.response;
   var getResult=JSON.parse(getData);
   for(var i=0;i<getResult.length;i++){
  console.log(getResult[i].flag);
}
}


//QA 3

var request=new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all",true);

request.send();

request.onload=function() {

  var data=request.response;
  var result=JSON.parse(data);
  for(var i=0;i<result.length;i=i+1){

    console.log(result[i].name,result[i].region,result[i].subregion,result[i].population)
  }


} 