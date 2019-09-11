import React, { useContext } from 'react'
import CharityBaseContext from '../../context/charityBase/charityBaseContext'
import Item from './Item'

const ItemList = () => {
  const charityBaseContext = useContext(CharityBaseContext)
  const { loading, charities } = charityBaseContext

  if (loading || charities == null) {
    return 'Loading....'
  }
  // console.log('charities', charities)
  return (
    <div>
      {charities.map(charity => (
        <Item key={charity.id} charity={charity} />
      ))}
    </div>
  )
}

export default ItemList
