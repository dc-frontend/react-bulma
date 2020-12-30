import React from 'react'
import { Column, Columns } from '../Columns/Columns'

export class ItemGrid extends React.Component {
  key () {
    return this.props.key || 'id'
  }

  columns () {
    if (this.props.columns) {
      return parseInt(this.props.columns)
    }
    return 3
  }

  renderColumns (columns) {
    const cols = columns.map(col => {
      return this.renderColumn(col)
    })

    return (
      <Columns>
        {cols}
      </Columns>
    )
  }

  renderColumn (col) {
    const items = col.items.map(item => {
      return item
    })

    return (
      <Column key={col.id}>
        {items}
      </Column>
    )
  }

  buildColumnizedListing () {
    let items = this.props.children
    let colCount = this.columns()
    let columns = []

    let i = 0
    while (i < colCount) {
      columns.push({ id: i, items: [] })
      i++
    }

    if (!Array.isArray(items)) {
      columns[0].items.push(this.props.children)
      return columns
    }

    let column = 0
    items.forEach(item => {
      columns[column].items.push(item)

      if (column === 2) {
        column = 0
      } else {
        column++
      }
    })
    return columns
  }

  title () {
    if (!this.props.title) { return false }
    return <h1>{this.props.title}</h1>
  }

  render () {
    let data = this.buildColumnizedListing()
    let title = this.title()
    let cols = this.renderColumns(data)
    let classes = 'item-grid'
    if (typeof this.props.className !== 'undefined') {
      classes = classes + ' ' + this.props.className
    }

    return (
      <div className={classes}>
        {title}
        {cols}
      </div>
    )
  }
}

export default ItemGrid
