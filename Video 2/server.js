// console.log("server file is running")

// function add(a,b){
//     return a+b
// }

// var add=function add(a,b){
//     return a+b
// }

// var add=(a,b)=>{return a+b}

// var add=(a,b)=>a+b
// var result=add(444,5);
// console.log(result)


// console.log("hello")

// (() => {
//     console.log("hey it's me harshita");
// })();


// (function(){
//     console.log('hey its me harshita')
// })()



// function callback(){
//     console.log("now adding is succesfully completed")
// }

// var add=function(a,b,callback){
//     var result=a+b;
//     console.log('result: '+result)
//     callback();
// }

// add(3,4,callback)

// var add=function(a,b,harshita){
//     var result=a+b;
//     console.log('result: '+result)
//     harshita();
// }

// add(2,3,function(){
//     console.log("add completed")
// })

// add(2,3,()=> console.log('add completed'))


// var fs=require('fs');
// var os=require('os');

// var user=os.userInfo();

// console.log(user)
// console.log(user.username)

// fs.appendFile('greeting.txt','Hi '+user.username+"!\n",()=>{
//     console.log('file is created')
// })

// console.log(fs)
// console.log(os)


const notes= require("./notes")
console.log("server file is available")

var age=notes.age;
console.log(age);

var res=notes.addNumber(6,7);
console.log(res)


//lodash

var _=require('lodash')    //underscore is a convention for lodash

const data=["person","person","age",1,2,1,2,"age","2"]

var filter=_.uniq(data);
console.log(filter)

console.log(_.isString("harshita"))
console.log(_.isString(true))
console.log(_.isString(false))
console.log(_.isString(2))






