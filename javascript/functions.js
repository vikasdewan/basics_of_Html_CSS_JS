//  function hello() {
//     console.log("hello World ");
//  }

//  function printName(name){
//     console.log(name);
//  }

//  myName = prompt("enter your name");
//  printName(myName);

//  function print(max){
//     for(let i =0 ;i<=max ; i++){
//         console.log(i);
//     }
//  }

//  max = prompt("enter the no. upto which you want to print no. from 0");
//  print(max);

//  function isAdult(age) {
//     if(age>=18){
//         console.log("person is adult");
//     }
//     else {
//         console.log("not a adult");
//     }
//  }

// age = prompt("enter your age");
// isAdult(age);


//Practice 1 : print a poem
// function poem1(){
//     console.log("Jhony jhony yes papa\neating sugar no papa\ntelling lie no papa\nopen your mouth ha ha ha ")
// }
// function table(n){
//     for(let i=1;i<=10;i++){
//     console.log(`${n}*${i} = ${n*i}`)
//     }
// }
// function alpha(){
//     console.log("A\tB\tC\tD\tE\tF\tG\tH\tI\tJ\tK\tL\tM\tN\tO\tP\tQ\tR\tS\tT\tU\tV\tW\tX\tY\tZ")
// }
// console.log("Options\npress 1 for printing a poem\npress 2 for printing a table\npress 3 for printing alphabet");
// opt = parseInt(prompt("enter your option "));
// n =0;
// switch(opt){
//     case 1 : poem1();
//                 break;
//     case 2 :  n = prompt("enter the no. for which you want it's table");
//                   table(n);
//                   break;
//     case 3 : alpha();
//                   break;
//     default : console.log("enter a valid option");
// }


//Practice problem : 2 //create a dice fuction and roll it and show value from 1 to 6

// function rollDice(){
//     console.log(` dice shows : ${Math.floor(Math.random()*6)+1}`);
// }
// console.log("press 1 to roll the dice\npress 2 to quit");
// dice = prompt("enter your choice");
 
// while(dice==1){
//     rollDice();
//     dice = prompt("enter your choice");   
// }
 
// if(dice ==2){
// console.log("user quit");
// }
 

//Practice 3 : avg of three no. 
// function calAvg(n1,n2,n3){
//     let avg = (n1+n2+n3)/3
//     console.log(`avg of ${n1},${n2},${n3} is given by ${avg}`);
// };
// let choice = 0;
// do {


// let n1 = parseInt(prompt("enter the first no."));
// let n2 = parseInt(prompt("enter the second no."));
// let n3 = parseInt(prompt("enter the third no."));

// calAvg(n1,n2,n3);
// console.log("do you want to calculate more \n press Y for Yes and N for No");
// choice = prompt("enter your choice.");
// }while(choice == 'Y');

// if(choice == 'N'){
    //     console.log("user quit");
    // }
    
    //practice 4: return sum from 1 to n.
    
//     function sumN(n){
//         let sum =0;
//         for(let i =1 ;i<=n ; i++){
//             sum = sum +i;
//         }
//         return sum;
//     }
//     let choice = 0;
//     do{
//         let n = parseInt(prompt("enter the value upto which you want to sum."));
//         console.log(`sum of numbers from 1 to ${n} is  ${sumN(n)} `);
//         console.log("do you want to calculate more \n press Y for Yes and N for No");
//         choice = prompt("enter your choice.");
// }while(choice == 'Y' || choice == 'y');

// if(choice == 'N' || choice == 'n'){
//     console.log("user quit");
// }

//practice 5 : return concatination of all strings in  an array
// function conCat(arr){
//     let result='';

//     for(let i=0 ;i<arr.length;i++){

//         result = result+arr[i];
//     }
//     return result;
// } 

// let arr =["my ","name ","is ","vikas ","dewagan"];
// console.log(`concatination of the given array is :  ${conCat(arr)}`);

// function outerFunc(){
//     let x = 4;
//     let y =3;
//     function innerFunc(){
//         console.log(`${x} and ${y}`);
//     }
//     innerFunc();
// }

//Function expression :
// a= parseInt(prompt("enter the first no."));
// b = parseInt(prompt("enter the second no."));
// let sum = function(a,b){
//     return a+b;
// }

// console.log(sum(a,b));


//Higher order fucntion 
// let greet = function() {
//     console.log("hello sab hi koooo");
// }
// function mulGreet(func,n){
//     for(let i=0 ;i<n;i++){
//         func();
//     }
// }
// mulGreet(greet,3);


//****higher order fucntion return */
 


// function evenOddTest(request){
//     if(request == "odd"){
//         let odd = function(n){
//             console.log(!(n%2==0));
//         }
//         return odd(n);       
//     }
//     else if(request == "even"){
//         let even = function(n){
//             console.log(n%2==0);
//         }
//         return even(n);
//     }
//     else {
//         console.log("wrong request");
//     }
// }

// let n =prompt("enter the number to check");
// let request = prompt("enter the  guess")//even   
// evenOddTest(request);


//Methods

// const calculator = {
//     addn(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     },
//     mul(a,b){
//         return a*b;    
//     },
//     div(a,b){
//         return a/b;
//     },
//     mod(a,b){
//         return a%b;
//     }
// }

//Assignment :


//make a function which return the no. larger than the number
// function retArray(n,arr){
//     let lar = [];
//     for(let i=0 ;i<arr.length;i++){
//         if(arr[i]>n){
//             lar.push(arr[i]);
//         }
//     }
//     return lar;
// }
// let arr=[];
// console.log("press Y for continue\npress N for stop  ")
// do{
//     input = parseInt(prompt("enter the array element"));
//     arr.push(input);
//     input = prompt("do you want to add more elements");
//     console.log(input);
// }while(input =='y' || input == 'Y')

// let n = parseInt(prompt("enter the number"));
// let result = retArray(n,arr);
// console.log(result);

//function extract unique character from the string

// function retUniqChar(str) {
//     let ans = "";
//     for(let i =0 ;i<str.length;i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar)==-1){
//             ans+= currChar;
//         }
//     }
//     return ans;
// }
// let str = "abbadfac";
// console.log(retUniqChar(str));

//function that return the name of the country which have maximum length of alphabet.
// function longCoun(country){
    
//     let ans = country[0];
//     for(let i =0 ;i<country.length-1;i++){
//         if(ans.length < country[i+1].length ){
//             ans = country[i];
            
//         }
//     }
//     return ans;
// }
// let country = ["India","United States of America"," North america","japan"];
// console.log(longCoun(country));

//Function to count the no. of vowels in a string.
// function countVowel(str){
//     let count =0;
//     for(let i =0 ;i<str.length ;i++){
//         let currChar = str[i];
//         if(currChar == 'a' || currChar == 'e' || currChar == 'i' ||currChar == 'o' ||currChar == 'u'  ){
//             count++;
//         }
//     }
//     return count++;
// }

// let str = "my name is vikas dewangan and i am here to show my talent";
// console.log(str);
// console.log(`no. of Vowels in the given string is : ${countVowel(str)}`);


//function to generate random no.s from range (start,end);
function ranNum(start,end){
    let diff = end - start;
    return Math.floor(Math.random()*diff)+start;
}

let start = parseInt(prompt("enter the start point"));
let end = parseInt(prompt("enter the end point"));
let result = ranNum(start,end);
console.log(result);