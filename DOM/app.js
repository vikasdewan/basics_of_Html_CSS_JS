//  let para = document.createElement('p');
//  para.innerText = "hey I'm red";
//  para.classList.add('red');
//  document.querySelector('body').append(para);

//  let h3 = document.createElement('h3');
//  h3.innerText = "I'm a blue h3 ";
//  h3.classList.add('blue');
//  document.querySelector('body').prepend(h3);

// //  let h1 = document.createElement('h1');
// //  h1.innerText = "I'm in div";
// //  let para2 = document.createElement('p');
// //  para2.innerText = "ME TOO";



//  let div = document.createElement('div');
//  div.classList.add('divStyle');
// //  div.append(h1);
//  div.append(para2);
//  document.querySelector('body').append(div);


 //Assignment question1
let input = document.createElement('input');
let button  = document.createElement('button');
button.innerText = "click me";
document.querySelector('body').append(input);
document.querySelector('body').append(button);

//2
input.placeholder = "username";
button.id = "btn";

//3 
let h1 = document.createElement('h1');
h1.innerText = "DOM practice";
h1.classList.add('h1St');
document.querySelector('body').append(h1);


let p1 = document.createElement('p');
p1.innerHTML= "Apna College <b> Delta</b> Practice";
document.querySelector('body').append(p1);
