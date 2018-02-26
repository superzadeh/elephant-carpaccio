import React from 'react'
import renderer from 'react-test-renderer'

import Index from './index'

const defaultProps = {
}
const getElement = (propOverrides = {}) => {
  const props = Object.assign({}, defaultProps, propOverrides)
  const element = renderer.create(<Index {...props} />).toJSON()
  return { props, element }
}

describe('index', () => {
  it('should render correctly', () => {
    const { element } = getElement()
    expect(element).toMatchSnapshot()
  })
})
