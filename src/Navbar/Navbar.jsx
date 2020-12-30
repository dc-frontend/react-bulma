import React from 'react'
import PropTypes from 'prop-types'

/**
 * Brand
 * @param { Object } props
 * @param { String='/' } props.href - Location where the brand should link to
 * @param { String } props.title - Brand name
 * @param { String } props.target - Link target
 */
export function Brand (props) {
  const aProps = {
    href: props.href ? props.href : '/',
    className: 'navbar-item'
  }
  if (props.target) {
    aProps.target = props.target
  }

  return <div className='navbar-brand'>
    <a {...aProps}>{props.title}</a>
  </div>
}
Brand.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string
}

/**
 * Dropdown
 * @param { Object } props
 * @param { String } props.title - Dropdown link title
 * @param { Object } props.children - Navbar Items
 */
export function Dropdown (props) {
  return <div className="navbar-item has-dropdown is-hoverable">
    <a className="navbar-link">
      {props.title}
    </a>

    <div className="navbar-dropdown">
      {props.children}
    </div>
  </div>
}
Dropdown.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string.isRequired
}

/**
 * Navbar End
 * Items at the end of the navbar (right side).
 * @param {*} props
 */
export function End (props) {
  return <div className='navbar-end'>
    {props.children}
  </div>
}
End.propTypes = {
  children: PropTypes.any
}

/**
 * Navbar Start
 * Items on the left side of the navbar.
 * @param {*} props
 */
export function Start (props) {
  return <div className='navbar-start'>
    {props.children}
  </div>
}
Start.propTypes = {
  children: PropTypes.any
}

/**
 * Navbar Item
 * @param {*} props
 * @param { String } props.href - Link location.
 * @param { String } props.title - Link title.
 */
export function Item (props) {
  return <a href={props.href} className={`navbar-item ${props.className}`}>{props.title}</a>
}
Item.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired
}

/**
 * Navbar
 * @param {*} props
 */
export function Navbar (props) {
  return <div className={props.dark ? 'navbar is-dark' : 'navbar'}>
    {props.children}
  </div>
}
Navbar.propTypes = {
  children: PropTypes.any,
  dark: PropTypes.bool
}

export default Navbar
