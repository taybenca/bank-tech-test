# The problem

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date       || credit  || debit  || balance
14/01/2023 ||         || 500.00 || 2500.00
13/01/2023 || 2000.00 ||        || 3000.00
10/01/2023 || 1000.00 ||        || 1000.00


# Functions: 

deposit = (value) => {
    // deposit a value
}


withdraw = (value) => {
    // withdraw a value
}

viewBankStatement = () => {

    deposit(1000)
    deposit(2000)
    withdraw(500)

}

printConsole = () => {
    console.table(data, columns)
}

# Tests
balance = 0
deposit(1000) => balance = 1000
deposit(2000) => balance = 3000
withdraw(500) => balance = 2500