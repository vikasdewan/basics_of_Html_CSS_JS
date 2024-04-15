 let arr = ['a','B','c','D','e','F'];
 console.log(arr);
 let elem = prompt("enter the element to check: ");
 for(let i =0; i<arr.length;i++){
        if(arr[i]===elem){
            console.log("element exists.");
            break;
        }
        else{
            console.log("element not exists.");
            break;
        }
 }