var bill = document.querySelector(".bill-ipt");
var btn = document.querySelector("#bill-btn");

function clickHandler(){
   var va = bill.value;
   console.log("Input" + va);
}

btn.addEventListener("click", clickHandler);