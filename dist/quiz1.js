"use strict";
const content1 = document.getElementById("content1");
let item = document.getElementById("income");
const btn = document.getElementById("create-btn");
let expense = document.getElementById("expense");
let amountValue = document.getElementById("amount");
let incomeValue = document.getElementById("incomes");
let expensediv = document.getElementById("expensediv");
let balPlace = document.getElementById("bal");
let incomVal = document.getElementById("incomVal");
let allRecords = document.getElementById("allRecords");
let dates = document.getElementById("date");
class Balance {
    constructor() {
        this.balance = 0;
    }
    getTotalBalance(income, expense) {
        return (this.balance = income - expense);
    }
}
let vee = new Balance();
console.log(vee.getTotalBalance(50, 4));
class Expense {
    constructor(amount) {
        this.amount = amount;
    }
}
class Income {
    constructor(amountIncome) {
        this.amountIncome = amountIncome;
    }
}
const Usage = [];
btn.addEventListener("click", Tracker);
const Salary = [];
function Tracker() {
    // SHOW EXPENSE
    expensediv.innerHTML = "";
    const amountExpense = amountValue.value;
    let singleExpense = amountExpense;
    Usage.push(singleExpense);
    let totalexpenses = Usage.map(Number);
    let sumtotalEx = 0;
    // total expenses
    for (let i = 0; i < totalexpenses.length; i += 1) {
        sumtotalEx += totalexpenses[i];
    }
    let html1 = `
    <div class="expense">
    <h2>Expense</h2>
      <p style="color:red;">$ ${sumtotalEx}<p>
                   
    </div>`;
    expensediv.innerHTML += html1;
    // SHOW INCOME
    item.innerHTML = "";
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
  <h2>Income</h2>
    <p>$ ${sumtotalIn}<p>
                 
  </div>`;
    item.innerHTML += html;
    // Balance
    let bal = new Balance();
    let totalBal = bal.getTotalBalance(sumtotalIn, sumtotalEx);
    console.log(totalBal);
    balPlace.innerText = "$ " + " " + totalBal.toString();
    let date = dates.value;
    let expense = +amountValue.value;
    let income = +incomeValue.value;
    let tracker = ` 
  <div class="incomem" style="display:flex;gap:30px;">
    <ion-icon name="add-outline" style="color:green;font-size:18px;"></ion-icon>
    <p style="color:black;font-size:18px;">$ ${income}</p>
    <p style="color:black;font-size:18px;"> Income</p>
    <p style="color:black;font-size:18px;">${date}</p>
  </div>

    <div class="expensem" style="display:flex;gap:30px;">
    <ion-icon name="remove-outline" style="color:red;font-size:18px;"></ion-icon>
        <p style="color:black;font-size:18px;">$ ${expense}</p>
        <p style="color:black;font-size:18px;"> Expenses</p>
        <p style="color:black;font-size:18px;">${date}</p>
    </div>`;
    allRecords.insertAdjacentHTML("afterbegin", tracker);
}
