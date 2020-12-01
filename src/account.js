class Account {
  constructor() {
    this.balance = 0
    this.transactions = []
  }
  
  deposit(value) {
    this.balance += value
    this.transactions.push(new Transaction(value, 'credit'))
  }

  withdraw(value) {
    this.balance -= value
    this.transactions.push(new Transaction(value, 'debit'))
  }

}