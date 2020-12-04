describe('Transaction', () => {

  it('Takes in an integer as an argument', () => {
    let transaction = new Transaction(400, 'credit')
    expect(transaction.value).toBe(400)
  })

  it('Takes a string as an argument', () => {
    let transaction = new Transaction(400, 'credit')
    expect(transaction.type).toBe('credit')
  })

  it('creates a timestamp upon construction', () => {
    let transaction = new Transaction(400, 'credit')
    expect(transaction.timestamp).toBe(new Date().toLocaleDateString())
  })

})