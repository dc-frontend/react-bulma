import React from 'react'
import 'bulma/css/bulma.css'
import { Breadcrumb, Breadcrumbs } from '../src/Breadcrumbs/Breadcrumbs'
import { contentWrapped } from './contentWrapped'

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs
}

export const BreadcrumbStory = () => (
  <div class="container">
    {
      contentWrapped(
        <>
          <h1>Breadcrumbs</h1>

          <p>Import:</p>
          <p><code>{`import { Breadcrumb, Breadcrumbs } from '@davidcraig/react-bulma'`}</code></p>

          <h2>Standard Example</h2>
          <p>The following is a standard use case of a navigation heirarchy with the current page being 'active'</p>
          <pre><code>{`<Breadcrumbs>
  <Breadcrumb name='My Site'></Breadcrumb>
  <Breadcrumb name='Second Level'></Breadcrumb>
  <Breadcrumb name='Current Page' active></Breadcrumb>
</Breadcrumbs>`}</code></pre>
        </>
      )
    }

    <Breadcrumbs>
      <Breadcrumb name='My Site'></Breadcrumb>
      <Breadcrumb name='Second Level'></Breadcrumb>
      <Breadcrumb name='Current Page' active></Breadcrumb>
    </Breadcrumbs>
  </div>
)

BreadcrumbStory.story = {
  name: 'Standard Example'
}
