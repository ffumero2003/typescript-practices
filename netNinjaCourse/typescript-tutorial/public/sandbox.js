// // // const char: string = "luigi";
// // // // console.log(char)
// // // // const inputs = document.querySelectorAll('input')
// // // // inputs.forEach(input => console.log(input))
//Episode 2
// // // let age: number = 30;
// // // let isBlack: boolean = false;
// // // const circ = (diameter: number) => {
// // //   return diameter * Math.PI
// // // }
// // // console.log(circ(5))
//Episdoe 3
// // // array
// // // let names = ["luigi", "mario", "yoshi"];
// // // names.push("toad");
// // // // console.log(names)
// // // let numbers = [10,20,30,40];
// // // numbers.push(25)
// // // let mixed = ['ken', 4, 'chun-li', 8, 9]
// // // mixed.push('ryu')
// // // mixed.push(10)
// // // mixed[0] = 3;
// // //objects
// // let ninja = {
// //   name: 'mario',
// //   belt: 'black',
// //   age: 30
// // }
// // ninja.age = 40;
// // ninja.name = "Felipe"
// // ninja = {
// //   name: "Ryu",
// //   belt: "White",
// //   age: 1
// // }
// // //cant add or remove properties if not created, strict with types
//Episode 4
// //explicit types
// let char: string;
// let age: number;
// let isLoggedIn: boolean;
// age = 30;
// isLoggedIn = true;
//Episode 5
// //arrays
// let people: string[] = [];
// people.push('yoshi')
// console.log(people)
// //union type
// let arr: (string | number)[] = []
// arr.push("20")
// arr.push(20)
// console.log(arr)
// let uid: string|number;
// uid = "123"
// uid = 123 
// //object
// let obj: object;
// obj = {name: "yoshi", age: 30};
// let obj2 : {
//   name: string;
//   age: number;
//   belt: string;
// }
// obj2 = {name: 'felipe', age: 22, belt: "green"}
//Episode 6
// let age: any;
// age = 25
// age = true
// age = { name: "felipe" }
// let mixed: any[] = [];
// mixed.push(5)
// mixed.push('mario')
// mixed.push(false)
// let ninja : { name: any, age: any, belt: any };
// ninja = {
//   name: 2,
//   age: "felipe",
//   belt: false
// }
// console.log(ninja)
//Episode 7
// console.log("test")
//Episode 8
// let greet: Function;
// greet = () => {
//   console.log("hello")
// }
// const add = (a: number, b: number, c: number | string = 10, d?: number | string): void => {
//   console.log(a + b)
//   console.log(c)
//   console.log(d)
// }
// add(5, 10)
// const minus = (a: number, b: number) => {
//   return a + b
//   //returns infers the type
// }
// let result = minus(10, 7)
//Episode 9
// type StringOrNum = string | number;
// type objWithName = { name: string, uid: StringOrNum };
// const logDetails = (uid: StringOrNum, item: string) => {
//   console.log(`${item} has a uid of ${uid}`)
// }
// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello with a uid of ${user.uid}`)
// }
//Episode 10
//example 1
let greet;
//void signifies the absence of a return value for a function
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//example 2
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return (num1 - num2);
    }
};
//example 3
let logDet;
logDet = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
export {};
