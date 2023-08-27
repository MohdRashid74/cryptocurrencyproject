import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

class CryptocurrencyTracker extends Component {
  state = {isloading: false}

  render() {
    const {isloading} = this.state
    return (
      <div>
        {isloading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="bg-container">
            <CryptocurrenciesList />
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
