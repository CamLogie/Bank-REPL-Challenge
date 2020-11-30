describe('Transaction', () => {
  it('Takes in an integer as an argument', () => {
    let transaction = new Transaction(400)
    expect(transaction.value).toBe(400)
  })

  it('creates a timestamp upon construction', () => {
    let transaction = new Transaction(400)
    expect(transaction.timestamp).toBe(new Date().toLocaleDateString())
  })

  it('has method type_of_transaction that returns deposit if transaction value is positive', () => {
    let transaction = new Transaction(400)
    expect(transaction.type_of_transaction()).toBe('credit')
  })

  it('has method type_of_transaction that returns withdrawl if transaction value is negative', () => {
    let transaction = new Transaction(-400)
    expect(transaction.type_of_transaction()).toBe('debit')
  })

  it('classifies the type of transaction upon construction', () =>{
    let transaction = new Transaction(400)
    expect(transaction.type).toBe('credit')
  })

})