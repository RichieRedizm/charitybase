import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ItemList = ({ charities, loading }) => {
  if (loading || charities === null) {
    return 'Loading....'
  }
  if (charities.length === 0) {
    return 'Sorry, there are no charities that match that criteria.'
  }
  return (
    <div data-testid='charities-list'>
      {charities.map(charity => (
        <Item key={charity.id} charity={charity} />
      ))}
    </div>
  )
}

ItemList.contextTypes = {
  charities: PropTypes.array,
  loading: PropTypes.bool
}

export default ItemList
