//type safeety
//javascript with type checking
// let age:number =20;
// if(age<50)
//     age +=10;
// console.log(age);
//typesafety in arrays 
// let numbers :number[]=[];
// numbers.forEach(n =>n.toString)
//++++++++tuples++++++++++
//let user : [number,string]=[1,"string"]
//use tuples when there are two keyvalue pairs
//+++++++++ENUMS++++++++++++
// const small = 1;
// const medium = 2;
// const large = 3;
//pascal case naming convetion
// const enum Size{ Small = 1, Medium ,Large};
//  let mySize:Size = Size.Medium;
//  console.log(mySize);
// ++++++++++++function++++
//  function calculateTax(income:number): number{
//     return 0;
//  }
// ++++++++Datatypes++++++++
// let a:number = 25  ; // let b= <string> "jayanth"
// let myname:string = "jayanth";
// let check : boolean  ;
// let mynumber;//Try to avoid this "any"
// let surname: string| number;//union which adds multiple types
// surname = "jayanth";
//type UserName = string | number;(type aliases)
// const func =(n : number,m : number):number =>{ 
//   console.log(n,m);
//   return n*m;
//  }
// type userName = (n : string, m : string ,l?:number)=> string ;

// const func:userName =(n,m,l)=> {
//     console.log(n,m) ;
//     return n+m ;
// }
//+++++++++Arrays++++++++++++++
//  const arr:number[] = [12 ,24,36, 48];
// const arr2: string[]= ["jaynath"];
//+++++++++++object+++++++++++
// const obj :{
//     height:number;
//     weight:number;
//     gender?:boolean;
// } = {
//     height:523,
//     weight:34,
//     gender:true
// }


// +++++++++type assertion++++++++++++

// const btn = document.getElementById ("btn") !;
// const btn = document.getElementById ("btn") as HTMLElement;
// const btn =<HTMLElement> document.getElementById ("btn") ;
// btn.onclick;
// +++++++++++++type Uion type+++++++++++++++
// function kgTolbs (weight :number | string):number{
//     if(typeof weight === 'number')
//         return (weight) * 2.2;
//     else 
//     return parseInt(weight)*2.2
// }

// kgTolbs(10);
// kgTolbs("10");
// +++++++++intersection Type +++++++
// type Draggable ={
//     drag: ()=> void
// };
// type Resizable ={
//     resize:() => void
// }

// type UIWidget = Draggable & Resizable;

// let textBox :UiWidget ={
//     Drag:()=>{},
//     resize : ()=> {}
// }
//++++++++++++literal types++++++++
//  type Quantity = 50|100;
//  let quantity: Quantity =100;
//  type Metric ="cm"|'inch';
// +++++++nullable+++++++++
// function  greet (name:string |null | undefined){
//     if(name)
//     console.log(name.toLocaleUpperCase());
// else
// console.log("Hi");

// }
// greet(undefined);






















