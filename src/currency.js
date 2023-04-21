export default class ExchangeRate {
  static async getExchangeRate() {
    const cachedExchange = JSON.parse(sessionStorage.getItem('exchangeRate'));
    if (cachedExchange) {
      return cachedExchange;
    }

    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const exchange = await response.json();
    sessionStorage.setItem('exchangeRate', JSON.stringify(exchange));
    return exchange;
  }


  static async getCurrencies() {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`;

    try{
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      const currencies = data.supported_codes.map(code => ({ code: code[0], name: code[1] }));
      return currencies;
    } catch(error) {
      throw new Error(`${error.message}`);
    }
  }
}