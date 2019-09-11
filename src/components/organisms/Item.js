import React from 'react'

const displayGrants = grants => {
  if (grants === null) {
    return (
      <div>
        <strong className='label-light'>No Grant</strong>
      </div>
    )
  }
  let totalAmount = 0
  grants.map(grant => (totalAmount += grant.amountAwarded))
  return (
    <div>
      <strong className='label-light'>Total Grant: </strong>£
      {Math.round(totalAmount)}
    </div>
  )
}

const Item = ({ charity: { names, grants, finances } }) => {
  console.log('finances', finances)
  return (
    <div className='card grid-123'>
      <div>
        <h4>{names[0].value}</h4>
      </div>
      <div>
        <strong className='label-dark'>Finances:</strong>
      </div>
      <div>{displayGrants(grants)}</div>
    </div>
  )
}

export default Item
