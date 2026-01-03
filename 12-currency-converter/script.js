// Exchange rates (example rates - in production, use API)
const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.73, JPY: 110, INR: 75 },
    EUR: { USD: 1.18, GBP: 0.86, JPY: 129, INR: 88 },
    GBP: { USD: 1.37, EUR: 1.16, JPY: 150, INR: 103 },
    JPY: { USD: 0.009, EUR: 0.0077, GBP: 0.0067, INR: 0.68 },
    INR: { USD: 0.013, EUR: 0.011, GBP: 0.0097, JPY: 1.47 }
};

const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const resultInput = document.getElementById('result');
const swapBtn = document.getElementById('swapBtn');
const rateInfo = document.getElementById('rateInfo');

function convert() {
    const amount = parseFloat(amountInput.value) || 0;
    const from = fromCurrency.value;
    const to = toCurrency.value;
    
    if (from === to) {
        resultInput.value = amount;
        rateInfo.textContent = 'Same currency selected';
        return;
    }
    
    let rate;
    if (from === 'USD' || from === 'EUR' || from === 'GBP' || from === 'JPY' || from === 'INR') {
        rate = exchangeRates[from][to];
    } else {
        rate = 1 / exchangeRates[to][from];
    }
    
    const result = amount * rate;
    resultInput.value = result.toFixed(2);
    rateInfo.textContent = `1 ${from} = ${rate.toFixed(4)} ${to}`;
}

amountInput.addEventListener('input', convert);
fromCurrency.addEventListener('change', convert);
toCurrency.addEventListener('change', convert);

swapBtn.addEventListener('click', () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    convert();
});

convert();

