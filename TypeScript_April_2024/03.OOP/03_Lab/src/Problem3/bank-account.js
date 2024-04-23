class BankAccount {
    static nextId = 1;
    static interestRate = 0.02;
    _id;
    _balance;
    constructor() {
        this._id = BankAccount.nextId++;
        this._balance = 0;
    }
    static setInterestRate(rate) {
        BankAccount.interestRate = rate;
    }
    static getInterestRate() {
        return BankAccount.interestRate;
    }
    deposit(deposit) {
        if (deposit > 0) {
            this._balance += deposit;
        }
    }
    getInterest(years) {
        const totalInterest = this._balance * BankAccount.interestRate * years;
        return totalInterest;
    }
    get id() {
        return this._id;
    }
}
const accounts = new Map();
function executeCommand(command) {
    const parts = command.split(" ");
    const action = parts[0];
    switch (action) {
        case "Create":
            const account = new BankAccount();
            accounts.set(account.id, account);
            console.log(`Account ID${account.id} created`);
            break;
        case "Deposit":
            const currAccountId = Number(parts[1]);
            const depositAmount = parseFloat(parts[2]);
            const roundedDeposit = Math.round(depositAmount * 100) / 100;
            const accountToDeposit = accounts.get(currAccountId);
            if (accountToDeposit) {
                accountToDeposit.deposit(roundedDeposit);
                console.log(`Deposited ${roundedDeposit} to ID${currAccountId}`);
            }
            else {
                console.log("Account does not exist");
            }
            break;
        case "SetInterest":
            const currInterest = Number(parts[1]);
            const roundedInterest = Math.round(currInterest * 100) / 100;
            BankAccount.setInterestRate(roundedInterest);
            break;
        case "GetInterest":
            const accountIdForInterest = Number(parts[1]);
            const years = Number(parts[2]);
            const accountForInterest = accounts.get(accountIdForInterest);
            if (accountForInterest) {
                const interestAmount = accountForInterest.getInterest(years);
                console.log(interestAmount.toFixed(2));
            }
            else {
                console.log('Account does not exist');
            }
            break;
        default:
            break;
    }
}
// executeCommand("Create");
// executeCommand("Deposit 1 20");
// executeCommand("GetInterest 1 10");
// executeCommand("End");
executeCommand("Create");
executeCommand("Create");
executeCommand("Deposit 1 20");
executeCommand("Deposit 3 20");
executeCommand("Deposit 2 10");
executeCommand("SetInterest 1.5");
executeCommand("GetInterest 1 1");
executeCommand("GetInterest 2 1");
executeCommand("GetInterest 3 1");
executeCommand("End");
//# sourceMappingURL=bank-account.js.map