import React, { Component } from 'react'
import style from './style.js'

const price = 100

const applyDiscount = totalAmount => {
  if (totalAmount < 1000) {
    return totalAmount
  } else if (totalAmount >= 1000 && totalAmount < 5000) {
    return totalAmount - totalAmount * 3 / 100
  } else if (totalAmount >= 5000 && totalAmount < 7000) {
    return totalAmount - totalAmount * 5 / 100
  } else if (totalAmount >= 7000 && totalAmount < 10000) {
    return totalAmount - totalAmount * 7 / 100
  } else if (totalAmount >= 10000 && totalAmount < 50000) {
    return totalAmount - totalAmount * 10 / 100
  } else {
    return totalAmount - totalAmount * 15 / 100
  }
}

export default class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: '0'
    }
  }

  handleQuantityChange = event => {
    const quantity = event.target.value
    const amount = quantity * price
    const discounted = applyDiscount(amount)
    this.setState({ result: discounted })
  }
  render() {
    const { result } = this.state
    return (
      <div className="container">
        <h1>Elephant Carpaccio</h1>
        <br />
        <label htmlFor="quantity">Number of Items</label>
        &nbsp;
        <input name="quantity" type="text" onChange={this.handleQuantityChange} />
        <br />
        <div>{result}</div>
        <style global jsx>
          {style}
        </style>
      </div>
    )
  }
}
