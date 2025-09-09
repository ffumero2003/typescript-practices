// const anchor = document.querySelector('a')!;
// // if(anchor){
// //   console.log(anchor.href);
// // }
// console.log(anchor.href);
// const form = document.querySelector('form')!;
//interfaces
//structure between classes or objects
// interface IsPerson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: IsPerson = {
//   name: "Felipe",
//   age: 22,
//   speak(text: string):void {
//     console.log(text)
//   },
//   spend(amount: number): number{
//     console.log('I spent ', amount);
//     return amount
//   }
// }
// const greetPerson = (person: IsPerson) => {
//   console.log("Hello", person.name)
// }
// greetPerson(me)
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/paymetn.js";
// let docOne : HasFormatter;
// let docTwo : HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 300)
// let docs: HasFormatter[] = [];
// docs.push(docOne)
// docs.push(docTwo)
// const invOne = new Invoice('mario', 'work on mario website', 250)
// const invTwo = new Invoice('luigi', 'work on luigi website', 450)
// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount, inv.format());
// })
const form = document.querySelector('.new-item-form');
// console.log(form.children)
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    // let doc: HasFormatter; 
    // if(type.value === "invoice"){
    //   doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    // } else{
    //   doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    // }
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    // console.log(doc)
    list.render(doc, type.value, 'start');
    // console.log(
    //   type.value, 
    //   toFrom.value, 
    //   details.value, 
    //   amount.valueAsNumber)
});
//generics
// const addIUD = <T extends object>(obj: T) => {
//   let iud = Math.floor(Math.random() * 100);
//   return {...obj, iud}
// }
// //basicamente t extends object = lo que reciba tiene que ser un objeto
// let docOne = addIUD({name: 'yoshi', age: 40})
// let docTwo = addIUD('hello')
// console.log(docOne.name)
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: '???';
// }
// interface Resource<T> {
//   uid: number;
//   resourceName: string;
//   data: T;
// }
// const docThree: Resource<object> = {
//   uid: 1,
//   resourceName: 'person',
//   data: {name: 'shaun'}
// }
// const docFour: Resource<string[]> = {
//   uid: 2,
//   resourceName: 'shoppingList',
//   data: ['bread', 'milk', 'toilet roll']
// }
// console.log(docThree, docFour)
//enums
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// const docOne: Resource<T> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: {name: 'yoshi'}
// }
// console.log(docOne)
// Tuples
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'felipe'];
let tup = ['ryu', 25, true];
tup[0] = 'you';
tup[1] = 40;
tup[2] = false;
//predetermined types, you can only change them for the same types 
let student;
student = ['felipe', 997];
//name, id
