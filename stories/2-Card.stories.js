import React from 'react'
import 'bulma/css/bulma.css'
import { contentWrapped } from './contentWrapped'
import { Column, Columns } from '../src/Columns/Columns'
import { Card } from '../src/Card/Card'

export default {
  title: 'Card',
  component: Card
}

export const CardStory = () => (
  <div class="container">
    {
      contentWrapped(
        <>
          <h1>Card</h1>

          <p>Import:</p>
          <p><code>{`import { Card } from '@davidcraig/react-bulma'`}</code></p>

          <h2>With a title</h2>
          <pre><code>{`<Card title='Title' />`}</code></pre>
        </>
      )
    }
    <Columns>
      <Column class='is-one-third'>
        <Card title='Title' />
      </Column>
    </Columns>
    
    <br/>
    {
      contentWrapped(
        <>
          <h2>Full example</h2>
          <pre><code>{`<Card title='Title' image='https://via.placeholder.com/500x180?text=placeholder' />`}</code></pre>
        </>
      )
    }
    <Columns>
      <Column class='is-one-third'>
        <Card title='Title' image='https://via.placeholder.com/500x180?text=placeholder' />
      </Column>
    </Columns>
  </div>
)

CardStory.story = {
  name: 'Card'
}
