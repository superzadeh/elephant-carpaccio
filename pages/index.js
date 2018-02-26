import React, { Component } from 'react'
import style from './style.js'
export default class home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: 'Hello World!'
    }
  }
  render() {
    const { result } = this.state
    return (
      <div>
        <h1>Elephant Carpaccio</h1>
        <br />
        <label htmlFor="quantity">Number of Items</label>
        &nbsp;
        <input name="quantity" type="text" />
        <br />
        <div>{result}</div>
        <style global jsx>
          {style}
        </style>
      </div>
    )
  }
}
