import React from 'react'
import PropTypes from 'prop-types'

/**
 * Breadcrumb (Bulma)
 * @param {*} props
 */
export function Breadcrumb (props) {
  if (props.active) {
    return <li className='is-active' key={`${props.name}-breadcrumb`}><a href='#' aria-current='page'>{props.name}</a></li>
  }
  return <li key={`${props.name}-breadcrumb`}><a href={props.href}>{props.name}</a></li>
}

Breadcrumb.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string.isRequired,
  href: PropTypes.string
}

/**
 * Breadcrumbs (Bulma)
 * @param {*} props
 */
export function Breadcrumbs (props) {
  return <nav className='breadcrumb has-succeeds-separator' aria-label='breadcrumbs'>
    <ul>{props.children}</ul>
  </nav>
}

Breadcrumbs.propTypes = {
  children: PropTypes.any
}
Breadcrumbs.defaultProps = {
  class: 'has-succeeds-seperator'
}
