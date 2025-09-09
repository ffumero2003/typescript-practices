// let sales: number = 123_456_789;
// let course: string = "TypeScript";
// let is_published: boolean = true;
// let level;
// // assumes the var level is type any

// function render(document: any) {
//   console.log(document)
// }

// let numbers: number[] = [1, 2, 3];
// numbers.forEach(n => n.)

// let user: [number, string] = [1, "Felipe"]
// // user[0].
// // with typescript you can see all the functions you get for a type number
// // user[1].
// // same with type string
// user.push(1)
// keep tuples(line 14) to key value pairs, if not it will look messy and it will not be understood 

// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase

// enum Size { Small = "s", Medium = "m", Large = "lg" };
// if you put const enum instead of just enum it will generate more optimized code
const enum Size { Small = 1, Medium , large };
// basically if you put strings you have to explicitally indicate every value, but if it 
// is numbers you can start for example small = 5, then medium = 6 and so on
// automatically if you do not indicate values it will start at 0
let mySize: Size = Size.Medium
console.log(mySize)