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
  constructor (props) {
    super(props)
    this.state = {
      priceDiscounted: 0,
      priceWithoutDiscount: 0,
      price: 100
    }
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
  }

  handleQuantityChange (event) {
    const quantity = this.quantity.value
    const amount = quantity * this.price.value
    const discounted = applyDiscount(amount)
    const saving = amount - discounted
    this.setState({
      priceDiscounted: discounted,
      priceWithoutDiscount: amount,
      saving
    })
  }
  render () {
    const { priceDiscounted, priceWithoutDiscount, saving } = this.state
    return (
      <div className='container'>
        <h1>Elephant Carpaccio</h1>
        <br />
        <label htmlFor='quantity'>Number of Items</label>
        &nbsp;
        <input
          name='quantity'
          type='text'
          onChange={this.handleQuantityChange}
          ref={c => (this.quantity = c)}
        />
        <br />
        <label htmlFor='price'>Price per Item</label>
        &nbsp;
        <input
          name='price'
          type='text'
          onChange={this.handleQuantityChange}
          ref={c => (this.price = c)}
        />
        <br />
        <br />
        <div>Total price without discount: {priceWithoutDiscount}$</div>
        <div>
          Total price with discount: <strong>{priceDiscounted}$</strong>
        </div>
        <div>You just saved {saving}$</div>
        <style global jsx>
          {style}
        </style>
      </div>
    )
  }
}
