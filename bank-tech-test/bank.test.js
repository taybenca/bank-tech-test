const Bank = require('./bank')

describe('Bank', () => {
    it('user make a deposit of 500', () => {
        const bank = new Bank();
        bank.deposit(500);
        expect(bank.getTotal()).toEqual(500);
    })

    it('user make a deposit of 500 and 100', () => {
        const bank = new Bank();
        bank.deposit(500);
        bank.deposit(100);
        expect(bank.getTotal()).toEqual(600);
    })

    it('user make a deposit of 2000 and withdraw of 500', () => {
        const bank = new Bank();
        bank.deposit(2000);
        bank.withdraw(500);
        expect(bank.getTotal()).toEqual(1500)
    })
})