// let jsonRes ='{"fact":"The most popular pedigreed cat is the Persian cat, followed by the Main Coon cat and the Siamese cat.","length":101}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);
// console.log(validRes.fact);
// console.log(validRes.length);

// let student ={
//     name : "vikas",
//     marks : 98
// }
// let jsonData = JSON.stringify(student);
// console.log(jsonData);


// let url = "https://catfact.ninja/fact";


// fetch(url)
// .then((res)=>{
//     // console.log(res);
//    return res.json() ;
//     })
//  .then((data)=>{
//     console.log("data =",data.fact); 
//     return fetch(url);
//  })   
//  .then((res)=>{
//     return res.json();
//  })
//  .then((data2)=>{
//     console.log("data2 = ",data2.fact)
//  })
// .catch((err)=>{
//     console.log("Error - ",err);
// })



//**********async and await in APIs using promises */

// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
        
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact); 
//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact); 
//     }
//     catch(err){
//         console.log("ERROR -",err);
//     }
// }


//*********************Axios***************
//work similar like fetch but returns the needed output

// let url = "https://catfact.ninja/fact";
// async function getFacts(){
//         try{
            
//             let res = await axios.get(url);
//             console.log(res.data);  
//         }
//         catch(err){
//             console.log("ERROR -",err);
//         }
//     }


//**********html link with js for Api calls */

// let url1 = "https://catfact.ninja/fact";
// let url2 = "https://dog.ceo/api/breeds/image/random";
// let url3 = "https://icanhazdadjoke.com/";

// let btn1 = document.querySelector("#cat");
// let btn2= document.querySelector("#dog");
// let btn3 = document.querySelector("#joke");

// btn1.addEventListener("click",async ()=>{
//     let fact = await getCatFacts();
//     // console.log(fact);
//     let para1 =document.querySelector("#result1");
//     para1.innerText = fact;
// })

// btn2.addEventListener("click",async ()=>{
//     let link = await getDogImage();
//     // console.log(link);
//     let img =document.querySelector("#result2");
//     img.setAttribute("src" ,link);
// })

// btn3.addEventListener("click", async ()=>{
//     let joke = await getJokes();
//     let para = document.querySelector("#result3");
//     // console.log(joke);
//     para.innerText = joke; 
// })
// async function getCatFacts(){
//         try{
//             let res = await axios.get(url1);
//             console.log(res.data.fact);
//             return res.data.fact ;  
//         }
//         catch(err){
//             console.log("ERROR -",err);
//             return "No fact Found";
//         }
//     }
// async function getDogImage(){
//         try{
//             let res = await axios.get(url2);
//             return res.data.message ;  
//         }
//         catch(err){
//             console.log("ERROR -",err);
//             return "/";
//         }
//     }


// //********************sending Header */

// async function getJokes(){
//     try{
//         const config = { headers : { Accept : "application/json"}};
//         let res = await axios.get(url3,config);
//         return res.data.joke;
//     }
//     catch(err){
//         console.log("error -",err);
//     }
// }



//************************APi****************

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("#button");
let inp = document.querySelector("#input")
btn.addEventListener("click",async()=>{
   let country = inp.value
   colArr = await getColleges(country);
   console.log(colArr);
   show(colArr);
})

function show(colArr){
   let list = document.querySelector("#list");
   list.innerText= "";  
    for(col of colArr){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
        
    }
}


async function getColleges(country){
    try{
       let res =  await axios.get(url+ country);
       return res.data;
    }
    catch(err){
        console.log("error : ",err);
    }
}
