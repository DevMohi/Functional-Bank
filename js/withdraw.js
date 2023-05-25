document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  const previousWithdrawTotal = getElementValueById("withdraw-total");
  const previousBalanceTotal = getElementValueById("balance-total");

  if (newWithdrawAmount > previousBalanceTotal) {
    alert("Insufficient balance");
    return;
  }

  if (isNaN(newWithdrawAmount)) {
    alert("Please Input a valid number");
    return;
  }

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
