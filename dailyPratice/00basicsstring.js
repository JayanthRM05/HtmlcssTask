/* Datatypes     
datatypes are of two types 
1)premitive datatypes
   7types of premetive datatypes are there
    1:String
    2:Number
    3:Boolean
    4:null
    5:undefine
    6:Symbol
    7:Bigint

2)non primitive(Reference type)
  1:Array{type of =object}
  2:Objects{type of =object}
  3:Function{type of =object function}
*/

//Memory is of two types
//Stack(premitive),Heap(non-primetive)
//let Name="Jayanth";
//let AnotherName= Name;
//console.log(AnotherName);
//=============================Strings And it's Methods=============================
/*let Name = ('jayanth-cd')
console.log(Name.__proto__ );
console.log(Name.toUpperCase() );
console.log(Name.charAt(2) );
console.log(Name.indexOf('y'));
const length=(Name.length)
const newname = Name
console.log(newname);
const anothername = Name.slice(-8,7)
console.log(anothername);
console.log(`my name is ${Name} AND the length of my name is ${length}`);// this is called string interpolation
*/
//=====================ADVANCE STRING (METHODS)==============================
const gameName = new String('jayanth')
console.log(gameName [0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());//methods using"."
console.log(gameName.charAt(1));
console.log(gameName.indexOf('y'));


let jayanth = { 
  name:"RMjayanth",
  course:"jayanthCourse"
}
console.log(jayanth.course);
console.log(jayanth.name);
let kumar=jayanth 
kumar.name ="kumar"
kumar.course="js"
console.log(kumar);
console.log(jayanth.name);
console.log(jayanth.course);
