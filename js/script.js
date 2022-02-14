//Login button event handler start
//select elements
const enterBtn = document.getElementById("enterBtn");
const loginArea = document.getElementById("loginArea");
const transactionArea = document.getElementById("transactionArea");

//Define addEventListener
enterBtn.addEventListener("click", display2ndPage);

//Define function
function display2ndPage(){
    loginArea.style.display = "none";
    transactionArea.style.display = "block";
}
//Login button event handler end


//Deposit button event handler start
//select 2 input elements
const addDeposit = document.getElementById("addDeposit");
const addWithdrew = document.getElementById("addWithdrew");

/*
//Define addEventListener
addDeposit.addEventListener("click", function(){
      //totalDeposit start
       const depositAmount = document.getElementById("depositAmount").value;
       const depositNumber = parseFloat(depositAmount);

       const currentDeposit = document.getElementById("currentDeposit").innerText;//read
       const currentDepositNumber = parseFloat(currentDeposit);

       const totalDeposit = depositNumber + currentDepositNumber;
       console.log(totalDeposit);

       document.getElementById("currentDeposit").innerText = totalDeposit;//ride
       //totalDeposit end

       //totalBalence start
       const currentBalence = document.getElementById("currentBalence").innerText;
       const currentBalenceNumber = parseFloat(currentBalence);

       const totalBalence = depositNumber + currentBalenceNumber;

       document.getElementById("currentBalence").innerText = totalBalence;
       //totalBalence end

       document.getElementById("depositAmount").value = "";//will empty inbox
});
*/

//Deposit button event handler start
//convert into another function
addDeposit.addEventListener("click", function(){
    
     const depositNumber = getInputNumber("depositAmount");//pass id


     //totalDeposit start call
     updateSpanText("currentDeposit", depositNumber);
     //totalDeposit end call

     //totalBalence start call
     updateSpanText("currentBalence", depositNumber);
     //totalBalence end call

     document.getElementById("depositAmount").value = "";//will empty inbox
});
//Deposit button event handler end

//Withdrew button event handler start
//convert into another function
addWithdrew.addEventListener("click", function(){
    
    const withdrewNumber = getInputNumber("withdrewAmount");//pass id
    

    //totalWithdrew start call
    updateSpanText("currentWithdrew", withdrewNumber);
    //totalWithdrew end call

    //totalBalence start call
    updateSpanText("currentBalence", -1 * withdrewNumber);
    //totalBalence end call

    document.getElementById("withdrewAmount").value = "";//will empty inbox
});
//Withdrew button event handler end


function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}


function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);

    const total = depositNumber + currentNumber;

    document.getElementById(id).innerText = total;
}




