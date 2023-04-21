export default class ExchangeRate {
  static getExchangeRate(response) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.addEventListener("load", function() {
        if (this.status === 200) {
          const exchange = JSON.parse(this.responseText);
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