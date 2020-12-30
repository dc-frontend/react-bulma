// Link.react.test.js
import React from 'react'
import { Brand } from './Navbar'
import renderer from 'react-test-renderer'

test('Brand does not have target property by default', () => {
  const component = renderer.create(
    <Brand title='Testing Navbar Brand' />
  )

  const json = component.toJSON()
  expect(json.children[0].props).not.toHaveProperty('target')
})

test('Brand can have target property set', () => {
  const component = renderer.create(
    <Brand title='Testing Navbar Brand' target='_blank' />
  )

  const json = component.toJSON()
  expect(json.children[0].props).toHaveProperty('target')
  expect(json.children[0].props.target).toBe('_blank')
})

test('Brand can accept a title', () => {
  const component = renderer.create(
    <Brand title='Testing Navbar Brand' />
  )

  const json = component.toJSON()

  expect(json.children[0].children[0]).toBe('Testing Navbar Brand')
})
