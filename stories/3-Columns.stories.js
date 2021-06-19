import React from 'react'
import 'bulma/css/bulma.css'
import { Column, Columns } from '../src/Columns/Columns'

export default {
  title: 'Columns',
  component: Columns
}

export const ColumnStory = () => (
  <div className='container'>
    <div className='content'>
      <h1>Columns</h1>

      <p>Import:</p>
      <p><code>{`import { Column, Columns } from '@davidcraig/react-bulma'`}</code></p>

      <h2>Standard Example</h2>
      <p>A standard wrapper around bulma Columns and Column, simple flexbox based grid.</p>

      <pre><code>{`<Columns>
  <Column>Col 1 Content</Column>
  <Column>Col 2 Content</Column>
  <Column>Col 3 Content</Column>
</Columns>`
}</code></pre>

    <Columns>
      <Column>Col 1 Content</Column>
      <Column>Col 2 Content</Column>
      <Column>Col 3 Content</Column>
    </Columns>

    <h2>With Sizes</h2>
    <p>You can also pass extra className's for example with bulma you can use is-one-third, is-two-third is-one-quarter etc.</p>
    <p>Any className you pass in will automatically be added to the underlying element.</p>
    <pre><code>{`<Columns>
      <Column className='is-one-quarter'>Col 1 Content</Column>
      <Column className='is-one-quarter'>Col 2 Content</Column>
      <Column className='is-one-half'>Col 3 Content</Column>
    </Columns>`
    }</code></pre>

    <Columns>
      <Column className='is-one-quarter'>Col 1 Content</Column>
      <Column className='is-one-quarter'>Col 2 Content</Column>
      <Column className='is-one-half'>Col 3 Content</Column>
    </Columns>

    </div>
  </div>
)

ColumnStory.story = {
  name: 'Standard Example'
}
