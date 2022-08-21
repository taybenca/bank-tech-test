class Bank {
    constructor(balance) {
        this.balance = balance
    }

    deposit(value, date){
        this.date = date
        this.valueDep = value
        this.balance += value
    }

    withdraw(value, date){
        this.date = date
        this.valueWith = value
        this.balance -= value
    }
    
    getTotal(){
        return this.balance
    }

    createTable(){
        const transaction = {
            'date': this.date, 
            'credit': this.valueDep, 
            'debit': this.valueWith, 
            'balance': this.balance
        }       
        this.data = [transaction]
        console.table(this.data)
        return true
    }
}

// User makes their first transaction: deposit of 1000, the balance starts at zero.
const firstTransaction = new Bank(0)
firstTransaction.deposit(1000, '10/01/2023')
firstTransaction.createTable()

// User makes their second transaction: deposit of 2000.
const secondTransaction = new Bank(firstTransaction.getTotal())
secondTransaction.deposit(2000, '13/01/2023')
secondTransaction.createTable()

// User makes their third transaction: withdraw of 500.
const thirdTransaction = new Bank(secondTransaction.getTotal())
thirdTransaction.withdraw(500, '14/01/2023')
thirdTransaction.createTable()

module.exports = Bank;