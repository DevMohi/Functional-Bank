function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

function getElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueString = element.innerText;
  const value = parseFloat(elementValueString);
  return value;
}

function setTextElementValueById(elementId, newValue) {
  const element = document.getElementById(elementId);
  element.innerText = newValue;
}
