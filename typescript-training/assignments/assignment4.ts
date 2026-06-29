
let transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
let creditTransactionCount: number = 0;
let debitTransactionCount: number = 0;
let totalCreditAmount: number = 0;
let totaldebitAmount: number = 0;
let balanceAmount: number = 0;
let suspeciousTransactionCount = 0;
let suspiciousCreditTransaction: number[] = [];
let suspiciousDebitTransaction: number[] = [];
let creditIndex = 0;
let debitIndex = 0;

for (let i = 0; i < transactions.length; i++) {
    if (transactions[i] >= 0) {
        creditTransactionCount = creditTransactionCount + 1;
        totalCreditAmount = totalCreditAmount + transactions[i];

        if (transactions[i] > 10000) {
            suspeciousTransactionCount = suspeciousTransactionCount + 1;
            suspiciousCreditTransaction[creditIndex] = transactions[i]
            creditIndex++
        }
    }
    else if (transactions[i] < 10000) {
        debitTransactionCount = debitTransactionCount + 1;
        totaldebitAmount = totaldebitAmount + transactions[i]

        if (transactions[i] < -10000) {
            suspeciousTransactionCount = suspeciousTransactionCount + 1
            suspiciousDebitTransaction[debitIndex] = transactions[i]
            debitIndex++;
        }
    }
}

balanceAmount = totalCreditAmount + totaldebitAmount

console.log(`Total number of Credit transactions :  ${creditTransactionCount}`)
console.log(`Total number of Debit transactions :  ${debitTransactionCount}`)
console.log(`Total amount credited in the account : ${totalCreditAmount}`)
console.log(`Total amount debited in the account : ${totaldebitAmount}`)
console.log(`Total amount balance in the account : ${balanceAmount}`)
console.log(`Suspicious Credit Transction amount : ${suspiciousCreditTransaction}`)
console.log(`Suspicious Debit Transction amount : ${suspiciousDebitTransaction}`)
console.log(`Suspicious Transction count : ${suspeciousTransactionCount}`)