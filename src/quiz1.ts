interface Records{
    income:number
    expense: number
    
   
}

class Tracker implements Records{
 
  income:number;
  expense: number;

    constructor( private balance: number, income: number, expense: number){
        this.balance = balance
        this.income = income
        this.expense = expense
    }


}

class Expense {

}

class Income{

}