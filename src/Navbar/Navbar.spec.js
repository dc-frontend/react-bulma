// Link.react.test.js
import React from 'react'
import { Navbar, Brand, Item } from './Navbar'
import renderer from 'react-test-renderer'

test('It tests nothing yet', () => {
  
})

test('it does not have an id by default', () => {
  const component = renderer.create(
    <Navbar />
  )

  const id = component.toJSON().props.id

  expect(typeof id).toBe("undefined")
})

test('it can be passed in an id to render on the component', () => {
  const navbarId = 'myNavbar'
  const component = renderer.create(
    <Navbar id={navbarId} />
  )

  const id = component.toJSON().props.id

  expect(typeof id).toBe('string')
  expect(id).toBe(navbarId)
})
