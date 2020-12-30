// Link.react.test.js
import React from 'react'
import ItemGrid from './ItemGrid'
import renderer from 'react-test-renderer'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

const itemList = (
  <>
    <p>Item 1</p>
    <p>Item 2</p>
    <p>Item 3</p>
    <p>Item 4</p>
    <p>Item 5</p>
    <p>Item 6</p>
  </>
)

test('It has class of item-grid by default', () => {
  const component = renderer.create(
    <ItemGrid>
      {itemList}
    </ItemGrid>
  )

  const json = component.toJSON()
  expect(json.props.className).toBe('item-grid')
})

test('It can have additional classes passed through', () => {
  const component = renderer.create(
    <ItemGrid className='test test-two'>
      {itemList}
    </ItemGrid>
  )

  const json = component.toJSON()
  expect(json.props.className).toBe('item-grid test test-two')
})

test('It defaults to three columns', () => {
  const component = renderer.create(
    <ItemGrid>
      {itemList}
    </ItemGrid>
  )

  const json = component.toJSON()
  const columns = json.children[0]
  expect(columns.children.length).toBe(3)
})

test('It can be supplied a number of columns', () => {
  const component = renderer.create(
    <ItemGrid columns={4}>
      {itemList}
    </ItemGrid>
  )

  const json = component.toJSON()
  const columns = json.children[0]
  expect(columns.children.length).toBe(4)
})

test('It can have 1 or 2 columns', () => {
  const component1 = renderer.create(
    <ItemGrid columns={1}>
      {itemList}
    </ItemGrid>
  )

  const component2 = renderer.create(
    <ItemGrid columns={2}>
      {itemList}
    </ItemGrid>
  )

  const json1 = component1.toJSON().children[0]
  const json2 = component2.toJSON().children[0]
  expect(json1.children.length).toBe(1)
  expect(json2.children.length).toBe(2)
})

test('It can be supplied a number of columns as a string', () => {
  const component = renderer.create(
    <ItemGrid columns='6'>
      {itemList}
    </ItemGrid>
  )

  const json = component.toJSON()
  const columns = json.children[0]
  expect(columns.children.length).toBe(6)
})
