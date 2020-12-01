describe('Account', () => {
  let account 

  beforeEach(() => {
    account = new Account();
  })
  it('has a balance that starts at 0', () => {
  expect(account.balance).toBe(0)
  });

  it('has a method deposit that takes in a value as an argument and pushes a transaction object into the transactions array', () => {
    account.deposit(5)
    expect(account.transactions.length).toBe(1)
    expect(account.transactions[0].value).toBe(5)
    expect(account.transactions[0].type).toBe('credit')
  });

  it(' has a method withdraw that takes in a transaction as an argument and subtracts the amount withdrawn from the balance', () => {
    account.withdraw(5)
    expect(account.transactions.length).toBe(1)
    expect(account.transactions[0].value).toBe(5)
    expect(account.transactions[0].type).toBe('debit')
  })

})