describe('Transaction', () => {
  it('Takes in an integer as an argument', () => {
    let transaction = new Transaction(400)
    expect(transaction.value).toBe(400)
  })
})