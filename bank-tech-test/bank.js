class Bank {
    constructor() {
        this.statement = 0
    }

    deposit(value, date){
        this.statement += value
    }

    withdraw(value, date){
        this.statement -= value
    }
    
    getTotal(){
        return this.statement
    }
}

module.exports = Bank;