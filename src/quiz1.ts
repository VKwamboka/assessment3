const content1 = document.getElementById("content1")! as HTMLFormElement;
let item = document.getElementById("income")! as HTMLDivElement;
const btn = document.getElementById("create-btn")! as HTMLButtonElement;
let expense = document.getElementById("expense")! as HTMLDivElement;
let amountValue = document.getElementById("amount")! as HTMLFormElement;
let incomeValue = document.getElementById("incomes")! as HTMLFormElement;
let expensediv = document.getElementById("expensediv")! as HTMLFormElement;
let balPlace = document.getElementById("bal")! as HTMLParagraphElement;
interface Records {
  income: number;
  expense: number;
  date: string;
}
interface Incomes {
  amountIncome: number;
  // date?: string;
}

interface Expenses {
  amount: number;
  // date: string;
}

class Balance  {
  // income: number;
  // expense: number;
  // date: string;
  private balance: number = 0
  //static totalIncome:number;

  constructor( ) {
    // this.balance = balance;
    // this.income = income;
    // this.expense = expense;
    // this.date = date;
  }

  getTotalBalance(income:number, expense:number){
    return this.balance = income - expense
    
  }
 
}
let vee = new Balance()
console.log(vee.getTotalBalance(50,4))


class Expense implements Expenses {
  amount: number;
  // public totalExpenses:number = 0
  // date: string;
  constructor(amount: number) {
    this.amount = amount;
    // this.date = date;
  }
}

class Income implements Incomes {
  amountIncome: number;
  // date: string;
  // public totalIncome: number = 0;

  constructor(amountIncome: number) {
    this.amountIncome = amountIncome;
    // this.date = date;
    // this.addIncome(this.amount)
  }
}

const Usage: Expense[] = [];

btn.addEventListener("click", Tracker);

// function showExpense() {
//   item.innerHTML = "";
//   const amount = amountValue.value;
//   let singleExpense: Expense = amount;
//   Usage.push(singleExpense);
//   let totalexpenses = Usage.map(Number);
 

//   let sumtotalEx: number = 0;

//   for (let i = 0; i < totalexpenses.length; i += 1) {
//     sumtotalEx += totalexpenses[i];
//   }

//   let html = `
//     <div class="income">
//       <h1>${sumtotalEx}</h1>
                   
//     </div>`;

//   item.innerHTML += html;

 
// }
 // showIncome
const Salary: Income[] = [];

// btn.addEventListener("click", showIncome);
// function showIncome() {
//   expensediv.innerHTML = "";
//   const amountIncome = incomeValue.value;
//   let singleIncome = amountIncome;
//   Salary.push(singleIncome); 
//   let totalincome = Salary.map(Number);
//   // total income
//   let sumtotalIn: number = 0;
//   for (let i = 0; i < totalincome.length; i += 1) {
//     sumtotalIn += totalincome[i];
//   }

//   let html = `
//   <div class="income">
//     <h1>${sumtotalIn}</h1>
                 
//   </div>`;

//   expensediv.innerHTML += html;
// }

function Tracker(){
  // SHOW EXPENSE
  item.innerHTML = "";
  const amount = amountValue.value;
  let singleExpense: Expense = amount;
  Usage.push(singleExpense);
  let totalexpenses = Usage.map(Number);
  let sumtotalEx: number = 0;
// total expenses
  for (let i = 0; i < totalexpenses.length; i += 1) {
    sumtotalEx += totalexpenses[i];
  }

  let html1 = `
    <div class="income">
      <h1>${sumtotalEx}</h1>
                   
    </div>`;

  item.innerHTML += html1;

// SHOW INCOME
  expensediv.innerHTML = "";
  const amountIncome = incomeValue.value;
  let singleIncome = amountIncome;
  Salary.push(singleIncome); 
  let totalincome = Salary.map(Number);
  // total income
  let sumtotalIn: number = 0;
  for (let i = 0; i < totalincome.length; i += 1) {
    sumtotalIn += totalincome[i];
  }

  let html = `
  <div class="income">
    <h1>${sumtotalIn}</h1>
                 
  </div>`;

  expensediv.innerHTML += html;

// Balance
let bal = new Balance()
let totalBal = bal.getTotalBalance(sumtotalIn, sumtotalEx)
console.log(totalBal)

balPlace.innerText = totalBal.toString()

}
