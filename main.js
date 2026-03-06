const convertButton = document.querySelector('.convertButton');
const currencyInput = document.querySelector('.currencyInput');

const currencyValues = document.querySelectorAll('.currency-value');

function convertMoney() {
    const inputValue = currencyInput.value;

    const url = "https://v6.exchangerate-api.com/v6/37ce2f7504711a40d2c7fda9/latest/USD";

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const dollarRate = data.conversion_rates.BRL;

            const convertedValue = inputValue / dollarRate;

            // Valor em Real (lado esquerdo)
            currencyValues[0].innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(inputValue);

            // Valor em Dólar (lado direito)
            currencyValues[1].innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(convertedValue);

        })
        .catch(error => {
            console.error('Erro ao obter a taxa de câmbio:', error);
        });
}

convertButton.addEventListener('click', convertMoney);