let tax = 1.005;
let userCard = (userCardNumber) => {
    return {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: userCardNumber,
        getCardOptions: function () {
            return {
                key: this.key,
                balance: this.balance,
                transactionLimit: this.transactionLimit,
                historyLogs: this.historyLogs,
            };
        },
        putCredits: function (moneyPlus) {
            this.balance += moneyPlus;
            console.log();
            this.historyLogs.push({
                operationType: 'Received credits',
                credits: moneyPlus,
                operationTime: new Date(),
            });
        },
        takeCredits: function (moneyMinus) {
            this.balance -= moneyMinus;
            this.historyLogs.push({
                operationType: 'withdrawOfCredits',
                credits: moneyMinus,
                operationTime: new Date(),
            });
        },
        setTransactionLimit: function (limit) {
            this.transactionLimit = limit;
            this.historyLogs.push({
                operationType: 'Transaction limit change',
                credits: limit,
                operationTime: new Date(),
            });
        },
        transferCredits: function (credits, cartNumber) {
            if (this.balance >= credits) {
                if (credits <= this.transactionLimit) {
                    this.takeCredits(credits);
                    cartNumber.putCredits((credits / tax));
                } else console.log('Card limit exceeded');
            } else console.log('You do not have enough funds on your balance');
        }
    };
};


///////////////////////////////////////////////////////////////////////
//Second part.
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard() {
        if (this.cards.length <= 2) {
            this.cards.push(
                userCard(this.cards.length + 1));
        } else console.log('Number of Cards exceeded');
    }
    getCardByKey(keyNumber) {
        if(keyNumber<=3&&keyNumber>=1){
            return user.cards.find(value => value.key===keyNumber)}

        return 'Please enter number from 1 to 3' ;
    }
}
const user = new UserAccount('Bob');
user.addCard();
user.addCard();

console.log(user.getCardByKey(2));
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());