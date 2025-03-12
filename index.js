// function addTwo (num1,num2){
// let a,b;
// sum =(a+b)
// console.log(sum);

// };
// addTwo(30,50);
// function sayHello() {
//     console.log("Hello, Jai!");
// };
// let myAge=(Math.floor(Math.random()*10)+20)
// function herAge(myAge) {
//  let age = [];
//     for( let i=50;i>=myAge;i--){
//      age.push(i +"")
//         }
     
//         console.log(typeof age);
        
//     return age;
    
    
// }
// console.log(myAge);
// console.log(herAge(myAge));

// const myAge=[20,30,50,60]
// const sum =myAge[0]+myAge[1]+myAge[2]+myAge[3]
// const total = 4
// const average=sum/total
// console.log(average);

//++++++++functions++++++++
// let myName = [25,'kumar','nayak'];
// function Luckey(myNumber,yourNumber){
    
//    myName[0]+ myNumber +yourNumber
    
// }
// Luckey(10,5)
// console.log(myName);
 
// function getLicance( age, bribe){
//     if(age>18 && bribe>100){
//         console.log('yougetLicense')
//         return   
//     } else{}
// }

// getLicance(19,101)

   let evenNumber=[]
   let oddNumbers=[]
   for(let i=0;i<=10;i++){
    if(i%2 === 0){
     evenNumber.push(i)}else {
        oddNumbers.push(i)
}
  }
 console.log(evenNumber);
 console.log(oddNumbers);
 

let str ="jayanth"
let reverseString=[]
for(let i=0; i<str.length;i++){
    reverseString.unshift(str[i])
}
console.log(reverseString);




function generateId() {
  return Math.floor(Math.random() * 10001);
}

console.log(generateId());























// let myName = sayHello();
//  console.log(myName);

// function sayHello() {
//     console.log("Hello, Jai!");
// }

// let result = sayHello();
// console.log(result);
 
// function reverse(str){
//     let leftToRight =""
//     if( let i = str.length -1; i-- ){

//         return

//     }
// }

// let myName ="jayanth"

// console.log(myName.length-1);

// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
  
//   console.log(reverseString("Jayanth"));
// function reverseString(str){
//  let reversed = ""
// for (let i = str.length-1; i >= 0; i--) {
//      reversed += str[i]
// }
// return reversed
// }
// console.log(reverseString('Kulu'));
// function reverseString(str){
//     reversed ="";
//     for ( let i = str.length-1; i >=0  ; i--){
//         reversed += str[i]
     
//     }

// return reversed

// }
// let str = "JAYANTH";
// console.log("this is how you reverse a string : ", str  ," to : ", reverseString(str));

// function findMax(myArray){
//   let numbers = myArray [0];
//    for (let i = 1; i < myArray.length; i++) {
//     if (myArray[i]>numbers)
//      numbers = myArray[i];
    
//    }

// return numbers
// }
// console.log(findMax([10,2,8,5]));

// let myArray =[1,2,3,4] ;
// myArray.slice(1,2)
// myArray.push (20) ;

// console.log(myArray);

// let yourNumber = myArray.length ;

// console.log(yourNumber);
// let a = 5 ,  b= ++a;
// console.log(a,b);

// console.log(1+"2"+1);
// console.log(2+1+"2");
// console.log( typeof +('string'));
// console.log(1/0);

// let a = "21";
// let b = "A";
// console.log(a>b);

// let a = "25";
// let b = 25;
// console.log(a === b);//strict type check

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// function outPut(){
//     return (
//        console.log( lengths)
//     )
// }
// outPut()