"use strict";
const content1 = document.getElementById("content1");
let item = document.getElementById("income");
const btn = document.getElementById("create-btn");
let expense = document.getElementById("expense");
let amountValue = document.getElementById("amount");
let incomeValue = document.getElementById("incomes");
let expensediv = document.getElementById("expensediv");
let balPlace = document.getElementById("bal");
class Balance {
    //static totalIncome:number;
    constructor() {
        // income: number;
        // expense: number;
        // date: string;
        this.balance = 0;
        // this.balance = balance;
        // this.income = income;
        // this.expense = expense;
        // this.date = date;
    }
    getTotalBalance(income, expense) {
        return this.balance = income - expense;
    }
}
let vee = new Balance();
console.log(vee.getTotalBalance(50, 4));
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
btn.addEventListener("click", Tracker);
const Salary = [];
function Tracker() {
    // SHOW EXPENSE
    item.innerHTML = "";
    const amount = amountValue.value;
    let singleExpense = amount;
    Usage.push(singleExpense);
    let totalexpenses = Usage.map(Number);
    let sumtotalEx = 0;
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
    let sumtotalIn = 0;
    for (let i = 0; i < totalincome.length; i += 1) {
        sumtotalIn += totalincome[i];
    }
    let html = `
  <div class="income">
    <h1>${sumtotalIn}</h1>
                 
  </div>`;
    expensediv.innerHTML += html;
    // Balance
    let bal = new Balance();
    let totalBal = bal.getTotalBalance(sumtotalIn, sumtotalEx);
    console.log(totalBal);
    balPlace.innerText = totalBal.toString();
}
