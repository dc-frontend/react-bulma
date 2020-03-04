// Link.react.test.js
import React from 'react'
import { Column, Columns } from './Columns'
import renderer from 'react-test-renderer'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

test('It renders as expected', () => {
  const component = renderer.create(
    <Columns>
      <Column>I am col 1</Column>
      <Column>I am col 2</Column>
      <Column>I am col 3</Column>
    </Columns>
  )
  expect(component.toJSON()).toMatchSnapshot()
})

test('Column can have custom class passed through', () => {
  const component = renderer.create(
    <Columns>
      <Column class='is-one-third'>I am col 1</Column>
    </Columns>
  )
  expect(component.toJSON()).toMatchSnapshot()
})
