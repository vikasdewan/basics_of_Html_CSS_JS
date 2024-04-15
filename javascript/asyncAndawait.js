// *******************async******************

// async function greet(){
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("promise was resolved")
//     console.log(`result was : ${result}`);
// })
// .catch((err)=>{
//     console.log(`promise was rejected with err : ${err}`); 
// })


//***********************await**************** */

function getNum(){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            let ranNum = Math.floor(Math.random()*10)+1;
            console.log(ranNum);
            resolved();
        },1000)
    });
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    console.log("done");
}

let h1 = document.querySelector("h1");
function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
           console.log(num);
            if(num>3){
                reject("promise is rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`)
            resolve(`color changed`);    
        },delay)
    })
}

async function demo(){
    try{
    await colorChange("red",1000)
    await colorChange("green",1000)
    await colorChange("yellow",1000)
    await colorChange("pink",1000);
    }
    catch(err){
        console.log("error caught");
        console.log(err);
    }
    let a =5;
    console.log(a);
    console.log("new num = ",a+3);
}
