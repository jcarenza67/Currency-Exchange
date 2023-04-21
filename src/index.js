import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './currency.js';

function getExchangeRate(response) {
  let promise = ExchangeRate.getExchangeRate(response);
  promise.then(function(exchangeInfo) {
    displayRate(exchangeInfo);
  }, function(errorArray) {
    printError(errorArray); 
  });
}

function displayRate(response, amount, targetCurrency) {
  const exchangeRate = response[targetCurrency];
  const conversion = amount * exchangeRate;
  const conversionString = conversion.toFixed(2);
  return conversionString;
}
