const totalNotes = [2000,500,100,20,10,5,1];
var retrnAmount = 0;
var billAmount = document.querySelector(".bill-ipt");
var cashAmount = document.querySelector(".cash-ipt");
var billButton = document.querySelector("#bill-btn");
var cashDisplay = document.querySelector(".cash-div");
var billDisplay = document.querySelector(".bill-div");
var billButtonDisplay = document.querySelector(".bill-btn");
var cashButton = document.querySelector(".cash-btn");
var errDisplay = document.querySelector(".err-msg");
var errMessage = document.querySelector("#err-opt");
var showNotes = document.querySelectorAll(".showNotes");
var output = document.querySelector(".opt");
var resetButton = document.querySelector(".reset-btn");

function calNotes(){
   let bill = billAmount.value;
   let cash = cashAmount.value;
   retrnAmount = cashAmount.value-billAmount.value;

   if(retrnAmount == 0){
      showErr("No need to return any amount");
   }
   else{
      for(var i=0; i<totalNotes.length; i++){
         var left = Math.floor(retrnAmount/totalNotes[i]);
         if(left > 0){
            showNotes[i].innerHTML = left;
         }
         retrnAmount -= (left*totalNotes[i]);
      }

      hideErr();
      cashDisplay.style.display = "none";
      billDisplay.style.display = "none";
      resetButton.style.display = "block";
      output.style.display = "block";
   }
   
}

function resetHandler(){
   location.reload();
}

function billHandler(){
   if(billAmount.value > 0){
      billButton.style.display = "none";
      cashDisplay.style.display = "block";
      hideErr();
   }else{
      showErr("Please Enter a valid bill amount");
   }
}

function cashHandler(){
   if(cashAmount.value <= 0){
      showErr("Enter a valid cash amount.")
   }else if(Number(cashAmount.value) < Number(billAmount.value)){
      showErr("Cash amount should be greater than bill amount.")
   }else{
      hideErr();
      calNotes();
   }
}

billButton.addEventListener("click", billHandler);
cashButton.addEventListener("click", cashHandler);
resetButton.addEventListener("click", resetHandler);

function hideErr(){
   errDisplay.style.display = "none";
}

function showErr(msg){
   errMessage.innerHTML = msg;
   errDisplay.style.display = "block"; 
}