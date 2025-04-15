class BankAccount {

    accountHolder;
    accountNumber;
    balance;

    constructor(name, accountNo, openingBalance) {
        this.accountHolder = name;
        this.accountNumber = accountNo;
        this.balance = openingBalance; 
    }

    printAccountDetails() {
        console.log(`Account Holder's Name: ${this.accountHolder}`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Balance: ${this.balance}`);
    }

    deposit(amount) {
        console.log(`Depositing ${amount} in the account`);
        this.balance = this.balance+amount;
    }

    withdraw(amount) {
        console.log(`Trying to withdraw ${amount} from the account`);
        if (amount > this.balance) {
            console.log(`Insufficient balance in the account`);
        }
        else {
            console.log(`Withdrew ${amount} from the account`);
            this.balance = this.balance - amount;
        }
        
    }


}

let account1 = new BankAccount("Aeraf", 100987, 15000);
account1.printAccountDetails();
account1.deposit(5000);
account1.printAccountDetails();

account1.withdraw(19000);
account1.printAccountDetails();




// let account2 = new BankAccount("Mubin", 100988, 18000);
// account2.printAccountDetails();