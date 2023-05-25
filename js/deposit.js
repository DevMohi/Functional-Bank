document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");

  const previousDepositTotal = getElementValueById("deposit-total");

  //Calculate new deposit total
  const newDepositTotal = previousDepositTotal + newDepositAmount;

  // set deposit total value;
  setTextElementValueById("deposit-total", newDepositTotal);

  const previousBalanceTotal = getElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;

  setTextElementValueById("balance-total", newBalanceTotal);
});


