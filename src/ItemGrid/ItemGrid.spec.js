// Link.react.test.js
import React from 'react'
import ItemGrid from './ItemGrid'
import renderer from 'react-test-renderer'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

test('It renders as expected with no content', () => {
  const component = renderer.create(
    <ItemGrid></ItemGrid>
  )
  expect(component.toJSON()).toMatchSnapshot()
})
