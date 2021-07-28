var billAmount = document.querySelector(".bill-ipt");
var cashAmount = document.querySelector(".cash-ipt");
var billButton = document.querySelector("#bill-btn");
var cashDisplay = document.querySelector(".cash-div");
var billButtonDisplay = document.querySelector(".bill-btn");
var cashButton = document.querySelector(".cash-btn");
var errDisplay = document.querySelector(".err-msg");
var errMessage = document.querySelector("#err-opt");

function billHandler(){
   if(billAmount.value <= 0){
      errMessage.innerHTML = "Please Enter a valid bill amount";
      errDisplay.style.display = "block";
   }else{
      billButton.style.display = "none";
      cashDisplay.style.display = "block";
      errDisplay.style.display = "none";
   }
}

function cashHandler(){
   
}

billButton.addEventListener("click", billHandler);
cashButton.addEventListener("click", cashHandler);