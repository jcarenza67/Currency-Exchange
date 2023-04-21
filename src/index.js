import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './currency.js';

let cachedExchange = null;

function displayRate(amount, exchange, currency) {
  const exchangeRate = exchange.conversion_rates[currency];
  const conversion = amount * exchangeRate;
  const conversionString = conversion.toLocaleString('en-US', { style: 'currency', currency: currency });
  return conversionString;
}

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
      const conversionString = displayRate(amount, exchange, currency);
      const message = `Your $${amount} USD is worth ${conversionString}`;
      document.querySelector('#result').innerHTML = message;
    }).catch(function(error) {
      const message = `There was an error: ${error.message}`;
      document.querySelector('#result').innerHTML = message;
    });
  }
});