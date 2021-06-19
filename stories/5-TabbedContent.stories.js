import React from 'react'
import 'bulma/css/bulma.css'
import TabbedContent from '../src/TabbedContent/TabbedContent'

export default {
  title: 'TabbedContent',
  component: TabbedContent
}

export const TabbedContentStory = () => (
  <>
    <div className='container'>
      <div className='content'>
        <h1>TabbedContent</h1>

        <p>Import:</p>
        <p><code>{`import { TabbedContent } from '@davidcraig/react-bulma'`}</code></p>

        <h2>Standard Example</h2>
        <pre><code>{`<TabbedContent content={{
  tab1: { title: 'Tab 1', content: 'Hello from tab 1' },
  tab2: { title: 'Tab 2', content: 'Hello from tab 2' }
}}></TabbedContent>`
}</code></pre>
      </div>

      <TabbedContent content={{ tab1: { title: 'Tab 1', content: 'Hello from tab 1' }, tab2: { title: 'Tab 2', content: 'Hello from tab 2' } }}></TabbedContent>
    </div>
  </>
)

TabbedContentStory.story = {
  name: 'Tabbed Content'
}
