class printStatement {
  constructor(account) {
    this.account = account
  } 

  printStatement() {
    
    let statement = `Date || Credit || Debit || Balance\n`
    let balance = 0

    this.account.transactions.forEach( transaction => { 
      if (transaction.type === 'credit') {
        balance += transaction.value
        statement += `${transaction.timestamp} || ${transaction.value.toFixed(2)} || || ${balance.toFixed(2)}\n`
      }
      else {
        balance -= transaction.value
        statement += `${transaction.timestamp} || || ${transaction.value.toFixed(2)} || ${balance.toFixed(2)}\n`
      }
      
    });
    
    console.log(statement)
      
  }
    
}