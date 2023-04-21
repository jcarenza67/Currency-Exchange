import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './currency.js';

function getExchangeRate(response) {
  return ExchangeRate.getExchangeRate(response).then(function(response) {
    if (response.result === "success") {
      return response.conversion_rates;
    } else {
      throw Error(response.result);
    }
  });
}
