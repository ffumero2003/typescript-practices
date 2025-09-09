export class Payment {
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
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
