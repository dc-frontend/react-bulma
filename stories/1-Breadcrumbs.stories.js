import React from 'react'
import 'bulma/css/bulma.css'
import { Breadcrumb, Breadcrumbs } from '../src/Breadcrumbs/Breadcrumbs'

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs
}

export const BreadcrumbStory = () => (
  <div class="container">
    <div class="content">
      <h1>Breadcrumbs</h1>

      <h2>Standard Example</h2>
      <p>The following is a standard use case of a navigation heirarchy with the current page being 'active'</p>
      <pre><code>{`<Breadcrumbs>
  <Breadcrumb name='My Site'></Breadcrumb>
  <Breadcrumb name='Second Level'></Breadcrumb>
  <Breadcrumb name='Current Page' active></Breadcrumb>
</Breadcrumbs>`
}</code></pre>
    </div>

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
