import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

const CryptocurrenciesList = () => (
  <div className="container">
    <h1 className="heading">Cryptocurrency Tracker</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
      alt="cryptocurrency"
      className="currency-image"
    />
    <div className="below-container">
      <div className="first-container">
        <h1 className="heading3">Coin Type</h1>
        <div className="doller-container">
          <h1 className="heading3">USD</h1>
          <h1 className="heading3">EURO</h1>
        </div>
      </div>
      <CryptocurrencyItem />
    </div>
  </div>
)
export default CryptocurrenciesList
