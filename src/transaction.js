class Transaction {
  constructor(value) {
    this.value = value
    this.timestamp = new Date().toLocaleDateString()
    this.type = this.type_of_transaction()
  }

  type_of_transaction() {
    if (this.value > 0) {
      return 'credit'
    }
    else if (this.value < 0) {
      return 'debit'
    }
  }
}