
const sbiBank = {

    bankName : "State Bank of India",
    location : "Pune",
    accountNo : "SBI09893222123",
    ifsc : "SBIN000312",
    interestRate : "11%",

    showDetails: function() {
     
        console.log(`SBIBankDetails : Name Of Bank :${this.bankName}, Location:${this.location},Acc No :${this.accountNo},IFSC : ${this.ifsc}, Interest Rate : ${this.interestRate}`);
        
    }

};

const axisBank = {

    bankName : "Axis Bank",
    location : "Nashik",
    accountNo : "Axs08893222123",
    ifsc : "Axis000312",
    interestRate : "9%",

    showDetails: function() {
     
        console.log(`AxisBankDetails : Name Of Bank :${this.bankName}, Location:${this.location},Acc No :${this.accountNo},IFSC : ${this.ifsc}, Interest Rate : ${this.interestRate}`);
        
    }
};


const hdfcBank = {

    bankName : "HdFC Bank",
    location : "Kolhapur",
    accountNo : "HDFC0989323323",
    ifsc : "hdfc000312",
    interestRate : "12%",

    showDetails: function() {
     
        console.log(`HDFCBankDetails : Name Of Bank :${this.bankName}, Location:${this.location},Acc No :${this.accountNo},IFSC : ${this.ifsc}, Interest Rate : ${this.interestRate}`);
        
    }
};


const yesBank = {

    bankName : "yes Bank",
    location : "Nagpur",
    accountNo : "Yes0989327623",
    ifsc : "Yes000312",
    interestRate : "15%",
    
    showDetails: function() {
     
        console.log(`YesBankDetails : Name Of Bank :${this.bankName}, Location:${this.location},Acc No :${this.accountNo},IFSC : ${this.ifsc}, Interest Rate : ${this.interestRate}`);
        
    }
};


sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();

