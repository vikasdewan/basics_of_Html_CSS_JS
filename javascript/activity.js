let btn = document.querySelector("button");
let box = document.querySelector("div");


btn.addEventListener("click",function(){
//   console.log("generate random color")
let h2 = document.querySelector("h2");
let randomColor = getRandomColor();
h2.innerText = randomColor;
box.style.backgroundColor = randomColor;
});


function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue}) `;
    return color;
}