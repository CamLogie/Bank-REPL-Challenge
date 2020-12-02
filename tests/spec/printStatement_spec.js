describe('printStatement', () => {

  let account

  beforeEach(() => {
    account = { 
      balance: 100, 
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
    spyOn(console, 'log');
    statement.printStatement()
    expect(console.log).toHaveBeenCalledWith(
    `Date || Credit || Debit || Balance\n` + 
    `${account.transactions[0].timestamp} || ${account.transactions[0].type} || || 1000\n` + 
    `${account.transactions[1].timestamp} || || ${account.transactions[1].type} || 500\n` +
    `${account.transactions[2].timestamp} || || ${account.transactions[2].type} || 100\n`)
  })




})