const convertButton = document.querySelector(".convertButton");
const currencySelect = document.querySelector(".currencySelect");
const currencyInput = document.querySelector(".currencyInput");

const currencyValueToConvert = document.querySelector(
  ".currency-value-to-convert",
);
const currencyValue = document.querySelector(".currency-value");

const currencyName = document.querySelector(".currencyName");
const currencyFlag = document.querySelector(".currencyFlag");

async function convertMoney() {
  const inputValue = currencyInput.value;

  const url =
    "https://v6.exchangerate-api.com/v6/37ce2f7504711a40d2c7fda9/latest/BRL";

  const response = await fetch(url);
  const data = await response.json();

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);

  const rate = data.conversion_rates[currencySelect.value];

  const convertedValue = inputValue * rate;

  currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencySelect.value,
  }).format(convertedValue);
}

function changeCurrency() {
  if (currencySelect.value === "USD") {
    currencyName.innerHTML = "Dólar Americano";
    currencyFlag.src = "assets/usa-flag.svg";
  }

  if (currencySelect.value === "EUR") {
    currencyName.innerHTML = "Euro";
    currencyFlag.src = "assets/euro.png";
  }

  convertMoney();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertMoney);
