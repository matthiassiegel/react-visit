import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import { setupJsdom } from './jsdom'
import Visit from '../src/Visit'

test('Visit component', (t) => {
  setupJsdom()

  const testVisit = () => {
    console.log('just visiting...')
  }

  const component = shallow(<Visit />)
  const wrapper = mount(<Visit onVisited={testVisit} />)

  t.equal(
    component.find('span').text(), '', 'the visit component has no text'
  )

  t.equal(
    wrapper.props().onVisited, testVisit, 'the visit component has an onVisited prop'
  )

  t.end()
});