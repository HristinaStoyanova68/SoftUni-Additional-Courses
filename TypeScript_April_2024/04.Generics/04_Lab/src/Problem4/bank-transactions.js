class CreateAccount {
    bankName;
    bankId;
    constructor(bankName, bankId) {
        this.bankName = bankName;
        this.bankId = bankId;
    }
}
class PersonalAccount extends CreateAccount {
    ownerName;
    money;
    recentTransactions;
    constructor(bankName, bankId, ownerName) {
        super(bankName, bankId);
        this.ownerName = ownerName;
        this.money = 0;
        this.recentTransactions = {};
    }
    deposit(amount) {
        this.money += amount;
    }
    expense(amount, expenseType) {
        if (this.money >= amount) {
            this.money -= amount;
            if (this.recentTransactions[expenseType]) {
                this.recentTransactions[expenseType] += amount;
            }
            else {
                this.recentTransactions[expenseType] = amount;
            }
        }
        else {
            console.log(`You cant make ${expenseType} transaction`);
        }
    }
    showDetails() {
        const totalMoneySpentOnExpenses = Object.values(this.recentTransactions).reduce((acc, values) => acc + values, 0);
        return `
        Bank name: ${this.bankName}
        Bank ID: ${this.bankId}
        Owner name: ${this.ownerName}
        Money: ${this.money}
        Money spent: ${totalMoneySpentOnExpenses}
        `;
    }
}
// let account = new PersonalAccount('DSK', 101240,
// 'Ivan Ivanov');
// account.deposit(1000);
// account.deposit(1000);
// account.expense(700, 'Buy new phone');
// account.expense(400, 'Book a vacation');
// account.expense(400, 'Book a vacation');
// account.expense(100, 'Buy food');
// console.log(account.showDetails());
let account2 = new PersonalAccount('Fibank', 100000, 'Petar Petrol');
account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, 'Buy a new car');
account2.expense(200, 'Go to a fancy restaurant');
account2.expense(100, 'Go to a bar');
account2.expense(30, 'Go to the movies');
console.log(account2.showDetails());
//# sourceMappingURL=bank-transactions.js.map