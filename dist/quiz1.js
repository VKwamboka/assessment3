"use strict";
const content1 = document.getElementById("content1");
let item = document.getElementById("item");
const btn = document.getElementById("create-btn");
let expense = document.getElementById("expense");
let amountValue = document.getElementById("amount");
let incomeValue = document.getElementById("incomes");
let expensediv = document.getElementById("expensediv");
// class Balance implements Records {
//   static income: number;
//   static expense: number;
//   //static totalIncome:number;
//   constructor(private balance: number, income: number, expense: number) {
//     this.balance = balance;
//     //this.income = income;
//     //this.expense = expense;
//   }
//   getTotalBalance(): number {
//     return Balance.income - Balance.expense
//   }
// }
class Expense {
    // public totalExpenses:number = 0
    // date: string;
    constructor(amount) {
        this.amount = amount;
        // this.date = date;
    }
}
class Income {
    // date: string;
    // public totalIncome: number = 0;
    constructor(amountIncome) {
        this.amountIncome = amountIncome;
        // this.date = date;
        // this.addIncome(this.amount)
    }
}
const Usage = [];
btn.addEventListener("click", showExpense);
function showExpense() {
    item.innerHTML = "";
    const amount = amountValue.value;
    let singleExpense = amount;
    console.log(singleExpense);
    Usage.push(singleExpense);
    console.log(Usage);
    let html = `
    <div class="income">
      <h1>${Usage}</h1>
                   
    </div>`;
    item.innerHTML += html;
}
const Salary = [];
btn.addEventListener("click", showIncome);
function showIncome() {
    expensediv.innerHTML = '';
    const amountIncome = incomeValue.value;
    let singleIncome = amountIncome;
    console.log(singleIncome);
    Salary.push(singleIncome);
    console.log(Salary);
    console.log(incomeValue);
    console.log(amountValue);
    let html = `
  <div class="income">
    <h1>${Salary}</h1>
                 
  </div>`;
    expensediv.innerHTML += html;
}
// function addIncomeRecord(){
//   let amountInput = document.querySelector('#amounts') as HTMLInputElement;
//   let date = document.querySelector('#date')?.nodeValue;
//   let amount = amountInput.value
//   const incomeRecord = new Income(amount, date)
// }
// function showIncome() {
//   let income = new Income();
//   content1.addEventListener("submit", (e) => {
//     e.preventDefault();   
//     let html = `
//             <div class="income">
//                     <h1>${income.amount}</h1>
//                     <p>${income.date}</p>                
//             </div>`;
//     item.innerHTML += html;
//   });
// }
// btn.addEventListener("click", showIncome);
// showIncome();
// function tracker(){
//   // income
//   const amountIncome = incomeValue.value
//   let singleIncome:Income=amountIncome
//   console.log(singleIncome)
//   Salary.push(singleIncome)
//   console.log(Salary)
//   // EXPENSES
//   const amount = amountValue.value
//   let singleExpense:Expense=amount
//   console.log(singleExpense)
//   Usage.push(singleExpense)
//   console.log(Usage)
// }
