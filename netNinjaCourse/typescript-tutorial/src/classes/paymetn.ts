import type { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
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
    readonly recipient: string,
    private details: string,
    public amount: number
  ){}
  
  format(){
    return `${this.recipient} is owed $${this.amount} for ${this.details}`
  }
}

