import React from 'react'
import PropTypes from 'prop-types'

/**
 * Column
 * @param {*} props
 */
export function Columns (props) {
  return <div className='columns'>
    {props.children}
  </div>
}
Columns.propTypes = {
  children: PropTypes.any
}

/**
 * Column
 * @param {*} props
 */
export function Column (props) {
  return <div className='column'>
    {props.children}
  </div>
}
Column.propTypes = {
  children: PropTypes.any
}
