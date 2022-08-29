function add(num1,num2,callback){
    let err=false
     if(num1==0){
       err=true  
     }
 callback(num1+num2,err)
 }
 
 function mul(num1,num2,callback){
     callback(num1*num2)
 }
 function div(num1,num2,callback){
     callback(num1/num2)
 }
 function sub(num1,num2,callback){
     callback(num1-num2)
 }
 

 
 const promise=require('promise')
 
 function add(num1,num2){
     return new Promise((resolve,reject)=>{
        if(num2==0)
        {
            reject("zero")
        }
         resolve(num1+num2)
     })
 }
 function mul(num1,num2){
    return new Promise((resolve,reject)=>{
       if(num2==0)
       {
           reject("zero")
       }
        resolve(num1*num2)
    })
}
function div(num1,num2){
    return new Promise((resolve,reject)=>{
       if(num1==0)
       {
           reject("zero")
       }
        resolve(num1/num2)
    })
}
function sub(num1,num2){
    return new Promise((resolve,reject)=>{
       if(num1==0)
       {
           reject("zero")
       }
        resolve(num1-num2)
    })
}


 add(20,10).then((sum)=>{
     console.log(sum)
     return mul(sum,sum)
 }).then((product)=>{
   console.log(product)
   return div(product,10)
 }).then((division)=>{
    console.log(division)
    return sub(division,10)
 }).then((substraction)=>{
    console.log(substraction)
 })
 .catch((err)=>{
    console.log(err)
 })



