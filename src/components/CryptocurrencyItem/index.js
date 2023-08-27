import {Component} from 'react'

import './index.css'

class CryptocurrencyItem extends Component {
  state = {datalist: []}

  componentDidMount() {
    this.getApi()
  }

  getApi = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedata = data.map(eachitem => ({
      id: eachitem.id,
      currencylogo: eachitem.currency_logo,
      currencyName: eachitem.currency_name,
      euroValue: eachitem.euro_value,
      Usdvalue: eachitem.usd_value,
    }))

    this.setState({datalist: updatedata})
  }

  render() {
    const {datalist} = this.state
    return (
      <div>
        <ul className="un-list">
          <li>
            <li>
              {datalist.map(eachItem => (
                <li className="list">
                  <div className="small-container">
                    <img
                      src={eachItem.currencylogo}
                      alt="currency_name"
                      className="logo"
                    />
                    <p className="name">{eachItem.currencyName}</p>
                  </div>
                  <div className="small-container">
                    <p className="name1">{eachItem.Usdvalue}</p>
                    <p className="name1">{eachItem.euroValue}</p>
                  </div>
                </li>
              ))}
            </li>
          </li>
        </ul>
      </div>
    )
  }
}
export default CryptocurrencyItem
