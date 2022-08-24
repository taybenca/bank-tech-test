const Bank = require('./bank')

describe('Bank', () => {
    it('user make a deposit of 500', () => {
        const bank = new Bank(0);
        bank.deposit(500);
        expect(bank.getTotal()).toEqual(500);
    })

    it('user make a deposit of 500 and 100', () => {
        const bank = new Bank(0);
        bank.deposit(500);
        bank.deposit(100);
        expect(bank.getTotal()).toEqual(600);
    })

    it('user make a deposit of 2000 and withdraw of 500', () => {
        const bank = new Bank(0);
        bank.deposit(2000);
        bank.withdraw(500);
        expect(bank.getTotal()).toEqual(1500)
    })

    it('returns a bank statement when user make a deposit of 1000, withdraw of 300', () => {
        const bank = new Bank(0);
        bank.deposit(1000, '01/01/01');
        bank.withdraw(300, '02/02/02');
        expect(bank.createObject()[1]).toEqual({"balance": 700, "credit": 1000, "date": "02/02/02", "debit": 300})
    })
})