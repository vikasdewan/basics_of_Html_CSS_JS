// let btns = document.querySelectorAll('button');
// console.dir(btns);

//  for(btn of btns){
// //     btn.onclick = sayHello;
// //     btn.onmouseenter = function(){
// //         console.log("you entered the button");  

// //Event Listeners
// btn.addEventListener("click",function(){
//     console.log("button is clicked"); 

// });

// let btn = document.querySelector("button");
// btn.addEventListener("click",function(){
//     btn.style.backgroundColor = "green";
// })   

//      }
// // }

// // function sayHello() {
// //     alert("Hello you just liked the post");
// // }



//this in Event listener

// let  btn = document.querySelector("button");
// let  p = document.querySelector("p");
// let  h1 = document.querySelector("h1");
// let  h2 = document.querySelector("h2");



// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h2.addEventListener("click",changeColor);

    
//     function changeColor(){
//         console.log(this.innerText);
//     console.dir(this);
//     let randomColor = getRandomColor();
//    this.style.color = randomColor;

//     }

// function getRandomColor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let color = `rgb(${red},${green},${blue}) `;
//     return color;
// }

// let inp = document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log(`key = ${event.key}`);
//     console.log(`key = ${event.code}`);
//     // console.log("key was pressed from keyboard");

//     if(event.code == "KeyW"){
//         console.log("character moves upward");
//     }
//     if(event.code == "KeyS"){
//         console.log("character moves downward");
//     }
//     if(event.code == "KeyA"){
//         console.log("character moves leftward");
//     }
//     if(event.code == "KeyD"){
//         console.log("character moves rightward");
//     }
// })
// inp.addEventListener("keyup",function(){
//     console.log("key was released");
// })
// inp.addEventListener("keypress",function(){
//     console.log("key was press");
// })


//form Event

// let form = document.querySelector("form");

// form.addEventListener("submit",function(event){
//     let user = document.querySelector("#user");
//     event.preventDefault(); 
    // console.log(inp.value);
    // console.dir(inp);
// })
    
    // let pass = document.querySelector("#pass");
    
    // console.log(user.value);
    // console.log(pass.value);
    // console.log("form submitted");

    // user.addEventListener("change",function(){
    //     console.log("input changed");
    //     console.log("final change = ",this.value);
    // })
    // user.addEventListener("input",function(){
    //     console.log("input event");
    //     console.log("final input = ",this.value);
    // })

 
//Text Editor

// let inp= document.querySelector("#inp");
// let para = document.querySelector("#para");
// inp.addEventListener("input",function(){
//     para.innerText = this.value;
//     console.log(inp.value);
// })

 

// let user = document.querySelector("#user");
// let head1 = document.querySelector("#h1");
// user.addEventListener("input",function(){
   
//     if(user.value<='a' && user.value>='z'){
//     head1.innerText = this.value;
//     console.log(user.value);
// }
// });


let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    ul.appendChild(item);
    console.log(inp.value);
    inp.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText= "delete";
     item.appendChild(delBtn);
     delBtn.classList.add(".delete");
     
})

ul.addEventListener("click",function(event){
    console.log(event.target);
   //event.target.nodeName
   if(event.target.nodeName == "BUTTON"){
        let lisItem = event.target.parentElement;
        lisItem.remove();
    console.log("delete");
   }    
})
 
