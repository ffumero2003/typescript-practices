export class Invoice {
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
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
