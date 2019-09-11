import React from 'react'

const Grants = ({ grants }) => {
  if (grants === null) {
    return (
      <div>
        <strong className='label-dark'>No Grant</strong>
      </div>
    )
  }
  let totalAmount = 0
  grants.map(grant => (totalAmount += grant.amountAwarded))
  return (
    <div>
      <strong className='label-dark'>Total Grant: </strong>£
      {Math.round(totalAmount)}
    </div>
  )
}

export default Grants
