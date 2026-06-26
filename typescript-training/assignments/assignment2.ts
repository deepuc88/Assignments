// Assignment 2: Conditional Statements

let customerName: string = "John Doe";
let creditScore: number = 749;
let income: number = 50001.0;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 41.0;

checkLoanApproval(customerName, creditScore, income, isEmployed, debtToIncomeRatio);

function checkLoanApproval(customerName: string, creditScore: number, income: number, isEmployed: boolean, debtToIncomeRatio: number) {
    if (creditScore > 750) {
        console.log(`${customerName} loan is approved.`);
    }
    else if (creditScore >= 650 && creditScore <= 750) {
        if(income >= 50000) {
            if(isEmployed) {
                if(debtToIncomeRatio < 40) {
                console.log(`${customerName} loan is approved.`);
            }
            else{
                console.log(`${customerName} loan is not approved. Reason: Cutomer Debt to Income Ratio is high.`);
            }
        }
        else{ 
                console.log(`${customerName} loan is not approved. Reason: Customer is not employed.`);
        }        
    } 
    else{
                console.log(`${customerName} loan is not approved. Reason: Customer Income is below 50000.`);
            }        
        }  
else{  
    console.log(`${customerName} loan is not approved. Reason: Customer Credit score is below 650.`);
}
}