class Bank {
    constructor(balance) {
        this.balance = balance
        this.statement = []
    }

    deposit(value, date){
        this.date = date
        this.depositValue = value
        this.balance += value
        this.createStatement()
    }

    withdraw(value, date){
        this.date = date
        this.withdrawValue = value
        this.balance -= value
    }
    
    getTotal(){
        return this.balance
    }

    createStatement(){
        this.transaction = {
            'date': this.date, 
            'credit': this.depositValue, 
            'debit': this.withdrawValue, 
            'balance': this.balance
        }
        this.statement.push(this.transaction)
        return this.statement
    }
}

module.exports = Bank;