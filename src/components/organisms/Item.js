import React from 'react'
import Finances from '../atoms/Finances'
import Grants from '../atoms/Grants'

const Item = ({ charity: { names, grants, finances } }) => {
  return (
    <div className='card grid-item'>
      <div>
        <h4>{names[0].value}</h4>
      </div>
      <div>
        <strong className='label-dark'>Finances:</strong>
        <Finances finances={finances} />
      </div>
      <Grants grants={grants} />
    </div>
  )
}

export default Item
