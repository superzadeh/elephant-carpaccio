import React, { Component } from 'react'
import style from './style.js'

const price = 100

export default class home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      result: '0'
    }
  }
  handleQuantityChange = (event) => {
    const quantity = event.target.value
    this.setState({ result: quantity * price })
  }
  render () {
    const { result } = this.state
    return (
      <div className="container">
        <h1>Elephant Carpaccio</h1>
        <br />
        <label htmlFor='quantity'>Number of Items</label>
        &nbsp;
        <input name='quantity' type='text' onChange={this.handleQuantityChange} />
        <br />
        <div>{result}</div>
        <style global jsx>
          {style}
        </style>
      </div>
    )
  }
}
