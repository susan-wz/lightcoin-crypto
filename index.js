class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      console.log(this.transactions[i]);
      balance += this.transactions[i].amount;
    } return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.time = new Date();
    this.account.addTransaction(this);

  }
}

class Withdrawal extends Transaction {

  get value() {
    return -(this.amount);
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("susanz");

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 1:', t2);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 2:', t3);

console.log('Balance:', myAccount.balance);
