describe('printStatement', () => {

  let account

  beforeEach(() => {
    account = { 
      balance: 0, 
      transactions: [
        { value: 1000,
          timestamp: new Date().toLocaleDateString(),
          type: 'credit' },
        { value: 500, 
          timestamp: new Date().toLocaleDateString(),
          type: 'debit' },
        { value: 400,
          timestamp: new Date().toLocaleDateString(),
          type: 'debit' } 
      ] }
  })

  it('takes in an account as an argument upon construction', () => {
    expect(new printStatement(account).account).toBe(account)
  })

  

  it('has method printStatement that prints each transaction', () => {
    statement = new printStatement(account)
    spyOn(console, 'log')
    statement.printStatement()
    expect(console.log).toHaveBeenCalledWith(
    `Date || Credit || Debit || Balance\n` + 
    `${account.transactions[0].timestamp} || ${account.transactions[0].value.toFixed(2)} || || 1000.00\n` + 
    `${account.transactions[1].timestamp} || || ${account.transactions[1].value.toFixed(2)} || 500.00\n` +
    `${account.transactions[2].timestamp} || || ${account.transactions[2].value.toFixed(2)} || 100.00\n`)
  })




})