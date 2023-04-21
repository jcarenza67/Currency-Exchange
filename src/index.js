import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './currency.js';

let cachedExchange = null;

function displayRate(amount, exchange, currency) {
  const exchangeRate = exchange.conversion_rates[currency];
  if (!exchangeRate) {
    throw new Error(`The currency ${currency} is not supported`);
  }
  const conversion = amount * exchangeRate;
  const conversionString = conversion.toLocaleString('en-US', { style: 'currency', currency: currency });
  return conversionString;
}

const currencyDropdown = document.querySelector('#currency');

ExchangeRate.getCurrencies().then(currencies => {
  currencies.forEach(currency => {
    const option = document.createElement('option');
    option.value = currency.code;
    option.text = `${currency.code} - ${currency.name}`;
    currencyDropdown.add(option);
  });
}).catch(error => {
  const message = `There was an error: ${error.message}`;
  document.querySelector('#result').innerHTML = message;
});

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const amount = parseFloat(document.querySelector('#amount').value);
  const currency = document.querySelector('#currency').value;

  if (cachedExchange) {
    const conversionString = displayRate(amount, cachedExchange, currency);
    const message = `Your $${amount} USD is worth ${conversionString}`;
    document.querySelector('#result').innerHTML = message;
  } else {
    ExchangeRate.getExchangeRate().then(function(exchange) {
      sessionStorage.setItem('exchangeRate', JSON.stringify(exchange));
      const conversionString = displayRate(amount, exchange, currency);
      const message = `Your $${amount} USD is worth ${conversionString}`;
      document.querySelector('#result').innerHTML = message;
    }).catch(error => {
      const message = `There was an error: ${error.message}`;
      document.querySelector('#result').innerHTML = message;
    });
  }
});