class printStatement {
  constructor(account) {
    this.account = account
  } 

  printStatement() {
    let statement = `Date || Credit || Debit || Balance\n`
    let balance = 0

    this.account.transactions.forEach( transaction => { 
      if (transaction.type === 'credit') {
        statement += `${transaction.timestamp} || ${transaction.type} || || ${balance += transaction.value}\n`
      }
      else {
        statement += `${transaction.timestamp} || || ${transaction.type} || ${balance -= transaction.value}\n`
      }
      
    });
    
    console.log(statement)
      
  }
    
}