import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from '.js/currency.js';

function getExchangeRate(response) {
  if (response.result === "success") {
    return response.conversion_rates;
  } else {
    throw Error(response.result);
  }
}
