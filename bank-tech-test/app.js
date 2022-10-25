const Bank = require('./bank')
const Display = require('./display.js')

const bank = new Bank(0);

// User makes their first transaction: deposit of 1000, the balance starts at zero.
bank.deposit(1000, '10/01/2023');
// User makes their second transaction: deposit of 2000.
bank.deposit(2000, '13/01/2023');
// User makes their third transaction: withdraw of 500.
bank.withdraw(500, '14/01/2023');

// Print the bank statement to the user on console
const statement = bank.createStatement()
const display = new Display(statement)


display.displayStatement()