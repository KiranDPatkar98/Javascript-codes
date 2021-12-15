export {}
// let  name:string= "kiran patkar2";
// console.log(name);
// enum color{red=10,green}
// let c:color=color.green
// console.log(c);

// function addNumbers(a: number, b: number) { 
//     return a + b; 
// } 

// var sum: number = addNumbers(10, 85) 

// console.log('Sum of the two numbers is: ' +sum);


// function multiply(a:number,b:number,c?:number):number{
//     if(typeof c ==='undefined'){
//         return a*b
//     }else 
//     return a*b*c

// }
// let res:number=multiply(2,3)
// console.log(res);
// var x="kiran"
// console.log(x);


// let arra:number[]=[10,20,30,40];
// for(var x of arra){
//     console.log(x);
    
// }
// for(var x in arra){
//     console.log(arra[x]);
    
// }
// let x:number=10;
// console.log(x);

//Default parameters

// function add(a:number,b:number=8){
//     console.log(a+b);
    
// }
// add(2)
// add(5,9)

//arrow functions

// let x=(a:number,b:number)=>{
//     console.log(a+b);
    
// }
// x(3,5)


// let x:string="PAndu";
// for(let i=0;i<x.length;i++){
//    let a=x.charAt(i)
//     console.log(a);
    
// }


//rest parameter

// function add (a:string,...b:string[]):void{
//     console.log(a+" "+b.join(" "));
    
// }
// add("kiran","Patkar","udupi")

//Interface as a type of array

// interface main{
//     [index:number]:number
// }
//as a number
// let array1:main=[10,40,30]
// console.log(array1);
// for(let a in array1){
//     console.log(a);
    
// }

//as a string
// interface main{
//     [index:number]:string;
// }
// let arr:main={}
// arr["udupi"]="kiran"
// arr["mangalore"]="Suvin"
// arr["Karkala"]="Avi"

// console.log(arr);
// for(let a in arr){
//     console.log(a);
    
// }

//interface extending another interface

// interface estuate{
//     empcode:number,
//     role:string
// }
// interface personal extends estuate{
//   name:string
// }

// let res:personal={
//     empcode:1,
//     role:"REact developer",
//     name:"Kiran D Patkar"

// }
// console.log(res);


// interface IEmployee {
//     empCode: number;
//     name: string;
//     getSalary:(empCode: number) => number;
// }

// class Employee implements IEmployee { 
//     empCode: number;
//     name: string;

//     constructor(code: number, name: string) { 
//         this.empCode = code;
//         this.name = name;
//     }

//     getSalary(empCode:number):number { 
//         return 20000;
//     }
// }

// let emp = new Employee(1, "Steve");
// console.log(emp);
// document.write("kiran")


//inheritence
class Person {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    empCode: number;
    
    constructor(empcode: number, name:string) {
        super(name);
        this.empCode = empcode;
    }
}
let emp = new Employee(100, "Bill");
console.log(emp);






