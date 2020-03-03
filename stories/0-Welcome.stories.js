import React from 'react'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'
import 'bulma/css/bulma.css'

export default {
  title: 'Bulma React',
  component: Welcome
}

export const Installation = () => (
  <div class="container">
    <div class="content">
      <h1>Bulma-React Components</h1>

      <h2>Installation</h2>
      <pre><code>npm install @dcraig/bulma-react</code></pre>
    </div>
  </div>
)

Installation.story = {
  name: 'Installation'
}
