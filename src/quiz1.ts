interface Records{
    income:number
    expense: number
    
   
}
interface Incomes{
    amount:number;
}

interface Expenses{
    amount:number;
}

// class Tracker implements Records{
 
//   income:number;
//   expense: number;

//     constructor( private balance: number, income: number, expense: number){
//         this.balance = balance
//         this.income = income
//         this.expense = expense
//     }
//     totalBalance():number {
//         return this.balance
//       }

// }

class Balance implements Records{
    income:number;
  expense: number;
  

    constructor( private balance: number, income: number, expense: number){
        this.balance = balance
        this.income = income
        this.expense = expense
    }

    totalBalance():number {
        return this.balance = this.income - this.expense
         }


}

class Expense implements Expenses{
amount: number;
constructor(amount:number){
    this.amount = amount
}

}

class Income implements Incomes{
    amount: number;
constructor(amount:number){
    this.amount = amount
}
}


