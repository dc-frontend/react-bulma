import React from 'react'
import 'bulma/css/bulma.css'
import { Navbar, Brand, Start, End, Dropdown, Item } from '../src/Navbar/Navbar'

export default {
  title: 'Navbar',
  component: Navbar
}

export const NavbarStory = () => (
  <>
    <div class="container">
    <div class="content">
      <h1>Navbar</h1>

      <p>Import:</p>
      <p><code>{`import { Navbar, Brand, Start, End, Dropdown, Item } from '@davidcraig/react-bulma'`}</code></p>

      <h2>Standard Example</h2>
      
      <pre><code>{`<Navbar>
  <Brand title='My Brand' />
  <Start>
    <Item title='About' href='#' />
  </Start>
  <End>
    <Item title='Another Page' href='#' />
    <Dropdown title='Dropdown'>
      <Item title='Dropdown Item' href='#' />
    </Dropdown>
  </End>
</Navbar>`
}</code></pre>

    </div>

  </div>

    <Navbar>
      <Brand title='My Brand' />
      <Start>
        <Item title='About' href='#' />
      </Start>
      <End>
        <Item title='Another Page' href='#' />
        <Dropdown title='Dropdown'>
          <Item title='Dropdown Item' href='#' />
        </Dropdown>
      </End>
    </Navbar>

  <div class="container">

    <div class="content">
      <h2>Dark Mode</h2>

      <pre><code>{`<Navbar dark>
  <Brand title='My Brand' />
  <Start>
    <Item title='About' href='#' />
  </Start>
  <End>
    <Item title='Another Page' href='#' />
    <Dropdown title='Dropdown'>
      <Item title='Dropdown Item' href='#' />
    </Dropdown>
  </End>
</Navbar>`
}</code></pre>
    </div>

  </div>

    <Navbar dark>
      <Brand title='My Brand' />
      <Start>
        <Item title='About' href='#' />
      </Start>
      <End>
        <Item title='Another Page' href='#' />
        <Dropdown title='Dropdown'>
          <Item title='Dropdown Item' href='#' />
        </Dropdown>
      </End>
    </Navbar>
  </>
)

Navbar.story = {
  name: 'Standard Example'
}
