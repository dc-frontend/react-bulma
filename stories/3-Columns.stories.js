import React from 'react'
import 'bulma/css/bulma.css'
import { Column, Columns } from '../src/Columns/Columns'

export default {
  title: 'Columns',
  component: Columns
}

export const ColumnStory = () => (
  <div class="container">
    <div class="content">
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

    </div>

    <Columns>
      <Column>Col 1 Content</Column>
      <Column>Col 2 Content</Column>
      <Column>Col 3 Content</Column>
    </Columns>
  </div>
)

ColumnStory.story = {
  name: 'Standard Example'
}
