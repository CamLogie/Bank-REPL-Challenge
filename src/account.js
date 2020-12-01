class Account {
  constructor() {
    this.balance = 0
    this.transactions = []
  }
  
  deposit(value) {
    this.transactions.push(new Transaction(value, 'credit'))
  }

  withdraw(value) {
    this.transactions.push(new Transaction(value, 'debit'))
  }
}