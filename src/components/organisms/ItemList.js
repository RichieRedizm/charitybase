import React, { useContext } from 'react'
import CharityBaseContext from '../../context/charityBase/charityBaseContext'
import Item from './Item'

const ItemList = () => {
  const charityBaseContext = useContext(CharityBaseContext)
  const { loading, charities } = charityBaseContext

  if (loading || charities === null) {
    return 'Loading....'
  }
  if (charities.length === 0) {
    return 'Sorry, there are no charities that match that criteria.'
  }

  return (
    <div>
      {charities.map(charity => (
        <Item key={charity.id} charity={charity} />
      ))}
    </div>
  )
}

export default ItemList
