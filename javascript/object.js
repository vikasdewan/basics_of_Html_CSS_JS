// const student = {
//     name : "vikas",
//     branch : "CSE",
//     ID : "CC20356",
//     Sem : "3rd"
// }

// let delhi = {
//     lat : prompt("enter the latitude"),
//     long : prompt("enter the longitude")
// }

// const post = {
//     username : "@vikas dewangan",
//     content : "#opinhacks my first hackathon",
//     likes : "4000",
//     repost : "30",
//     comment : "120"
// };
// console.log(delhi)
// console.log(student);
// console.log(post);

// //to get value of the key in the object

// console.log(`likes on my recent post is ${post.likes}`);
// console.log(`I am currently on ${student["Sem"]} semester`);


// let student ={
//     name : "vikas",
//     age : 20,
//     branch : "CSE",
//     city : "bhilai",
//     college : "BITD"
// };

// console.log(student);

//Object of Objects:

const classInfo = {
    vikas : {
        age : 20,
        city : "bhilai"
    },
    suraj : {
        age : 19,
        city : "raikeda"
    },
    ojas : {
        age : 20 ,
        city : "mandla"
    }
}

//Array of Objects

const classInfo1 =  [
    {
        name : "vikas",
        age : 20 ,
        city : "bhilai"
    },
    {
        name : "suraj",
        age : 19,
        city : "raikehda"
    },
    {
        name : "ojas",
        age : 20,
        city : "mandla"
    }
]

// console.log("random no. b/w 1 to 5 : ")
//Random Integers b/w 1 to 10
let step1 = Math.random();
let step2 = step1*5; // multiply max value of range given with step1 
let step3 = Math.floor(step2);
let step4 = step3 +1;
// console.log(step4);

// let maxNum = prompt("enter the maximum No.");
// let  ranNum = Math.floor(Math.random()*maxNum)+1;
// let guess =parseInt(prompt(`enter your guess b/w  1 to ${maxNum}`)); 
// while(true){

//     if(guess=="quit"){
//         console.log("User Quit");
//         break;
//     }
//     if(guess== ranNum){
//         console.log("correct guess");
//         break;
//     }
//     if(guess>ranNum){
//         console.log(`Hint : your are close , try to enter smaller value from ${guess}`);
//         guess = prompt(`Enter your guess in range of 1 to ${maxNum}`);
//     }
//     if(guess<ranNum){
//         console.log(`/n   Hint : your are close , try to enter bigger value from ${guess}`);
//         guess = prompt(`Enter your guess in range of 1 to ${maxNum}`);
//     }

//     }

let ranNum = Math.floor(Math.random()*6)+1;
console.log(ranNum);

const car = {
    name : "Mercedice",
    model : 2023,
    color  : "black"
};
console.log(car.name);

const person = {
    name : "vikas",
    age : 20,
    city : "bhilai"
};
console.log(person);
console.log(person.city = "New York");
console.log(person);
console.log(person.country = "United States");
console.log(person);

