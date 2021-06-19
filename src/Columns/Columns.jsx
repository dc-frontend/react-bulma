import React from 'react'
import PropTypes from 'prop-types'

/**
 * Column
 * @param {*} props
 */
export function Columns (props) {
  return (
    <div className='columns'>
      {props.children}
    </div>
  )
}
Columns.propTypes = {
  children: PropTypes.any
}

/**
 * Column
 * @param {*} props
 */
export function Column (props) {
  const classes = props.className ? `column ${props.className}` : 'column'
  return (
    <div className={classes}>
      {props.children}
    </div>
  )
}
Column.propTypes = {
  children: PropTypes.any,
  class: PropTypes.any
}
