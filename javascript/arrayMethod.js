

//   ******************forEach()*******************//

// let arr = [1,2,3,4,5];
// function print(el){
//     console.log(el);
// }
// arr.forEach(print);//or
// console.log("\nanother method : by directly putting fucntion in forEach key word.");
// arr.forEach(function(el){
//     console.log(el);
// });
// console.log("\n using arrow method ")
// arr.forEach((el)=>{
//     console.log(el);
// });

// arr Object

// const arr = [{
//     name : "vikas",
//     city : "bhilai"
// }
//     ,{
//         name : "suraj",
//         city : "rikhega"
//     }
//     ,{
//         name : "ojas",
//         city : "mandla"
//     }]

//     arr.forEach((friends)=>{
//         console.log(friends);
//         console.log(friends.name);
//         console.log(friends.city);
//     })




//**************************.map() *********************/

// let arr = [1,2,3,4,5];

// let double = arr.map((ele) =>{
//     return ele*2;
// })
// let square = arr.map((ele) =>{
//     return ele*ele;
// })
// console.log(double);
// console.log(square);


//*********************filter() *****************/

// let arr =[1,2,3,4,5,6,7,8,9,10];

// let even = arr.filter((num)=>{
    //     return num%2==0;
    // })
    // let odd = arr.filter((num)=>{
        //     return num%2!=0;
        // })
        // console.log(even);
        // console.log(odd);
        
        
        //****************** every() ****************/
        
        // let arr =[1,2,3,4,5,6,7,8,9,10];

        // let checkEveryOdd = arr.every((ele)=>{
        //     ele%2!=0;
        // })

        // console.log(checkEveryOdd);
        
        // let arr =[1,2,3,4,5,6,7,8,9,10];

        // let checksomeOdd = arr.some((ele)=> ele%2==0)

        // console.log(checksomeOdd);


                                         //***************.reduce() **************/
        // let arr = [1,2,3,4];
        // let result = arr.reduce((res,ele)=>{
        //     return res*ele;//res+ele
        // });
        // console.log(result);


        //Return max value from the array
        // let arr = [1,3,5,7,8,9];
        // let maxVal = arr.reduce((max,el)=>{
        //     if(el>max){
        //         max = el;
        //     }
        //     return max;
        // })
        // console.log(maxVal);


        //Practice Q : check if all the no. in array are the multiple of 10 or not
        // arr = [10,20,340];
        // let ans = arr.every((el) => el % 10==0 )
        // console.log(ans);

        //Practice Q : check the min no. in an array and print it.

        // let arr2 = [1,3,5,7,8,9];
        // let minVal = arr2.reduce((min,el)=>{
        //     if(el<min){
        //         min = el;
        //     }
        //     return min;
        // })
        // console.log(minVal);


                                                 //***********Default parameters */

        // function power(a,b=2){
        //     return a**b;
        // }
        // console.log(power(3));//b=2
        // console.log(power(4,3));//b=3
        
                                     // **************spread function == (...)********/
        // let arr = [1,2,3,4,5];
        // console.log(...arr);
        // console.log(Math.min(...arr));

                        // ***********spread in array literals *********/
        // let arr = [1,2,3,4,5];
        // let newArr = [...arr];
        // console.log(newArr);

        // let arr2 = "my name is vikas dewangan";
        // let char = [...arr2];
        // console.log(char);
        // console.log(...char);

        // let odd = [1,3,5,7,9];
        // let even = [2,4,6,8,10];
        // let nums = [...even,...odd];
        // console.log(nums);
        // console.log(...nums);


                                           //***** spread in object literals *****/
//     const student = {
//         name : "vikas",
//         age : 20,
//         city : "bhilai"
//     }
     
//     let dataCopy = {
//         ...student, 
//         id :123};
// console.log(dataCopy);
// console.log(...dataCopy.name);

// let arr = [1,2,3,4,5];
// const obj = {...arr};// key : value = index : arr value
// console.log(obj);

// let str = "my name is kalaam";
// const obj2 = {...str};//key: value == index : indivi-char 
// console.log(obj2);



                          // ***************************Rest *********************/

// function sum(...args){ // arguments

//     for(let i =0 ;i<args.length ;i++){
//         console.log(`your element ${args[i]}`);
//     }
//     return console.log("see yaaa");
// }
 
// console.log(sum(1,2,3));

// function count(){
//     console.log(arguments);
//     console.log(arguments.length);
// }
// console.log(count(2,3,4,5,3,54,3,4));



                         //**************************Destructuring*****************/
// let names = ["vikas","suraj","ojasdada","keshaw","kostubh","praveen","shreyansh","mukesh"];
// let  [winner ,runnerup, ...others]= names;
// console.log(winner);
// console.log(runnerup);
// console.log(...others);


                               //**********************Destructuring in Objects */
// let student ={
//     name : "vikas",
//     age : 20,
//     city : "bhilai",
//     username : "dewanganvikas192@gmail.com",
//     password : "1234@vikas",
//     class : 12,
//     subjects : ["hindi","maths","english"]
// };

// let {username,password} = student; //CURLY BRACES FOR OBJECTS IN DESTRUCTURING. 
// console.log(username);
// console.log(password);

// //other way
// let { username: user , password: secret,  city:place = "bhilai" } = student; //username: user == key :varible in which value going to store. 
// //if no city info is there then it will print bhilai.
// console.log(user);
// console.log(secret);
// console.log(place);




//************************Assignment  question ************************/

//1. square and sum the array elements using the arrow function and then find the average of the array

// let arr=[1,2,3];

// let square = arr.map((num) => num**2);
// console.log(square);

// let sum = square.reduce((acc,ele) => acc +ele );

// let avg = sum /arr.length;
// console.log(avg);

//2. create a new array using map function whose each element is equal to original element +5;

let arr = [1,2,3];

let newArr = arr.map((ele)=>ele+5);
console.log(newArr);

//3. create a new array whose element are in upper case which present in oG array.
let str = ["vikas","suraj","ojas"];
let newStr = str.map((ele)=> ele.toUpperCase());
console.log(newStr);

//5. create a fucntion called  mergeObject  which merge objects of first and second object.

const first = {
    name : "vikas",
    age : 20
}
const second = {
    name : "suraj",
    age : 19
}
console.log(first)
const mergeObject =(obj1,obj2)=> ({...obj1 ,...obj2});  
console.log(mergeObject(first,second));

//4. double and return the argument
const doubleAndReturnArgs=(arr,...args)=>[...arr,...args.map((v)=>v*2),];doubleAndReturnArgs([1,2,3],4,4);//[1,2,3,8,8]doubleAndReturnArgs([2],10,4);//[2,20,8]
