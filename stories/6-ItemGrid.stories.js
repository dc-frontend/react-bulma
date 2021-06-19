import React from 'react'
import 'bulma/css/bulma.css'
import Card from '../src/Card/Card'
import ItemGrid from '../src/ItemGrid/ItemGrid'

export default {
  title: 'Wrappers/ItemGrid',
  component: ItemGrid
}

export const ItemGridStory = () => (
  <>
    <div className="container">
      <div className="content">
        <h1>ItemGrid</h1>

        <p>Import:</p>
        <p><code>{`import { ItemGrid } from '@davidcraig/react-bulma'`}</code></p>

        <h2>Example: YouTube Video Listing</h2>
        
        <pre><code>{`<ItemGrid>
  <Card ytVideo='ecIWPzGEbFc' title='"Uncle" Bob Martin - "The Future of Programming"' />
</ItemGrid>`
}</code></pre>
      </div>

      <ItemGrid columns={3}>
        <Card ytVideo='ecIWPzGEbFc' title='"Uncle" Bob Martin - "The Future of Programming"' />
      </ItemGrid>
    </div>
  </>
)

ItemGridStory.story = {
  name: 'ItemGrid'
}
