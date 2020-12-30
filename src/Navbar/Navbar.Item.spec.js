// Link.react.test.js
import React from 'react'
import { Item } from './Navbar'
import renderer from 'react-test-renderer'

test('Item has class name of navbar-item by default', () => {
  const component = renderer.create(
    <Item title='Testing Navbar Brand' href='/' />
  )

  const json = component.toJSON()
  expect(json.props.className).toBe('navbar-item')
})

test('Item can have extra classNames passed in', () => {
  const component = renderer.create(
    <Item title='Testing Navbar Brand' href='/' className='test item' />
  )

  const json = component.toJSON()
  expect(json.props.className).toBe('navbar-item test item')
})

test('Item does not have target property by default', () => {
  const component = renderer.create(
    <Item title='Testing Navbar Brand' href='/' />
  )

  const json = component.toJSON()
  expect(json.props).not.toHaveProperty('target')
})

test('Item can have target property set', () => {
  const component = renderer.create(
    <Item title='Testing Navbar Brand' href='/' target='_blank' />
  )

  const json = component.toJSON()
  expect(json.props).toHaveProperty('target')
  expect(json.props.target).toBe('_blank')
})

test('Item sets the title', () => {
  const component = renderer.create(
    <Item title='Testing Navbar Brand' href='/' />
  )

  const json = component.toJSON()

  expect(json.children[0]).toBe('Testing Navbar Brand')
})
