// function hello(){
//     console.log("inside hello Function!");
//     console.log("hello guys");
//     console.log("out from hello function");
// }

// function hey(){
//     console.log("inside hey function");
//     console.log("calling hello function");
//     hello();
//     console.log("hey");
//     console.log("out from hey function");
// }

// console.log("calling hey function");
// hey();
// console.log("process done bye!");





//Visualization of call Stack

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans =two() + one();
//     console.log(ans);
// }

// three();


//callbacks in js
 

// setTimeout(()=>{
//     console.log(" Vikas dewangan from this side");
// },2000)


// console.log("hello eveyone..... ");




//************************************CallBack Hell**************************************

let h1 = document.querySelector("h1");
function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("Color Changed");    
        },delay)
    })
}

colorChange("red",1000)
.then((result)=>{
    console.log(result)
    return colorChange("blue",1000)
})
.then((result)=>{
    console.log(result)
    return colorChange("pink",1000)
})
.then((result)=>{
    console.log(result)
    console.log("final color is here")
    return colorChange("cyan",400)
})
.catch((error)=>{
    console.log(error);
});

//    colorChange("red",1000,()=>{
//        colorChange("green",1000,()=>{
//         colorChange("orange",1000,()=>{
//             colorChange("violet",1000,()=>{
//                 colorChange("white",1000);
//             })
//         })
//        })  
//    });




//******************************************Promises*************************************


//normal code of callback hell
// function saveDB(data,success,failure){
    
//     let net = Math.floor(Math.random()*10)+1;
//     if(net>4){
//         console.log(`data : ${data}`);
//         success();
//     }
//     else{
//         failure();
//     }
// }

// saveDB("vikas",()=>{

//     console.log("success:data saved");
    
//     saveDB("dewangan",()=>{
      
//         console.log("success2: data2 saved");
        
//         saveDB("MR. Hunk",()=>{

//             console.log("success3:data Saved")
        
//         },()=>{
        
//             console.log("failure3: check Connection");
        
//         })

//     },()=>{
    
//         console.log("failure2: check connection");
   
//     })

// },()=>{

//     console.log("failure: check connecton")

// });


//Promises

// function saveDB(data){
    
//     return new Promise((resolve,reject)=>{   
//         let net = Math.floor(Math.random()*10)+1;
//         if(net >4){
//             resolve("success : data was Saved");
//         }
//         else{
//             reject("failure : weak connection");
//         }
//     })
// }

// saveDB("vikas")
//   .then (()=>{
//     console.log("resolved")
//  })
//  .catch(()=>{
//     console.log("rejected");
//   })

// saveDB("vikas")
//   .then ((result)=>{
//       console.log("resolved")
//       console.log("result1 :" ,result);
//     return saveDB("dewangan");
// })
// .then((result)=>{
//     console.log("resolved2")
//     console.log("result2 :" ,result);
//     return saveDB("Mr. Hunk");
// })
// .then((result)=>{
//     console.log("resolved3");
//     console.log("result3 :" ,result);
//  })
//  .catch(()=>{
//     console.log("rejected");
//   });