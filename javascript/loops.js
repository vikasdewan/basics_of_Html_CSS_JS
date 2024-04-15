//  let todo = [];
//  let req = prompt("enter your request  ");
//  while(true){
//     if(req == "quit"){
//         console.log("quitting the todo app");
//         break;
//     }
//     else if(req == "list"){
//         console.log("-----------------");
//         for(let i=0;i<todo.length;i++){
//             console.log(i+1,todo[i]);
//         }
//         console.log("------------------");
//     }
//     else if(req == "add"){
//         let task = prompt("enter the task.");
//         todo.push(task);
//         console.log("task added ");
//     }
//     else if(req == "delete"){
//         let idx = prompt("enter the no. of the task you want to delete")
//         todo.splice(idx,1);
//         console.log("task deleted");     
//     }
//     req = prompt("enter your request  ");
//  }

let arr = [5,312121,222,1];
// let num = prompt("enter the number you want to delete");
// num = parseInt(num);
// for(let i =0;i<arr.length;i++){
//     if(arr[i]== num){
//         arr
//     }
// }
// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

 let max=0;
 for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max = arr[i];
    }
 }
console.log(max);