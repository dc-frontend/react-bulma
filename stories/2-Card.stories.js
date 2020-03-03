import React from 'react'
import 'bulma/css/bulma.css'
import { Card } from '../src/Card/Card'

export default {
  title: 'Card',
  component: Card
}

export const CardStory = () => (
  <div class="container">
    <div class="content">
      <h1>Card with just a title</h1>

      <Card title='Hello i am a card' />

      
    </div>
  </div>
)

CardStory.story = {
  name: 'Card'
}
