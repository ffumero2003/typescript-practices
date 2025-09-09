import type { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {
  // readonly client: string;
  // //you can access it but cant change it 
  // private details: string;
  // //cant be accessed
  // public amount: number
  // //public === basically default, you could use it anywhere


  // constructor(c: string, d: string, a:number){
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // }
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ){}
  
  format(){
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

