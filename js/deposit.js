document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");
  //aikane value ta return korbe

  const previousDepositTotal = getElementValueById("deposit-total");

  if (isNaN(newDepositAmount)) {
    alert("Please Input a valid number");
    return;
  }

  //Calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;

  // set deposit total value;
  setTextElementValueById("deposit-total", newDepositTotal);

  const previousBalanceTotal = getElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;

  setTextElementValueById("balance-total", newBalanceTotal);
});
