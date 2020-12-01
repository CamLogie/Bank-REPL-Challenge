class Transaction {
  constructor(value, transactionType) {
    this.value = value
    this.timestamp = new Date().toLocaleDateString()
    this.type = transactionType
  }
}