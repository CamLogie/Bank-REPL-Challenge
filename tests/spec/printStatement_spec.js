describe('printStatement', () => {
  it('takes in an account as an argument upon construction', () => {
    let account = { 
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
    expect(new printStatement(account).account).toBe(account)
  })
})