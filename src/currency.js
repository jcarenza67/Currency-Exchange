export default class ExchangeRate {
  static getExchangeRate() {
    return new Promise(function(resolve, reject) {
      const cachedExchange = JSON.parse(localStorage.getItem('exchangeRate'));
      if (cachedExchange) {
        resolve(cachedExchange);
        return;
      }

      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.addEventListener("load", function() {
        if (this.status === 200) {
          const exchange = JSON.parse(this.responseText);
          localStorage.setItem('exchangeRate', JSON.stringify(exchange));
          resolve(exchange);
        } else {
          reject(new Error(`Request failed with status ${this.status}`));
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}