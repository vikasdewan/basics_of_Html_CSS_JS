// const student = {
//     name : "vikas",
//     age : "20",
//     eng : 45,
//     math : 55,
//     phy : 66,
//     getAvg() {
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(avg);
//     }
// }



//Try and catch

// console.log("hello world");
// console.log("hello world1");
// console.log("hello world2");
// try {
//     console.log(a);
// }
// catch(err) {
//     console.log("errror is caught");
//     console.log(err);
// }

// console.log("hello world3");
// console.log("hello world4");




//Arrow function 

// const sum = (a,b)=>{
//     return a+b;
// }
// console.log(sum(3,2));



// //Arrow functions : implicit return 

// const mul = (a,b)=> a*b;
// const power= (a,b)=>a**b;




//set TImeout

// console.log("hi hello!!!!");
// setTimeout(()=>{
//     console.log("Dewangan hotel");
// },4000);//4000ms = 4s

// console.log("welcome to ");


//set Inerval

// setInterval(()=>{
//     console.log("Dewangan hotel");
// },1000);//4000ms = 4s

// let id = setInterval(()=>{
//     console.log("Dewangan");
// },1000);//4000ms = 4s
// console.log(id);

// let id2 = setInterval(()=>{
//     console.log("hotel");
// },2000);//4000ms = 4s
// console.log(id2);

// setTimeout(()=>{
   
//     clearInterval(id);//to stop the setInterval

// },7000);



// //this keyword in Arrow function.
// const student = {
//     name : "vikas",
//     age : 20,
//     marks : 89,
//     college : "BITD",
//     prop : this,
//     getName : function(){
//         console.log(this);
//         return this.name;
//     },

//     getMarks : ()=> {
//         console.log(this);//parent's scope -> window
//         return this.marks;//return undefined
//     },
    
//     getInfo1 : function() {
//         setTimeout(()=>{
//             console.log(this);//student as its parent is function and it's scope is student
//         },2000);
//         return "hi";
//     },
    
//     getInfo2 : function() {
//         setTimeout(function(){
//             console.log(this);//return window as setTimeout is window function . 
//         },2000);
//         return "hello";
//     },

// };


//Practice 1: write an arrow function which returns the square of a number 'n'.
// let n = parseInt(prompt("enter the number"));
const square = (n) => n**n;
// console.log(square(n));

//practice 2 : write a fucntion that print "hello world" 5 times at an interval of 2s each.
// let id = setInterval(function(){
//     console.log("hello world");
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
// },10000);

// setTimeout(() =>{
//     console.log("hello world is now printed 5 times")
// },10100);
