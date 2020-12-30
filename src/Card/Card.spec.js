// Link.react.test.js
import React from 'react'
import Card from './Card'
import renderer from 'react-test-renderer'
import { cleanup } from '@testing-library/react'

afterEach(cleanup)

test ('It has class of .card and class length of 1 by default', () => {
  const component = renderer.create(
    <Card></Card>
  )

  const className = component.toJSON().props.className

  expect(className).toContain('card')
  expect(typeof className).toBe('string')
})

test ('It can have a className passed in (and retains card)', () => {
  const component = renderer.create(
    <Card className='test'></Card>
  )

  const className = component.toJSON().props.className

  expect(typeof className).toBe('string')
  expect(className).toContain('card')
  expect(className).toContain('test')
})
